# Perceptron

A multi-tenant AI customer support platform. Drop an embeddable script tag on any website — your visitors get a floating widget with streaming AI chat, live WebRTC voice calls, conversation history, and contact escalation. Your team gets a real-time dashboard to monitor, triage, and respond. The script injects a fully isolated, cross-origin AI support interface backed by a RAG-augmented agent, a real-time Convex database, and a Vapi WebRTC voice stack.

---

## Architecture

Perceptron uses a **monorepo architecture** managed by Turborepo and pnpm workspaces. The system is split across three deployable apps and a shared backend package, each with a well-defined responsibility boundary:

```
perceptron/
├── apps/
│   ├── embed/        Plain TypeScript → Vite IIFE bundle (widget.js)
│   ├── widget/       Next.js 15 app — runs inside the cross-origin iframe
│   └── web/          Next.js 15 dashboard for organization owners
└── packages/
    ├── backend/      Convex schema, queries, mutations, actions, AI agents
    ├── ui/           Shared component library built on Radix UI + shadcn
    ├── math/         Shared computation utilities
    ├── eslint-config/
    └── typescript-config/
```

### Cross-app communication

`apps/embed` is the only surface that touches a customer's page. It creates a sandboxed `<iframe>` pointing to `apps/widget`, which is hosted on Perceptron's domain. The two apps communicate exclusively via `postMessage` with strict origin validation — the customer's JavaScript cannot reach Perceptron's code, and vice versa. `apps/web` (the dashboard) shares the same Convex backend as the widget and gets real-time updates via Convex's reactive query system.

```
Customer page  →  widget.js (IIFE)  →  <iframe src="widget.perceptron.ai">
                       ↕ postMessage (origin-validated)
                  Convex Backend ←→ apps/web dashboard (real-time)
```

---

## The Embed Script (`apps/embed`)

The script customers paste is a **zero-dependency IIFE** built with Vite in library mode. It has no framework, no module system, and no runtime imports — it works with a plain `<script src>` on any site without `type="module"`.

**Script lifecycle:**
1. Reads `data-organization-id` (and optional `data-position`) from its own `<script>` tag via `document.currentScript`, with a fallback selector for `async`/`defer` edge cases
2. Injects a fixed-position button (`z-index: 999999`) and container (`z-index: 999998`) into `document.body`
3. Mounts an `<iframe>` inside the container with `allow="microphone; clipboard-read; clipboard-write"` (required for voice + copy-paste in the cross-origin context)
4. Registers a `postMessage` listener that validates `event.origin` before acting on any message

**Show/hide animation:**  
`show()` sets `display: block`, then triggers the CSS transition after a `setTimeout(fn, 10)` — required because setting `display` and a CSS transition in the same microtask skips the animation (the browser hasn't painted yet). `hide()` reverses the opacity/transform, then sets `display: none` after 300 ms when the transition completes.

**Global API:**
```ts
window.PerceptronWidget = { show, hide, destroy, init }
// destroy() removes all DOM nodes AND window.removeEventListener('message', ...)
// init() is a full destroy + re-render, used when organizationId changes dynamically
```

---

## The Widget App (`apps/widget`)

A Next.js 15 App Router application rendered entirely inside the iframe. There is no URL routing — the entire UI is a **screen state machine** driven by a single Jotai atom.

### Screen state machine

```
Loading ──► (4-step async init pipeline)
    │
    ├── org invalid                    ──► ERROR
    │
    └── org valid
            ├── no/expired session     ──► AUTH ──► SELECTION
            └── valid session          ──────────► SELECTION
                                                      ├── CHAT ──► INBOX
                                                      │       └──► CONTACT
                                                      └── VOICE
```

### Init pipeline

Runs as a sequential 5-step state machine: `org → session → settings → vapi → done`

| Step | Convex call | Failure handling |
|------|-------------|-----------------|
| `org` | `api.public.organizations.validate` | → `error` screen, hard stop |
| `session` | `api.public.contactSessions.validate` | marks session invalid, continues |
| `settings` | `api.public.widgetSettings.getByOrganizationId` | — |
| `vapi` | `api.public.secrets.getVapiSecrets` | `vapiSecretsAtom = null`, voice silently disabled |
| `done` | — | routes to `selection` or `auth` |

Vapi failure is explicitly non-fatal — voice is an optional extension, chat always works.

### Jotai state

| Atom | Purpose |
|------|---------|
| `screenAtom` | Current screen |
| `organizationIdAtom` | Validated org ID |
| `widgetSettingsAtom` | Org's widget config (greet message, suggestions, Vapi assistant ID) |
| `vapiSecretsAtom` | Vapi public key — `null` disables the voice screen |
| `conversationIdAtom` | Active Convex conversation document ID |
| `contactSessionIdAtomFamily(orgId)` | Per-org session token in `localStorage` |

`contactSessionIdAtomFamily` uses `atomWithStorage` + `atomFamily` to create an isolated localStorage key per organization (`perceptron_widget_contact_session_${orgId}`). This is the key design decision that makes the widget safe to embed on multi-tenant or multi-widget pages — sessions from different organizations never collide.

### Voice (Vapi WebRTC)

The `useVapi` hook wraps the Vapi Web SDK. `vapi.start(assistantId)` initiates a WebRTC call; the hook subscribes to `call-start`, `call-end`, `speech-start`, `speech-end`, and `message` events to drive real-time UI state (pulse animations, live transcript). Cleanup: `useEffect` returns `() => vapiInstance?.stop()` to kill zombie calls on unmount.

---

## The Backend (`packages/backend`)

A **Convex** serverless backend. The same deployment is used by both `apps/widget` (public, unauthenticated API) and `apps/web` (private, Clerk-authenticated API). The split is enforced by two separate API surface directories:

```
convex/
├── public/    ← Widget-facing: no auth required
│   ├── organizations.ts     validate org ID
│   ├── contactSessions.ts   create/validate visitor sessions
│   ├── conversations.ts     start/continue conversations
│   ├── messages.ts          send messages, stream AI responses
│   ├── widgetSettings.ts    read org widget config
│   └── secrets.ts           expose Vapi public key (never private key)
│
├── private/   ← Dashboard-facing: Clerk identity required on every handler
│   ├── conversations.ts     paginated list, status updates (unresolved/escalated/resolved)
│   ├── messages.ts          operator reply with AI message enhancement
│   ├── files.ts             knowledge base file upload + RAG indexing
│   ├── plugins.ts           manage third-party integrations (Vapi, etc.)
│   ├── secrets.ts           store encrypted API keys
│   ├── vapi.ts              Vapi assistant configuration
│   └── widgetSettings.ts    update widget config
│
├── system/    ← Internal: called only by other Convex functions
│   ├── ai/
│   │   ├── agents/supportAgent.ts    Convex Agent definition
│   │   ├── tools/                    search, escalate, resolve
│   │   ├── constants.ts              system prompts
│   │   └── rag.ts                    RAG namespace instance
│   └── subscriptions.ts             subscription state
│
└── http.ts    ← Clerk webhook (Svix-verified) → subscription sync
```

### AI Agent

The core AI is a **Convex Agent** (`@convex-dev/agent`) — a thin orchestration layer over the Vercel AI SDK that stores message history directly in Convex. This means conversation threads are natively persistent and queryable, with no separate vector DB or message log to manage.

The agent is given three tools:

```ts
// tools/search.ts — RAG search over the org's knowledge base
// tools/escalateConversation.ts — updates conversation.status to "escalated"
// tools/resolveConversation.ts — updates conversation.status to "resolved"
```

Response generation uses **two LLM passes**: the agent first decides which tool to call (search/escalate/resolve), then a second `SEARCH_INTERPRETER_PROMPT` pass formats the raw RAG results into a conversational response. Operator replies go through a third `OPERATOR_MESSAGE_ENHANCEMENT_PROMPT` pass to fix grammar and tone before sending.

### RAG Pipeline (`@convex-dev/rag`)

Org owners upload knowledge base files (PDFs, docs, etc.) from the dashboard. The `addFile` action:

1. Validates Clerk identity and checks `subscription.status === "active"` (upload is gated behind a paid plan)
2. Stores the raw file in Convex storage (`ctx.storage.store`)
3. Extracts plain text via `extractTextContent`
4. Runs `contentHashFromArrayBuffer` — skips re-indexing if file content is unchanged
5. Calls `rag.add({ namespace: orgId, text, key, metadata })` — the `namespace` parameter is critical; it scopes the vector search to the uploading org so searches never leak across tenants

The RAG namespace is equivalent to the Clerk organization ID. Every search, list, and delete operation validates that the requesting org owns the namespace before proceeding.

### Schema

```ts
subscriptions:     { organizationId, status }
widgetSettings:    { organizationId, greetMessage, defaultSuggestions, vapiSettings }
plugins:           { organizationId, service: "vapi", secretName }
conversations:     { threadId, organizationId, contactSessionId, status: "unresolved"|"escalated"|"resolved" }
contactSessions:   { name, email, organizationId, expiresAt, metadata: { userAgent, language, platform,
                     screenResolution, viewportSize, timezone, referrer, currentUrl, ... } }
```

`contactSessions` captures browser fingerprint metadata (user agent, screen resolution, viewport, timezone, referrer) at session creation time — this populates the contact card in the dashboard so operators have context before replying.

### Webhook & Billing

`convex/http.ts` exposes a single HTTP route: `/clerk-webhook`. It verifies the Svix signature before processing. On a `subscription.updated` event it:
1. Updates `conversations.status` in Convex via `internal.system.subscriptions.upsert`
2. Calls the Clerk Management API to update `maxAllowedMemberships` (5 on active, 1 on lapse), enforcing seat limits at the identity layer

---

## Dashboard (`apps/web`)

Next.js 15 dashboard for organization owners, protected by Clerk middleware.

| Module | Description |
|--------|-------------|
| `auth` | Clerk sign-in / sign-up |
| `dashboard` | Real-time conversation feed, analytics, status triage (unresolved / escalated / resolved) |
| `customization` | Widget theming — greet message, suggested prompts, Vapi assistant config |
| `integrations` | Embed snippet generator with tabs for HTML, React, Next.js, and vanilla JS |
| `billing` | Subscription management |
| `plugins` | Third-party integrations (Vapi keys, etc.) |
| `files` | Knowledge base management — upload, list, delete, RAG indexing status |

---

## Tech Stack

| | |
|---|---|
| **Monorepo** | Turborepo + pnpm workspaces |
| **Web / Widget** | Next.js 15 (App Router), React 19 |
| **Embed Script** | TypeScript → Vite IIFE (zero runtime deps) |
| **Backend** | Convex (real-time, serverless, reactive queries) |
| **AI** | Vercel AI SDK · Convex Agent (`@convex-dev/agent`) |
| **RAG** | `@convex-dev/rag` (namespace-isolated vector search) |
| **Auth** | Clerk (org-level, webhook-synced to Convex) |
| **Voice** | Vapi AI — WebRTC via `@vapi-ai/web` |
| **State** | Jotai (`atomWithStorage`, `atomFamily`) |
| **UI** | Radix UI · shadcn/ui · Tailwind CSS v4 |
| **Forms** | React Hook Form + Zod |
| **Monitoring** | Sentry (edge + server + client instrumentation) |
| **Webhook verification** | Svix |
| **Language** | TypeScript 5.9, strict throughout |

---

## Getting Started

**Prerequisites:** Node.js ≥ 20, pnpm 10.4+

```bash
git clone https://github.com/your-username/perceptron.git
cd perceptron
pnpm install
```

Configure environment variables in `apps/web/.env.local`, `apps/widget/.env.local`, and `apps/embed/.env.local` (Convex deployment URL, Clerk publishable/secret keys, Vite widget URL).

```bash
pnpm dev          # starts all apps in parallel via Turborepo
pnpm build        # production build, all workspaces
pnpm lint         # lint all workspaces
pnpm format       # prettier across all .ts, .tsx, .md
```

| App | Port |
|-----|------|
| `apps/web` (dashboard) | 3005 |
| `apps/widget` (iframe) | 3001 |
| `apps/embed` (dev harness) | 3009 |

---

## License

[MIT](./LICENSE)