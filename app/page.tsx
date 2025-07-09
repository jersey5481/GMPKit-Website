import PageLayout from "@/components/layout/PageLayout"
import HeroSection from "@/components/sections/HeroSection"
import WhyBatchTrakSection from "@/components/sections/WhyBatchTrakSection"
import HowItWorksSection from "@/components/sections/HowItWorksSection"
import RoleBasedSection from "@/components/sections/RoleBasedSection"
import PackagesSection from "@/components/sections/PackagesSection"
import ImplementationTimelineSection from "@/components/sections/ImplementationTimelineSection"
import CTASection from "@/components/shared/CTASection"
import {
  generateMetadata as generateSEOMetadata,
  seoConfigs,
  generateOrganizationSchema,
  generateSoftwareApplicationSchema,
} from "@/lib/seo"
import type { Metadata } from "next"
import ServiceIntegrationSection from "@/components/sections/ServiceIntegrationSection"

export const metadata: Metadata = generateSEOMetadata(seoConfigs.home)

export default function HomePage() {
  const organizationSchema = generateOrganizationSchema()
  const softwareSchema = generateSoftwareApplicationSchema()

  return (
    <PageLayout>
      {/* New Hero Section */}
      <HeroSection />

      {/* Why BatchTrak? (Problem/Solution) */}
      <WhyBatchTrakSection />

      {/* How It Works (Explainer) */}
      <HowItWorksSection />

      {/* Value by Role (Persona-Specific Tiles) */}
      <RoleBasedSection />

      {/* Packages Section */}
      <PackagesSection />

      {/* Service Integration */}
      <ServiceIntegrationSection />

      {/* Implementation Timeline */}
      <ImplementationTimelineSection />

      {/* CTA Section */}
      <CTASection
        title="See BatchTrak in Action"
        description="Experience how BatchTrak™ can transform your batch operations with a personalized demonstration tailored to your use case."
        primaryButton={{ text: "Schedule a Demo", href: "/contact" }}
      />

      {/* Add structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema),
        }}
      />
    </PageLayout>
  )
}
