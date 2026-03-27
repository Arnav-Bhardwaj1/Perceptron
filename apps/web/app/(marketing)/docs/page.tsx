import Link from "next/link";
import { ButtonLink } from "@workspace/ui/components/button-link";
import {
  BookOpenIcon,
  CodeIcon,
  CpuIcon,
  DatabaseIcon,
  HeadphonesIcon,
  LayersIcon,
  MessageSquareTextIcon,
  MicIcon,
  NetworkIcon,
  PaletteIcon,
  PhoneIcon,
  SettingsIcon,
  UploadIcon,
  ZapIcon,
} from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Complete guide to setting up and using Perceptron — AI-powered customer support across chat, voice, and phone.",
};

const sections = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: ZapIcon,
    badge: "Quickstart",
    content: [
      {
        title: "Create Your Account",
        body: "Sign up for a free Perceptron account at perceptron.app. You'll be guided through organization setup automatically. No credit card required for the free tier.",
      },
      {
        title: "Organization Setup",
        body: "After signing up, create or join an organization. Each organization gets its own isolated workspace with separate conversations, knowledge base, and widget configuration. You can invite team members from the dashboard settings.",
      },
      {
        title: "Dashboard Overview",
        body: "The dashboard is your command center. The sidebar gives you quick access to Conversations (your unified inbox), Files (knowledge base management), Customization (widget theming), Integrations, Billing, and Plugin configuration. The conversations view is where you'll spend most of your time monitoring and managing customer interactions.",
      },
    ],
  },
  {
    id: "voice-ai",
    title: "Voice AI",
    icon: MicIcon,
    badge: "Real-time",
    content: [
      {
        title: "In-Browser Voice",
        body: "The chat widget includes a built-in voice mode. Visitors can click the microphone button to start a real-time voice conversation with your AI agent directly in the browser. The AI uses your knowledge base to answer questions naturally through speech, providing an accessible alternative to typing.",
      },
      {
        title: "Voice Pipeline Architecture",
        body: "Voice interactions flow through a multi-stage pipeline: browser audio capture via WebRTC, real-time speech-to-text transcription, contextual AI inference against your vector-indexed knowledge base, and low-latency text-to-speech synthesis. The entire round-trip targets sub-2-second latency for natural conversational flow.",
      },
      {
        title: "Voice Configuration",
        body: "Voice AI is powered by the Vapi integration. To enable and configure advanced voice settings, connect your Vapi account from the Plugins page. This gives you access to custom voice models, phone number assignment, and detailed voice interaction analytics.",
      },
    ],
  },
  {
    id: "phone-ai",
    title: "Phone AI",
    icon: PhoneIcon,
    badge: "Telephony",
    content: [
      {
        title: "Vapi Phone Integration",
        body: "Perceptron integrates with Vapi to provide dedicated AI phone agents. Once connected, you can assign phone numbers to your AI assistants. Customers call the number and speak directly to your AI, which handles queries using your knowledge base just like the chat widget.",
      },
      {
        title: "Setting Up Phone Support",
        body: "Go to Plugins > Vapi in the sidebar. Enter your Vapi API key to connect your account. Once connected, you'll see your available assistants and phone numbers. Assign a phone number to an assistant, and your AI phone agent is live. All phone conversations appear in your unified inbox alongside chat and voice interactions.",
      },
      {
        title: "Multi-Channel Routing",
        body: "Phone calls are automatically transcribed and routed into the same conversation pipeline as chat and voice interactions. The system maintains full session context across channels — if a customer chats first, then calls, operators see the entire interaction history in a single unified thread.",
      },
    ],
  },
  {
    id: "chat-widget",
    title: "Chat Widget",
    icon: MessageSquareTextIcon,
    badge: "Embeddable",
    content: [
      {
        title: "Embedding the Widget",
        body: "Add Perceptron's chat widget to any website with a single script tag. Go to the Integrations page in your dashboard to find your unique embed code. Copy and paste it into your website's HTML, just before the closing </body> tag. The widget works with any frontend framework — React, Next.js, Vue, plain HTML, and more.",
      },
      {
        title: "Embed Code Example",
        code: `<script
  src="https://perceptron.app/embed.js"
  data-org-id="your_org_id"
  defer
><\/script>`,
      },
      {
        title: "How Chat Works",
        body: "When a visitor opens the widget, they can type a message or start a voice conversation. The AI processes their query against your knowledge base and responds in real time. If the AI can't resolve an issue, it flags the conversation for human review. Operators can then jump in from the dashboard to respond directly.",
      },
      {
        title: "Conversation Flow",
        body: "Each conversation tracks its full history including AI responses, human operator messages, and status changes. Conversations can be in one of several states: active (AI is handling), escalated (needs human attention), or resolved. The unified inbox lets you filter and manage all conversations efficiently.",
      },
    ],
  },
  {
    id: "conversations",
    title: "Conversations & Inbox",
    icon: HeadphonesIcon,
    badge: "Unified",
    content: [
      {
        title: "Unified Inbox",
        body: "All customer interactions — chat, voice, and phone — flow into a single unified inbox. The conversations list shows each conversation with the customer's name (or contact identifier), the latest message preview, timestamp, and current status. Click any conversation to view the full thread.",
      },
      {
        title: "Responding as an Operator",
        body: "When you open a conversation, you can read the full history between the customer and the AI. To respond directly, type your message in the input field at the bottom. You can also use the AI Enhancement feature — click the enhance button to have AI polish your response for tone, grammar, and clarity before sending.",
      },
      {
        title: "Contact Panel",
        body: "Each conversation has a contact panel showing customer details — their name, email (if provided), and conversation history. This gives operators context before responding and helps track repeat customers.",
      },
      {
        title: "Conversation State Machine",
        body: 'Conversations flow through states automatically. New incoming messages create "active" conversations. If the AI detects it cannot resolve an issue, the conversation is escalated. Operators can manually resolve conversations when the issue is addressed. The inbox supports filtering by status to help you focus on what needs attention.',
      },
    ],
  },
  {
    id: "integrations",
    title: "Integrations & API",
    icon: CodeIcon,
    badge: "Extensible",
    content: [
      {
        title: "Embed Script",
        body: "The primary integration method is the JavaScript embed script. It works on any website and automatically loads the chat widget. The script is lightweight, loads asynchronously, and doesn't impact your page performance. Find your embed code on the Integrations page.",
      },
      {
        title: "Vapi (Voice & Phone)",
        body: "Connect your Vapi account to unlock voice and phone AI capabilities. Vapi provides the underlying infrastructure for real-time voice conversations and phone call handling. The integration is managed from the Plugins section in your dashboard.",
      },
      {
        title: "Real-time Sync Engine",
        body: "Perceptron is built on Convex, providing real-time data synchronization across all clients. Conversations, messages, and settings update instantly across the dashboard, widget, and any connected services. This ensures operators always see the latest state without needing to refresh.",
      },
    ],
  },
  {
    id: "customization",
    title: "Widget Customization",
    icon: PaletteIcon,
    badge: "Theming",
    content: [
      {
        title: "Theming Your Widget",
        body: "Navigate to the Customization page from the sidebar to personalize the chat widget's appearance. You can set your brand's primary color, choose a display name, write a custom greeting message, and upload your company logo. Changes apply in real time to all embedded widgets across your sites.",
      },
      {
        title: "Available Options",
        body: "Customization includes: Organization display name (shown in the widget header), greeting message (the first message visitors see), primary brand color (applied to buttons, accents, and the widget header), and logo (displayed in the widget header alongside your name). These settings ensure the widget feels native to your brand.",
      },
    ],
  },
  {
    id: "knowledge-base",
    title: "Knowledge Base & RAG",
    icon: UploadIcon,
    badge: "AI Engine",
    content: [
      {
        title: "Document Ingestion Pipeline",
        body: 'Navigate to the Files section from the sidebar. Click "Upload" to add documents that your AI will learn from. Supported formats include PDF, TXT, MD, DOCX, and CSV. Each file is processed through the ingestion pipeline — parsed, chunked, embedded via vector models, and indexed into the retrieval store so the AI can reference it during conversations.',
      },
      {
        title: "Retrieval-Augmented Generation",
        body: "When a customer asks a question, the system performs semantic search across your indexed documents to find the most relevant chunks. These are injected into the AI's context window alongside the conversation history, enabling accurate, grounded responses. This RAG architecture ensures the AI never hallucinates answers outside your knowledge base.",
      },
      {
        title: "Best Practices for Training Data",
        body: "For optimal AI performance, upload your product documentation, FAQ pages, support articles, troubleshooting guides, and any other content your customers typically ask about. The more comprehensive and well-structured your documents are, the better the AI will perform. Use clear headings, keep answers concise, and cover edge cases.",
      },
      {
        title: "Managing Files",
        body: "From the Files view, you can see all uploaded documents with their processing status, file size, and upload date. You can delete files that are no longer relevant — the AI's knowledge base updates automatically when files are removed.",
      },
    ],
  },
  {
    id: "billing",
    title: "Billing & Plans",
    icon: SettingsIcon,
    badge: "Plans",
    content: [
      {
        title: "Free Tier",
        body: "Perceptron offers a free tier to get you started. It includes basic chat widget functionality, knowledge base uploads, and access to the conversation inbox. This lets you evaluate the platform before committing to a paid plan.",
      },
      {
        title: "Pro & Premium Plans",
        body: "Paid plans unlock higher message limits, priority AI processing, advanced analytics, phone AI, and premium support. Visit the Billing page in your dashboard to view available plans and manage your subscription. Billing is handled securely through Clerk's built-in subscription management.",
      },
      {
        title: "Managing Your Subscription",
        body: "From the Billing page, you can upgrade, downgrade, or cancel your plan at any time. Usage is tracked automatically, and you'll see clear indicators when approaching plan limits. Premium features show a gentle upgrade prompt when accessed on the free tier.",
      },
    ],
  },
];

const architecture = [
  { icon: CpuIcon, label: "AI Inference Engine" },
  { icon: DatabaseIcon, label: "Vector Store" },
  { icon: NetworkIcon, label: "Real-time Sync" },
  { icon: LayersIcon, label: "Multi-channel Router" },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pt-24 md:pt-28 pb-20">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-6">
              <BookOpenIcon className="size-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Documentation
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              <span className="text-foreground">Learn how to use </span>
              <span
                className="text-transparent bg-clip-text animate-text-gradient"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #f97316, #fb923c, #fbbf24, #f59e0b, #f97316)",
                  backgroundSize: "200% auto",
                  filter: "drop-shadow(0 0 30px rgba(249,115,22,0.35))",
                }}
              >
                Perceptron
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Everything you need to set up AI-powered customer support across
              chat, voice, and phone — from first install to advanced
              configuration.
            </p>

            {/* Architecture pills */}
            <div className="flex flex-wrap justify-center gap-3">
              {architecture.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/3 text-xs font-medium text-muted-foreground"
                >
                  <item.icon className="size-3.5 text-primary/70" />
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* Main layout: sidebar + content */}
          <div className="flex gap-10 relative">
            {/* Sticky sidebar navigation */}
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-28 space-y-1.5 p-4 rounded-2xl border border-white/10 bg-white/3 backdrop-blur-sm">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/60 px-3 mb-3">
                  Navigation
                </p>
                {sections.map((section, idx) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="group flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
                  >
                    <span className="text-[10px] font-mono text-primary/50 w-4 text-right tabular-nums">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <section.icon className="size-3.5 text-primary/60 group-hover:text-primary shrink-0 transition-colors" />
                    <span className="truncate">{section.title}</span>
                  </a>
                ))}

                <div className="mt-4 pt-4 border-t border-white/5">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/60 px-3 mb-3">
                    Quick links
                  </p>
                  <a
                    href="#architecture-overview"
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
                  >
                    <span className="size-1.5 rounded-full bg-primary/40" />
                    System Architecture
                  </a>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 min-w-0">
              {/* Architecture overview */}
              <div
                id="architecture-overview"
                className="mb-16 p-6 rounded-2xl border border-white/10 bg-white/3 backdrop-blur-sm scroll-mt-28"
              >
                <h2 className="text-lg font-bold text-foreground mb-2">
                  System Architecture
                </h2>
                <p className="text-sm text-muted-foreground mb-5">
                  Perceptron is a multi-layered AI support platform. Incoming
                  requests are routed through the channel layer (chat, voice,
                  phone), processed by the inference engine with
                  retrieval-augmented generation against your vector-indexed
                  knowledge base, and synchronized in real time across all
                  connected clients via Convex.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "Convex",
                    "OpenAI",
                    "Vapi",
                    "WebRTC",
                    "Clerk Auth",
                    "Vector Embeddings",
                    "Edge Functions",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-primary/15 border border-primary/30 text-[11px] font-mono font-medium text-primary shadow-[0_0_10px_-3px_rgba(249,115,22,0.25)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Documentation sections */}
              <div className="space-y-20">
                {sections.map((section, idx) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-28"
                  >
                    <div className="flex items-center gap-3 mb-8">
                      <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <section.icon className="size-5 text-primary" />
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-primary/40">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                          {section.title}
                        </h2>
                      </div>
                      <span className="ml-auto hidden sm:inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider border border-primary/20 bg-primary/5 text-primary/70">
                        {section.badge}
                      </span>
                    </div>

                    <div className="space-y-8 pl-0 md:pl-13">
                      {section.content.map((item) => (
                        <div key={item.title}>
                          <h3 className="text-lg font-semibold text-foreground mb-3">
                            {item.title}
                          </h3>
                          {"body" in item && (
                            <p className="text-muted-foreground leading-relaxed">
                              {item.body}
                            </p>
                          )}
                          {"code" in item && (
                            <pre className="mt-3 p-4 rounded-xl bg-[#0d0d1a] border border-white/10 overflow-x-auto">
                              <code className="text-sm font-mono text-emerald-400">
                                {item.code}
                              </code>
                            </pre>
                          )}
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-24 text-center p-10 rounded-2xl border border-white/10 bg-white/3">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Ready to get started?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                  Set up AI-powered customer support in under 10 minutes. No
                  credit card required.
                </p>
                <ButtonLink
                  href="/sign-up"
                  size="lg"
                  className="rounded-full h-12 px-8 shadow-[0_0_40px_-10px_rgba(249,115,22,0.5)]"
                >
                  Create Free Account
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
