# Perceptron Embed App — Interview Guide

> Covers everything in `apps/embed` and how it connects to `apps/widget` and `apps/web/modules/integrations`.

---

## What is the Embed App?

The embed app produces a **single JavaScript file (`widget.js`)** that any website drops in via a `<script>` tag to get a floating AI support chat widget — similar to Intercom or Crisp.

It is **not a React app**. It's plain TypeScript that runs directly in the browser with zero runtime dependencies.

---

## Monorepo Layout

```
perceptron/
├── apps/
│   ├── embed/        ← builds widget.js (this app)
│   ├── widget/       ← Next.js app rendered inside the iframe
│   └── web/          ← main Perceptron dashboard
│       └── modules/integrations/   ← UI for copying embed snippets
└── packages/
    └── backend/      ← Convex backend (shared by widget + web)
```

`embed` = tiny script on the **customer's website**  
`widget` = Next.js app inside the **iframe**, hosted by Perceptron

---

## File-by-File

### `embed.ts` — Entry point (IIFE)

The entire file is wrapped in an **IIFE** `(function() { ... })()` to avoid polluting the customer's global scope. All internal state (`iframe`, `container`, `button`, `isOpen`) is scoped privately.

Only one global is exposed on purpose:
```ts
(window as any).PerceptronWidget = { init, show, hide, destroy };
```

**What it does:**
1. Reads `data-organization-id` and `data-position` from its own `<script>` tag via `document.currentScript`
2. Falls back to `document.querySelectorAll('script[src*="embed"]')` if `currentScript` is null (happens with `async`/`defer`)
3. Calls `init()` → `render()` (or defers to `DOMContentLoaded`)
4. `render()` injects a floating `<button>` and a hidden `<div>` container into `document.body`
5. Creates an `<iframe>` inside the container pointing to the widget URL
6. Listens for `postMessage` events from the iframe

### `config.ts` — Environment config

```ts
export const EMBED_CONFIG = {
  WIDGET_URL: import.meta.env.VITE_WIDGET_URL || "http://localhost:3001",
  DEFAULT_ORG_ID: "org_3BOkCa7uI7FVVMq4uZVri7XAMcw",
  DEFAULT_POSITION: "bottom-right" as const,
};
```

`VITE_WIDGET_URL` is set at build time. Falls back to `localhost:3001` locally (where `apps/widget` runs).

### `icons.ts` — Inline SVGs

Two exported SVG strings: `chatBubbleIcon` (shown when closed) and `closeIcon` (shown when open). Inline SVGs avoid extra HTTP requests — they're baked into the final bundle.

### `vite.config.ts` — Library mode build

```ts
build: {
  lib: {
    entry: resolve(__dirname, "embed.ts"),
    name: "PerceptronWidget",
    fileName: "widget",
    formats: ["iife"],        // ← produces a self-executing script, no module system
  }
}
server: { port: 3009, open: "/demo.html" }
```

Vite is used as a **library bundler**, not a web app bundler. IIFE format means the output works with a plain `<script src="...">` on any page — no `type="module"` needed.

### `demo.html` — Local dev testing page

Loads `embed.ts` directly via Vite's dev server. Has form fields for `organizationId` and `position`, and buttons wired to `window.PerceptronWidget.init/show/hide/destroy`. Auto-opens at `http://localhost:3009/demo.html`.

### `vite-env.d.ts`

Declares `VITE_WIDGET_URL` as a typed env variable so `import.meta.env.VITE_WIDGET_URL` doesn't produce TypeScript errors.

### `package.json`

```json
{ "name": "embed", "type": "module",
  "scripts": { "dev": "vite --port 3009", "build": "vite build" } }
```

No runtime dependencies — Vite and TypeScript are dev-only.

---

## DOM Injection

`render()` adds exactly two elements to `document.body`:

**Button** (`#perceptron-widget-button`)
- `position: fixed`, `bottom: 20px`, left or right `20px` based on config
- 60×60px circle, `z-index: 999999`
- Hover → `scale(1.05)` via `mouseenter`/`mouseleave`
- Icon swaps between `chatBubbleIcon` ↔ `closeIcon` on toggle

**Container** (`#perceptron-widget-container`)
- `position: fixed`, `bottom: 90px`, 400×600px, `z-index: 999998`
- `max-width: calc(100vw - 40px)`, `max-height: calc(100vh - 110px)` (responsive)
- Starts `display: none; opacity: 0`

**iframe** (inside container)
```ts
iframe.src = `${EMBED_CONFIG.WIDGET_URL}?organizationId=${organizationId}`;
iframe.allow = 'microphone; clipboard-read; clipboard-write';
```
The `allow` attribute is required for voice features (mic) and copy-paste inside the cross-origin iframe.

---

## Show / Hide Animation

**`show()`** — sets `display: block`, then after a 10ms `setTimeout`:
- `opacity: 1`, `transform: translateY(0)` → CSS transition plays (slides up + fades in)

The timeout is needed because setting `display: block` and triggering a CSS transition in the same JS frame doesn't animate — the browser needs a reflow first.

**`hide()`** — sets `opacity: 0`, `transform: translateY(10px)`, then after 300ms (once animation finishes): `display: none`.

---

## postMessage (Cross-Origin Communication)

The iframe is cross-origin so direct JS access is blocked. The embed listens:

```ts
function handleMessage(event: MessageEvent) {
  if (event.origin !== new URL(EMBED_CONFIG.WIDGET_URL).origin) return; // origin check = security
  const { type, payload } = event.data;
  switch (type) {
    case 'close': hide(); break;
    case 'resize': container.style.height = `${payload.height}px`; break;
  }
}
```

The origin check is critical — without it, any page could send malicious messages.

| Message `type` | Effect |
|---|---|
| `close` | Hides the widget |
| `resize` | Dynamically resizes the container height |

---

## Global API

```ts
window.PerceptronWidget = {
  show,        // open programmatically
  hide,        // close programmatically
  destroy,     // remove all DOM elements + event listeners
  init: reinit // destroy + re-create with new config
}
```

`destroy()` also calls `window.removeEventListener('message', handleMessage)` to prevent memory leaks.

`reinit()` is useful for multi-tenant dashboards where the `organizationId` changes dynamically.

---

## Integrations Page (`apps/web/modules/integrations/constants.ts`)

The Perceptron dashboard has an **Integrations page** where organization owners copy their embed snippet. Four framework tabs are defined:

```ts
export const INTEGRATIONS = [
  { id: "html",       title: "HTML",       icon: "/languages/html5.svg" },
  { id: "react",      title: "React",      icon: "/languages/react.svg" },
  { id: "nextjs",     title: "Next.js",    icon: "/languages/nextjs.svg" },
  { id: "javascript", title: "JavaScript", icon: "/languages/javascript.svg" },
];

export type IntegrationId = (typeof INTEGRATIONS)[number]["id"];
// → "html" | "react" | "nextjs" | "javascript"
```

Each tab shows the same snippet (currently identical — the comment in the file explains this is intentional until framework-specific setups like React components or WordPress plugins are added):

```ts
export const HTML_SCRIPT       = `<script src="..." data-organization-id="{{ORGANIZATION_ID}}"></script>`;
export const REACT_SCRIPT      = `<script src="..." data-organization-id="{{ORGANIZATION_ID}}"></script>`;
export const NEXTJS_SCRIPT     = `<script src="..." data-organization-id="{{ORGANIZATION_ID}}"></script>`;
export const JAVASCRIPT_SCRIPT = `<script src="..." data-organization-id="{{ORGANIZATION_ID}}"></script>`;
```

`{{ORGANIZATION_ID}}` is a template placeholder replaced at render time with the real org ID.

---

## Widget App (Inside the iframe)

`apps/widget` is a **Next.js 14 (App Router)** app.

### Entry: `app/page.tsx`
```tsx
const Page = ({ searchParams }: Props) => {
  const { organizationId } = use(searchParams); // React use() unwraps Promise-based searchParams
  return <WidgetView organizationId={organizationId} />;
};
```

### Screen Router: `WidgetView`
Uses a **Jotai `screenAtom`** to render one of 8 screens:

```ts
{ loading, error, auth, selection, chat, voice, inbox, contact }
```

No URL routing — everything is a single iframe page, screen is global state.

---

## Widget Screen State Machine

```
LOADING → (always first) → runs 4-step init pipeline
    ├── invalid org → ERROR
    └── valid org
            ├── no session / invalid session → AUTH → (on register) → SELECTION
            └── valid session → SELECTION
                                    ├── CHAT → INBOX or CONTACT
                                    └── VOICE
```

---

## Loading Init Pipeline (`widget-loading-screen.tsx`)

Runs as a 5-step state machine: `"org" → "session" → "settings" → "vapi" → "done"`

| Step | API Call | On Failure | On Success |
|---|---|---|---|
| `org` | `api.public.organizations.validate` | → `error` screen | advance |
| `session` | `api.public.contactSessions.validate` | marks session invalid, advance | marks valid, advance |
| `settings` | `api.public.widgetSettings.getByOrganizationId` (Convex query) | — | sets `widgetSettingsAtom`, advance |
| `vapi` | `api.public.secrets.getVapiSecrets` | sets `vapiSecretsAtom = null`, advance | sets secrets, advance |
| `done` | — | — | → `selection` (valid session) or `auth` (no session) |

Vapi failure is **non-fatal** — voice is optional.

---

## Jotai Atoms (Global State)

| Atom | Default | Purpose |
|---|---|---|
| `screenAtom` | `"loading"` | Current screen |
| `organizationIdAtom` | `null` | Validated org ID |
| `widgetSettingsAtom` | `null` | Org's widget config from Convex |
| `vapiSecretsAtom` | `null` | Vapi public key |
| `hasVapiSecretsAtom` | derived | `true` if voice is available |
| `errorMessageAtom` | `null` | Error text for error screen |
| `loadingMessageAtom` | `null` | Loading text for loading screen |
| `conversationIdAtom` | `null` | Active Convex conversation ID |
| `contactSessionIdAtomFamily(orgId)` | `null` | Per-org session in `localStorage` |

### `contactSessionIdAtomFamily` — Key pattern

```ts
atomFamily((organizationId) =>
  atomWithStorage(`perceptron_widget_contact_session_${organizationId}`, null)
)
```

Creates a **separate localStorage key per org**, so sessions from different organizations embedded on the same page never collide. This also persists sessions across page refreshes.

---

## Voice (Vapi)

`useVapi` hook wraps the Vapi Web SDK:

```ts
const vapiInstance = new Vapi(vapiSecrets.publicApiKey);
vapi.start(widgetSettings.vapiSettings.assistantId); // starts WebRTC voice call
```

| Event | Effect |
|---|---|
| `call-start` | `isConnected = true`, clears transcript |
| `call-end` | resets all call state |
| `speech-start/end` | toggles `isSpeaking` (drives pulse animation in UI) |
| `message` (final transcript) | appends to transcript array |
| `error` | logs, resets `isConnecting` |

Cleanup: `useEffect` returns `() => vapiInstance?.stop()` to kill zombie calls on unmount.

---

## Common Interview Q&A

**How does the script know which org to load?**  
`document.currentScript.getAttribute('data-organization-id')`. Passed as `?organizationId=` in the iframe URL. Widget reads it from `searchParams`.

**Why IIFE instead of ES module?**  
ES modules need `<script type="module">`, which has CORS and async constraints. IIFE works with any plain `<script src>` tag on any site.

**Why a separate `embed` + `widget` app?**  
Security isolation. The iframe is cross-origin, so the customer's page cannot access Perceptron's code and vice versa. The only bridge is `postMessage`.

**Why does `show()` use `setTimeout`?**  
Setting `display: block` and a CSS transition in the same frame skips the animation — the browser hasn't painted yet. A 10ms timeout forces a reflow so the transition plays.

**What if `organizationId` is missing?**  
`console.error(...)` and early return — nothing renders.

**What if `organizationId` is invalid (server-side)?**  
`validateOrganization` returns `{ valid: false }` → `errorMessageAtom` is set → screen transitions to `"error"`.

**How does a returning visitor skip the auth screen?**  
`contactSessionId` from localStorage is validated on init. If valid → `"selection"` screen. If not → `"auth"`.

**Why Jotai over Context or Redux?**  
Context would require deep nesting. Redux is overkill. Jotai gives per-atom subscriptions with built-in `atomWithStorage` and `atomFamily` — exactly what's needed for per-org session scoping.
