import type React from "react"
import Header from "./Header"
import Footer from "./Footer"
import AccessibilityWidget from "./AccessibilityWidget"
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema"

interface PageLayoutProps {
  children: React.ReactNode
  currentPage?: string
  className?: string
}

export default function PageLayout({ children, currentPage, className = "" }: PageLayoutProps) {
  return (
    <div className={`flex min-h-screen flex-col ${className}`}>
      <Header currentPage={currentPage} />
      <main className="flex-1">{children}</main>
      <Footer />
      <AccessibilityWidget />
      <BreadcrumbSchema />
    </div>
  )
}
