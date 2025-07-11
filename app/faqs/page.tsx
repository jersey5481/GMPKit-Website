import PageLayout from "@/components/layout/PageLayout"
import Section from "@/components/ui/Section"
import FAQCategory from "@/components/ui/FAQCategory"
import ContactSupport from "@/components/faqs/ContactSupport"
import { faqCategories, getFAQsByCategory, faqData } from "@/lib/faq-data"
import { generateMetadata as generateSEOMetadata, seoConfigs, generateFAQSchema } from "@/lib/seo"
import type { Metadata } from "next"

export const metadata: Metadata = generateSEOMetadata(seoConfigs.faqs)

export default function FAQsPage() {
  // Generate FAQ schema for structured data
  const faqSchema = generateFAQSchema(faqData);

  return (
    <PageLayout>
      {/* Hero Section */}
      <Section background="gray" padding="xl" className="text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 mb-8">
            Find answers to common questions about BatchTrak™ platform, implementation, compliance, security, and
            GMPKit's manufacturing consulting services.
          </p>
        </div>
      </Section>

      {/* FAQ Content */}
      <Section background="white" padding="xl">
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category) => (
            <FAQCategory key={category} title={category} faqs={getFAQsByCategory(category)} />
          ))}
        </div>
      </Section>

      {/* Contact Support Section */}
      <Section background="gray" padding="lg">
        <div className="max-w-4xl mx-auto">
          <ContactSupport />
        </div>
      </Section>

      {/* Add FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </PageLayout>
  )
}
