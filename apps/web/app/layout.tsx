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
        <div className="fixed inset-0 -z-10 hidden dark:block bg-[linear-gradient(160deg,#07070f_0%,#0d0d1a_50%,#0f0f22_100%)] pointer-events-none" />
        <div className="ambient-orange dark:block hidden" />
        <div className="ambient-teal dark:block hidden" />

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
