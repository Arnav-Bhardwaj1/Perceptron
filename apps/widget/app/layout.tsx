import { Exo_2, Roboto_Slab, Fira_Code } from "next/font/google"

import "@workspace/ui/globals.css"
import { Providers } from "@/components/providers"
import { ThemeProvider } from "@workspace/ui/components/theme-provider";

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
      className={`${exo2.variable} ${robotoSlab.variable} ${firaCode.variable}`}
      suppressHydrationWarning
    >
      <body
        className="font-sans antialiased"
      >
        <ThemeProvider>
          <Providers>
            <div className="w-screen h-screen">
              {children}
            </div>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  )
}
