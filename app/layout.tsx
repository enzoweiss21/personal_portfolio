import "@/app/globals.css"
import { Inter, Montserrat } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import type React from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${montserrat.variable}`}>
      <body className={`${inter.className} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" disableSystemTheme>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.app'
    };
