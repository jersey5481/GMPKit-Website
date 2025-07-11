import type { Metadata } from "next"

export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  openGraph?: {
    title?: string
    description?: string
    image?: string
    type?: string
  }
  twitter?: {
    card?: string
    title?: string
    description?: string
    image?: string
  }
  structuredData?: object
}

const baseUrl = "https://www.gmpkit.com"
const defaultImage = `${baseUrl}/images/gmpkit-og-image.png`

export function generateMetadata(config: SEOConfig): Metadata {
  const { title, description, keywords = [], canonical, openGraph = {}, twitter = {} } = config

  const fullTitle = title.includes("GMPKit") ? title : `${title} | GMPKit`

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    canonical: canonical || baseUrl,
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
    openGraph: {
      title: openGraph.title || fullTitle,
      description: openGraph.description || description,
      url: canonical || baseUrl,
      siteName: "GMPKit",
      images: [
        {
          url: openGraph.image || defaultImage,
          width: 1200,
          height: 630,
          alt: openGraph.title || fullTitle,
        },
      ],
      locale: "en_US",
      type: openGraph.type || "website",
    },
    twitter: {
      card: twitter.card || "summary_large_image",
      title: twitter.title || fullTitle,
      description: twitter.description || description,
      images: [twitter.image || defaultImage],
      creator: "@gmpkit",
      site: "@gmpkit",
    },
    alternates: {
      canonical: canonical || baseUrl,
    },
    verification: {
      google: "your-google-verification-code", // Replace with actual verification code
    },
  }
}

// Common SEO configurations
export const seoConfigs = {
  home: {
    title: "GMPKit - ISPE/GAMP5 Commissioned Platform | BatchTrak™",
    description:
      "Supporting biopharma manufacturers with GMPKit's ISPE/GAMP5 commissioned BatchTrak™ platform. Standards-based architecture, documented compliance alignment, and validation support for pharmaceutical and biotech companies.",
    keywords: [
      "ISPE GAMP5 commissioned software",
      "biopharma manufacturing platform",
      "standards-based batch manufacturing",
      "commissioned manufacturing platform",
      "GAMP5 aligned batch operations",
      "ISPE commissioned platform",
      "biopharma batch tracking system",
      "pharmaceutical manufacturing software",
      "biotech operations platform",
      "standards alignment documentation",
    ],
    canonical: baseUrl,
  },
  about: {
    title: "About GMPKit - Batch Manufacturing Operations Experts",
    description:
      "Learn about GMPKit's mission to simplify batch operations for manufacturers. Founded by operations experts, we combine LEAN principles with proven technology solutions.",
    keywords: [
      "GMPKit company",
      "batch manufacturing experts",
      "pharmaceutical operations consulting",
      "manufacturing operations improvement",
      "LEAN manufacturing consultants",
    ],
    canonical: `${baseUrl}/about`,
  },
  batchtrak: {
    title: "BatchTrak™ - ISPE/GAMP5 Commissioned Batch Platform",
    description:
      "BatchTrak™ is the ISPE/GAMP5 commissioned platform supporting biopharma manufacturers with standards-based batch operations, documented compliance alignment, and validation support.",
    keywords: [
      "ISPE GAMP5 commissioned BatchTrak",
      "biopharma batch tracking platform",
      "standards-based manufacturing platform",
      "commissioned batch operations software",
      "GAMP5 aligned manufacturing system",
      "biopharma manufacturing software",
      "standards alignment documentation",
    ],
    canonical: `${baseUrl}/batchtrak`,
  },
  consulting: {
    title: "Manufacturing Operations Consulting | LEAN & Theory of Constraints",
    description:
      "Strategic manufacturing consulting services focused on LEAN principles and Theory of Constraints. Optimize your batch operations with proven methodologies.",
    keywords: [
      "manufacturing consulting",
      "LEAN manufacturing consulting",
      "Theory of Constraints consulting",
      "pharmaceutical operations consulting",
      "batch manufacturing optimization",
      "operational excellence consulting",
    ],
    canonical: `${baseUrl}/consulting`,
  },
  training: {
    title: "Manufacturing Operations Training | BatchTrak™ & LEAN Principles",
    description:
      "Comprehensive training programs for BatchTrak™ platform and LEAN manufacturing principles. Build capabilities that drive lasting operational improvements.",
    keywords: [
      "manufacturing training",
      "BatchTrak training",
      "LEAN manufacturing training",
      "pharmaceutical operations training",
      "manufacturing software training",
      "operational excellence training",
    ],
    canonical: `${baseUrl}/training`,
  },
  contact: {
    title: "Contact GMPKit - Batch Manufacturing Solutions",
    description:
      "Contact GMPKit to discuss your batch manufacturing challenges. Schedule a discovery call to learn how BatchTrak™ can transform your operations.",
    keywords: [
      "contact GMPKit",
      "batch manufacturing consultation",
      "BatchTrak demo",
      "manufacturing operations support",
    ],
    canonical: `${baseUrl}/contact`,
  },
  faqs: {
    title: "Frequently Asked Questions | BatchTrak™ & GMPKit Services",
    description:
      "Find answers to common questions about BatchTrak™ platform, implementation, compliance, security, and GMPKit's manufacturing consulting services.",
    keywords: ["BatchTrak FAQ", "manufacturing software questions", "GMP compliance questions", "batch tracking FAQ"],
    canonical: `${baseUrl}/faqs`,
  },
}

// Structured data generators
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GMPKit, LLC",
    alternateName: "GMPKit",
    url: baseUrl,
    logo: `${baseUrl}/gmpkit-logo.svg`,
    description:
      "Simplifying batch operations for manufacturers who demand better. GMPKit provides BatchTrak™ platform, consulting, and training services.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "14571 N Kelsey St, STE 105, PMB 146",
      addressLocality: "Monroe",
      addressRegion: "WA",
      postalCode: "98272",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-817-381-8767",
      contactType: "customer service",
      email: "info@gmpkit.com",
    },
    sameAs: [
      // Add social media URLs when available
    ],
  }
}

export function generateSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "BatchTrak™",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web-based",
    description: "Real-time batch tracking and operational visibility platform for manufacturers",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    provider: {
      "@type": "Organization",
      name: "GMPKit, LLC",
    },
    featureList: [
      "Real-time batch tracking",
      "Operational visibility",
      "GMP compliance support",
      "Multi-site coordination",
      "Deviation management",
    ],
  }
}

export function generateServiceSchema(serviceName: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    provider: {
      "@type": "Organization",
      name: "GMPKit, LLC",
    },
    areaServed: "Worldwide",
    serviceType: "Business Consulting",
  }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}
