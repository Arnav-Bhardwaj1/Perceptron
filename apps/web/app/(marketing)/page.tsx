import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  BotIcon,
  BrainCircuitIcon,
  CheckIcon,
  HeadphonesIcon,
  InboxIcon,
  LibraryBigIcon,
  MessageSquareTextIcon,
  MicIcon,
  PaletteIcon,
  PhoneIcon,
  PlugIcon,
  ShieldCheckIcon,
  ZapIcon,
} from "lucide-react";
import { ButtonLink } from "@workspace/ui/components/button-link";
import { SignedIn, SignedOut } from "@clerk/nextjs";

const features = [
  {
    icon: BotIcon,
    title: "AI-Powered Responses",
    description:
      "Intelligent automated support that resolves customer queries 24/7 with contextual, accurate responses.",
  },
  {
    icon: MicIcon,
    title: "Voice Assistant",
    description:
      "Natural voice conversations powered by Vapi — let your customers talk to AI agents on the phone.",
  },
  {
    icon: LibraryBigIcon,
    title: "Knowledge Base",
    description:
      "Upload documents and train your AI assistant on your product docs, FAQs, and support articles.",
  },
  {
    icon: InboxIcon,
    title: "Unified Inbox",
    description:
      "All customer conversations in one place. Track status, escalate, resolve — with full history.",
  },
  {
    icon: PaletteIcon,
    title: "Widget Customization",
    description:
      "Fully customizable chat widget that matches your brand. Embed anywhere with a single script tag.",
  },
  {
    icon: PlugIcon,
    title: "Easy Integrations",
    description:
      "Drop-in embed script for any website. Works with React, Next.js, HTML, and any frontend framework.",
  },
];

const stats = [
  { value: "24/7", label: "Availability" },
  { value: "<2s", label: "Response Time" },
  { value: "95%", label: "Resolution Rate" },
  { value: "∞", label: "Scalability" },
];

const pricingPlans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    description: "Get started with AI-powered support at no cost.",
    cta: "Get Started",
    highlighted: false,
    features: [
      "Up to 50 conversations/mo",
      "1 knowledge base file",
      "Basic chat widget",
      "Community support",
      "Single operator",
    ],
  },
  {
    name: "Pro",
    price: "₹499",
    period: "/month",
    description: "Everything you need for production-grade support.",
    cta: "Upgrade to Pro",
    highlighted: true,
    features: [
      "Unlimited conversations",
      "Unlimited knowledge base files",
      "Priority AI processing",
      "Voice AI & phone support",
      "Custom widget branding",
      "Up to 5 operators",
      "Advanced analytics",
      "Priority support",
    ],
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* ── Hero ── */}
      <section className="relative pt-24 pb-8 md:pt-28 md:pb-12 overflow-hidden flex flex-col items-center justify-center">
        {/* Breathing grid background */}
        <div
          className="absolute inset-0 pointer-events-none animate-grid-breathe"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Central radial spotlight — pulsing behind headline */}
        <div
          className="absolute top-[38%] left-1/2 w-[1200px] h-[700px] pointer-events-none rounded-full"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(249,115,22,0.12) 0%, rgba(168,85,247,0.06) 35%, transparent 70%)",
            animation: "hero-spotlight 8s ease-in-out infinite",
          }}
        />

        {/* Secondary warm glow layer */}
        <div
          className="absolute top-[30%] left-1/2 w-[800px] h-[400px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(249,115,22,0.08) 0%, transparent 70%)",
            animation: "hero-spotlight 6s ease-in-out infinite",
            animationDelay: "3s",
          }}
        />

        {/* Ambient orbs — larger and gently drifting */}
        <div className="absolute top-[5%] right-[-5%] w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(168,85,247,0.14)_0%,transparent_50%)] rounded-full blur-3xl pointer-events-none animate-orb-drift" />
        <div
          className="absolute bottom-[5%] left-[-10%] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(249,115,22,0.10)_0%,transparent_50%)] rounded-full blur-3xl pointer-events-none animate-orb-drift"
          style={{ animationDelay: "-7s", animationDuration: "25s" }}
        />
        <div
          className="absolute top-[50%] left-[60%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(59,130,246,0.05)_0%,transparent_50%)] rounded-full blur-3xl pointer-events-none animate-orb-drift"
          style={{ animationDelay: "-14s", animationDuration: "30s" }}
        />

        {/* Horizontal sweep beam */}
        <div className="absolute top-[42%] left-0 right-0 h-px overflow-hidden pointer-events-none">
          <div
            className="h-full w-[30%]"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(249,115,22,0.4), rgba(249,115,22,0.6), rgba(249,115,22,0.4), transparent)",
              animation: "sweep-beam 8s ease-in-out infinite",
              animationDelay: "2s",
            }}
          />
        </div>

        {/* Decorative twinkling particles */}
        <div className="absolute top-[15%] left-[12%] size-1 rounded-full bg-primary/60 animate-particle-twinkle pointer-events-none" />
        <div className="absolute top-[22%] right-[14%] size-1.5 rounded-full bg-violet-400/50 animate-particle-twinkle pointer-events-none" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[62%] left-[18%] size-1 rounded-full bg-amber-400/40 animate-particle-twinkle pointer-events-none" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[72%] right-[22%] size-1 rounded-full bg-primary/50 animate-particle-twinkle pointer-events-none" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-[45%] left-[6%] size-1.5 rounded-full bg-blue-400/30 animate-particle-twinkle pointer-events-none" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-[35%] right-[9%] size-1 rounded-full bg-violet-400/40 animate-particle-twinkle pointer-events-none" style={{ animationDelay: "2.5s" }} />

        {/* Hero content — centered */}
        <div className="container relative z-10 mx-auto px-6 max-w-5xl flex flex-col items-center text-center">
          {/* Headline with animated gradient glow */}
          <h1
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight mb-8 leading-[1.06] animate-fade-in-up"
            style={{ animationDelay: "0.12s" }}
          >
            <span className="text-foreground">Your entire customer support</span>
            <span className="text-foreground"> team, replaced by </span>
            <span
              className="text-transparent bg-clip-text animate-text-gradient"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #f97316, #fb923c, #fbbf24, #f59e0b, #f97316)",
                backgroundSize: "200% auto",
                filter: "drop-shadow(0 0 30px rgba(249,115,22,0.35))",
              }}
            >
              one AI.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 font-medium leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.24s" }}
          >
            Train an AI on your product, deploy it across chat, voice, and
            phone — and watch it resolve 95% of tickets automatically while
            your team focuses on what matters.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-center gap-4 mb-10 md:mb-14 animate-fade-in-up"
            style={{ animationDelay: "0.36s" }}
          >
            <ButtonLink
              href="/#pricing"
              size="lg"
              className="relative rounded-full h-13 px-8 text-base shadow-[0_0_50px_-12px_rgba(249,115,22,0.6)] hover:shadow-[0_0_70px_-12px_rgba(249,115,22,0.8)] hover:-translate-y-1 transition-all duration-300 min-w-[210px]"
            >
              Start Free Trial
              <ArrowRightIcon className="ml-2 size-4" />
            </ButtonLink>
            <ButtonLink
              href="/sign-in"
              size="lg"
              variant="outline"
              className="rounded-full h-13 px-8 text-base border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 backdrop-blur-md hover:-translate-y-0.5 transition-all duration-300"
            >
              View Dashboard
            </ButtonLink>
          </div>

          {/* Glowing divider */}
          <div
            className="w-full max-w-md mx-auto mb-14 relative animate-fade-in-up"
            style={{ animationDelay: "0.42s" }}
          >
            <div className="h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
            <div className="absolute inset-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent blur-sm" />
          </div>

          {/* ── Channel pillars ── */}
          <div
            className="relative w-full max-w-3xl animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            {/* Connecting line behind cards */}
            <div className="absolute top-1/2 left-[15%] right-[15%] h-px -translate-y-1/2 bg-linear-to-r from-transparent via-primary/25 to-transparent hidden md:block" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {[
                {
                  icon: MessageSquareTextIcon,
                  title: "Chat AI",
                  desc: "Embeddable widget that answers instantly from your knowledge base",
                  gradient: "from-orange-500/10 to-amber-500/5",
                  iconGlow: "group-hover:shadow-[0_0_24px_-5px_rgba(249,115,22,0.4)]",
                },
                {
                  icon: MicIcon,
                  title: "Voice AI",
                  desc: "Natural voice conversations powered by AI agents in your browser",
                  gradient: "from-violet-500/10 to-purple-500/5",
                  iconGlow: "group-hover:shadow-[0_0_24px_-5px_rgba(139,92,246,0.4)]",
                },
                {
                  icon: PhoneIcon,
                  title: "Phone AI",
                  desc: "Dedicated phone numbers with AI agents that handle real calls",
                  gradient: "from-blue-500/10 to-cyan-500/5",
                  iconGlow: "group-hover:shadow-[0_0_24px_-5px_rgba(59,130,246,0.4)]",
                },
              ].map((channel) => (
                <div
                  key={channel.title}
                  className="group relative rounded-2xl border border-white/10 bg-white/3 backdrop-blur-sm p-6 flex flex-col items-center text-center hover:border-primary/40 hover:bg-white/6 transition-all duration-500 hover:shadow-[0_0_40px_-12px_rgba(249,115,22,0.12)]"
                >
                  <div className={`absolute inset-0 rounded-2xl bg-linear-to-b ${channel.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className={`size-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 ${channel.iconGlow} group-hover:border-primary/40 transition-all duration-500`}>
                      <channel.icon className="size-7 text-primary group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-1.5">
                      {channel.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {channel.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating metric badges */}
            <div className="absolute -top-8 -left-2 md:-left-12 rounded-xl border border-white/10 bg-[#12121f]/95 backdrop-blur-xl px-4 py-3 shadow-2xl animate-float hidden lg:flex items-center gap-3">
              <div className="size-8 rounded-full bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center">
                <ShieldCheckIcon className="size-4 text-emerald-400" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">95% resolved</p>
                <p className="text-[10px] text-white/40">automatically</p>
              </div>
            </div>

            <div
              className="absolute -bottom-7 -right-2 md:-right-12 rounded-xl border border-white/10 bg-[#12121f]/95 backdrop-blur-xl px-4 py-3 shadow-2xl animate-float hidden lg:flex items-center gap-3"
              style={{ animationDelay: "2s" }}
            >
              <div className="size-8 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center">
                <ZapIcon className="size-4 text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">&lt;2s response</p>
                <p className="text-[10px] text-white/40">average latency</p>
              </div>
            </div>

            <div
              className="absolute -top-7 -right-2 md:-right-8 rounded-xl border border-white/10 bg-[#12121f]/95 backdrop-blur-xl px-4 py-3 shadow-2xl animate-float hidden lg:flex items-center gap-3"
              style={{ animationDelay: "3.5s" }}
            >
              <div className="size-8 rounded-full bg-violet-500/15 border border-violet-500/20 flex items-center justify-center">
                <BrainCircuitIcon className="size-4 text-violet-400" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Self-learning</p>
                <p className="text-[10px] text-white/40">trains on your docs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="mt-10 md:mt-14 flex flex-col items-center gap-2 animate-fade-in-up"
          style={{ animationDelay: "0.7s" }}
        >
          <div className="w-px h-12 bg-linear-to-b from-transparent via-primary/40 to-transparent" />
          <ArrowRightIcon className="size-4 rotate-90 text-primary/60 animate-arrow-flash" />
        </div>
      </section>

      {/* ── Stats ── */}
      <section
        id="stats"
        className="relative py-16 border-t border-white/5 bg-black/10 scroll-mt-36"
      >
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-black tracking-tight text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section
        id="features"
        className="relative py-24 border-t border-white/5"
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              Everything you need to{" "}
              <span className="text-primary">delight customers</span>.
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              From AI-driven chat to voice agents and knowledge bases — a
              complete support platform that works while you sleep.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative p-8 rounded-2xl glass-strong dark:bg-white/5 border border-white/10 hover:border-primary/50 transition-colors duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <feature.icon className="size-8 text-primary mb-6" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section
        id="how-it-works"
        className="relative py-24 border-t border-white/5 bg-black/20"
      >
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              Live in <span className="text-primary">3 simple steps</span>.
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              From zero to AI-powered support in under 10 minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: BrainCircuitIcon,
                title: "Train Your AI",
                description:
                  "Upload your docs, FAQs, and product guides. Our AI learns your domain in minutes.",
              },
              {
                step: "02",
                icon: MessageSquareTextIcon,
                title: "Embed the Widget",
                description:
                  "Add a single script tag to your site. Customize colors, greetings, and behavior.",
              },
              {
                step: "03",
                icon: HeadphonesIcon,
                title: "Monitor & Scale",
                description:
                  "Watch conversations, resolve escalations, and let AI handle the rest automatically.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative p-8 rounded-2xl glass-strong dark:bg-white/5 border border-white/10 text-center"
              >
                <span className="absolute top-4 right-4 text-6xl font-black text-primary/10">
                  {item.step}
                </span>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="size-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <item.icon className="size-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="relative py-24 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              Built for <span className="text-primary">serious support</span>.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: ShieldCheckIcon,
                title: "Smart Escalation",
                description:
                  "AI knows when to hand off. Unresolved tickets are flagged and escalated to human operators instantly.",
              },
              {
                icon: ZapIcon,
                title: "Response Enhancement",
                description:
                  "Operators can enhance their responses with AI — one click to polish tone, grammar, and clarity.",
              },
              {
                icon: PhoneIcon,
                title: "Phone Support",
                description:
                  "Dedicated phone numbers with AI voice agents. Customers can call in and talk to your AI.",
              },
              {
                icon: BotIcon,
                title: "Multi-Channel",
                description:
                  "Chat widget, voice calls, and phone — all unified in a single operator dashboard.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group flex items-start gap-5 p-6 rounded-2xl glass-strong dark:bg-white/5 border border-white/10 hover:border-primary/50 transition-colors duration-500"
              >
                <div className="size-12 shrink-0 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <item.icon className="size-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section
        id="pricing"
        className="relative py-24 border-t border-white/5 bg-black/20 scroll-mt-8"
      >
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              Start free, <span className="text-primary">scale as you grow</span>.
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              No hidden fees. No per-seat pricing. Pick a plan and start
              resolving tickets with AI in minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-8 flex flex-col ${
                  plan.highlighted
                    ? "border-primary/40 bg-primary/5 shadow-[0_0_60px_-15px_rgba(249,115,22,0.2)]"
                    : "border-white/10 bg-white/3"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-xs font-semibold text-white">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-4xl font-black text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm"
                    >
                      <CheckIcon className="size-4 text-primary shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <ButtonLink
                  href="/billing"
                  className={`w-full rounded-full ${
                    plan.highlighted
                      ? "shadow-[0_0_30px_-8px_rgba(249,115,22,0.4)]"
                      : ""
                  }`}
                  variant={plan.highlighted ? "default" : "outline"}
                  size="lg"
                >
                  {plan.cta}
                  <ArrowRightIcon className="ml-2 size-4" />
                </ButtonLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative py-24 md:py-32 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-[radial-gradient(ellipse,rgba(249,115,22,0.15)_0%,transparent_70%)] blur-2xl pointer-events-none" />

        <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 tracking-tight">
            Ready to transform your support?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join teams using Perceptron to deliver instant, intelligent customer
            support — without growing headcount.
          </p>
          <SignedOut>
            <ButtonLink
              href="/billing"
              size="lg"
              className="rounded-full h-14 px-10 text-base shadow-[0_0_40px_-10px_rgba(249,115,22,0.5)] hover:shadow-[0_0_60px_-10px_rgba(249,115,22,0.6)] hover:scale-105 transition-all duration-300 min-w-[260px]"
            >
              Create your free account
              <ArrowRightIcon className="ml-2 size-4" />
            </ButtonLink>
          </SignedOut>
          <SignedIn>
            <ButtonLink
              href="/conversations"
              size="lg"
              className="rounded-full h-14 px-10 text-base shadow-[0_0_40px_-10px_rgba(249,115,22,0.5)] hover:shadow-[0_0_60px_-10px_rgba(249,115,22,0.6)] hover:scale-105 transition-all duration-300 min-w-[260px]"
            >
              Go to Dashboard
              <ArrowRightIcon className="ml-2 size-4" />
            </ButtonLink>
          </SignedIn>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/10 glass bg-black/40 pt-10 pb-6">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2.5 group">
              <div className="rounded-lg border border-white/15 bg-white/5 p-1 group-hover:border-primary/40 transition-colors duration-300">
                <Image
                  src="/logo.svg"
                  alt="Perceptron"
                  width={20}
                  height={20}
                />
              </div>
              <span className="font-semibold text-lg tracking-tight text-foreground">
                Perceptron
              </span>
            </div>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link
                href="/docs"
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Docs
              </Link>
              <Link
                href="/sign-in"
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Dashboard
              </Link>
              <Link
                href="/sign-up"
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center gap-2">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground/60 hover:text-muted-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <p className="text-sm text-muted-foreground/50">
              &copy; {new Date().getFullYear()} Perceptron. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
