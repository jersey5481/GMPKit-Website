import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "@/styles/globals.css"
import "@/styles/youtube-embed.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#7ED956" },
    { media: "(prefers-color-scheme: dark)", color: "#1D3115" },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gmpkit.com"),
  title: {
    default: "GMPKit - Batch Manufacturing Operations Platform | BatchTrak™",
    template: "%s | GMPKit",
  },
  description:
    "Transform your batch operations with GMPKit's BatchTrak™ platform. Real-time visibility, LEAN principles, and GMP compliance for pharmaceutical, biotech, and manufacturing companies.",
  keywords: [
    "batch manufacturing software",
    "pharmaceutical manufacturing",
    "biotech operations",
    "GMP compliance software",
    "batch tracking system",
    "manufacturing execution system",
    "LEAN manufacturing",
    "batch operations platform",
  ],
  authors: [{ name: "GMPKit, LLC" }],
  creator: "GMPKit, LLC",
  publisher: "GMPKit, LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Business Software",
  classification: "Manufacturing Software",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <LocalBusinessSchema />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
