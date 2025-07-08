"use client"

import { usePathname } from "next/navigation"

interface BreadcrumbItem {
  name: string
  url: string
}

const pathToBreadcrumb: Record<string, BreadcrumbItem[]> = {
  "/": [{ name: "Home", url: "https://www.gmpkit.com" }],
  "/about": [
    { name: "Home", url: "https://www.gmpkit.com" },
    { name: "About", url: "https://www.gmpkit.com/about" },
  ],
  "/batchtrak": [
    { name: "Home", url: "https://www.gmpkit.com" },
    { name: "BatchTrak™", url: "https://www.gmpkit.com/batchtrak" },
  ],
  "/consulting": [
    { name: "Home", url: "https://www.gmpkit.com" },
    { name: "Consulting", url: "https://www.gmpkit.com/consulting" },
  ],
  "/training": [
    { name: "Home", url: "https://www.gmpkit.com" },
    { name: "Training", url: "https://www.gmpkit.com/training" },
  ],
  "/contact": [
    { name: "Home", url: "https://www.gmpkit.com" },
    { name: "Contact", url: "https://www.gmpkit.com/contact" },
  ],
  "/faqs": [
    { name: "Home", url: "https://www.gmpkit.com" },
    { name: "FAQs", url: "https://www.gmpkit.com/faqs" },
  ],
}

export default function BreadcrumbSchema() {
  const pathname = usePathname()
  const breadcrumbs = pathToBreadcrumb[pathname]

  if (!breadcrumbs || breadcrumbs.length <= 1) {
    return null
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}
