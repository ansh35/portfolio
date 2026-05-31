import React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "@/app/globals.css"
import { LenisProvider } from "@/components/shared/lenis-provider"
import { ScrollProgress } from "@/components/shared/ScrollProgress"
import { BackgroundGlow } from "@/components/shared/BackgroundGlow"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ansh | Premium Full-Stack Developer Portfolio",
  description: "Explore the luxury digital portfolio of Ansh, a Senior Full-Stack Engineer and SaaS Architect designing creative high-performance web applications.",
  keywords: ["Ansh", "Full Stack Developer", "Software Engineer", "Next.js", "React", "TypeScript", "Tailwind CSS", "Premium Portfolio", "Luxury Theme"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} bg-luxury-bg text-text-gray antialiased`}
      >
        <LenisProvider>
          <ScrollProgress />
          <BackgroundGlow />
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  )
}
