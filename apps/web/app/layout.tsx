import type { Metadata } from "next";
import { Exo_2, Roboto_Slab, Fira_Code } from "next/font/google"

import "@workspace/ui/globals.css"
import { Providers } from "@/components/providers"
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@workspace/ui/components/sonner";
import { ThemeProvider } from "@workspace/ui/components/theme-provider";

export const metadata: Metadata = {
  title: {
    default: "Perceptron",
    template: "%s | Perceptron",
  },
  description:
    "AI-powered customer support that never sleeps. Chat, voice, and phone — all in one platform.",
  icons: {
    icon: "/logo.svg",
  },
};

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${exo2.variable} ${robotoSlab.variable} ${firaCode.variable} h-full`}
      suppressHydrationWarning
    >
      <body
        className="h-full font-sans antialiased relative bg-background min-h-screen"
      >
        {/* Glorious Dynamic Aurora Base */}
        <div className="fixed inset-0 -z-10 dark:block hidden pointer-events-none bg-[#050508]">
          <div
            className="absolute top-[-10%] left-[-15%] w-[55%] h-[55%] rounded-full mix-blend-screen filter blur-[100px] opacity-35 animate-aurora-1"
            style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.7) 0%, rgba(76,29,149,0) 70%)' }}
          />
          <div
            className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-aurora-2"
            style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.7) 0%, rgba(194,65,12,0) 70%)' }}
          />
          <div
            className="absolute top-[30%] right-[-5%] w-[40%] h-[40%] rounded-full mix-blend-screen filter blur-[90px] opacity-20 animate-aurora-3"
            style={{ background: 'radial-gradient(circle, rgba(3,218,197,0.5) 0%, rgba(0,180,160,0) 70%)' }}
          />
          <div
            className="absolute bottom-[10%] left-[10%] w-[40%] h-[40%] rounded-full mix-blend-screen filter blur-[80px] opacity-15 animate-aurora-4"
            style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.5) 0%, rgba(190,24,93,0) 70%)' }}
          />
        </div>

        {/* SVG Noise Overlay */}
        <div
          className="fixed inset-0 -z-10 opacity-[0.25] mix-blend-overlay pointer-events-none dark:block hidden"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}
        />

        {/* Refined Perspective Grid */}
        <div
          className="fixed inset-0 -z-10 opacity-[0.06] pointer-events-none dark:block hidden"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
          }}
        />

        {/* Light Mode Fallback Base */}
        <div className="fixed inset-0 -z-10 block dark:hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-100 via-background to-background opacity-80 pointer-events-none" />

        <style>{`
          @keyframes aurora-1 {
            0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
            33% { transform: translate(12%, 8%) scale(1.1) rotate(5deg); }
            66% { transform: translate(-8%, 5%) scale(0.95) rotate(-5deg); }
          }
          @keyframes aurora-2 {
            0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
            33% { transform: translate(-10%, -15%) scale(1.05) rotate(-3deg); }
            66% { transform: translate(8%, -5%) scale(1.15) rotate(4deg); }
          }
          @keyframes aurora-3 {
            0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
            33% { transform: translate(-15%, 10%) scale(1.1) rotate(6deg); }
            66% { transform: translate(10%, -12%) scale(0.9) rotate(-4deg); }
          }
          @keyframes aurora-4 {
            0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
            33% { transform: translate(10%, -10%) scale(0.95) rotate(-5deg); }
            66% { transform: translate(-12%, 15%) scale(1.05) rotate(5deg); }
          }
          
          .animate-aurora-1 { animation: aurora-1 25s ease-in-out infinite alternate; }
          .animate-aurora-2 { animation: aurora-2 28s ease-in-out infinite alternate-reverse; }
          .animate-aurora-3 { animation: aurora-3 32s ease-in-out infinite alternate; }
          .animate-aurora-4 { animation: aurora-4 35s ease-in-out infinite alternate-reverse; }
        `}</style>

        <ClerkProvider
          signInUrl="/sign-in"
          signUpUrl="/sign-up"
          signInFallbackRedirectUrl="/conversations"
          signUpFallbackRedirectUrl="/conversations"
          afterSignOutUrl="/"
          appearance={{
            variables: {
              colorPrimary: "#d97706",
              colorBackground: "#12121f",
              colorInputBackground: "rgba(255, 255, 255, 0.05)",
              colorInputText: "#f1f5f9",
              colorText: "#f1f5f9",
              colorTextSecondary: "#94a3b8",
              colorNeutral: "#f1f5f9",
              borderRadius: "0.625rem",
            },
            elements: {
              card: "dark:bg-[#12121f]! dark:border-white/10! dark:shadow-2xl!",
              headerTitle: "dark:text-white!",
              headerSubtitle: "dark:text-[#94a3b8]!",
              socialButtonsBlockButton:
                "dark:bg-white/5! dark:border-white/10! dark:text-white! dark:hover:bg-white/10!",
              formFieldLabel: "dark:text-white/80!",
              formFieldInput:
                "dark:bg-white/5! dark:border-white/10! dark:text-white!",
              footerActionLink: "dark:text-[#d97706]!",
              footerActionText: "dark:text-[#94a3b8]!",
              formButtonPrimary:
                "dark:bg-gradient-to-r! dark:from-[#78350f]! dark:via-[#92400e]! dark:to-[#d97706]!",
              userButtonPopoverCard: "dark:bg-[#12121f]! dark:border-white/10!",
              userButtonPopoverActionButton: "dark:text-white/80! dark:hover:bg-white/5!",
              organizationSwitcherPopoverCard: "dark:bg-[#12121f]! dark:border-white/10!",
            },
          }}
        >
          <ThemeProvider>
            <Providers>
              <Toaster />
              {children}
            </Providers>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
