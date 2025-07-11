import { generateMetadata as generateSEOMetadata, seoConfigs } from "@/lib/seo"
import type { Metadata } from "next"

export const metadata: Metadata = generateSEOMetadata(seoConfigs.contact)

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
