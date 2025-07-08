import PageLayout from "@/components/layout/PageLayout"
import Section from "@/components/ui/Section"
import { Button } from "@/components/ui/button"
import { generateMetadata as generateSEOMetadata, seoConfigs, generateServiceSchema } from "@/lib/seo"
import type { Metadata } from "next"
import { Zap, Target, Users } from "lucide-react"

export const metadata: Metadata = generateSEOMetadata(seoConfigs.about)

export default function AboutPage() {
  const serviceSchema = generateServiceSchema(
    "Batch Manufacturing Operations Platform",
    "BatchTrak™ platform with implementation expertise for batch-based manufacturers focusing on real-time visibility and operational excellence.",
  )

  return (
    <PageLayout currentPage="about">
      {/* Hero: The Team Behind BatchTrak */}
      <Section background="gray" padding="xl" className="text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">The Team Behind BatchTrak™</h1>
          <p className="text-lg text-gray-600">
            Supporting biopharma manufacturers who demand both operational excellence and trust. We built BatchTrak™
            because we lived the pain of broken batch operations. As former operations and quality leaders in biotech,
            we know what it takes to deliver batches on time, every time—and we built the platform we wished we'd had.
          </p>
        </div>
      </Section>

      {/* Why We Built BatchTrak */}
      <Section background="white" padding="lg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Why We Built BatchTrak™</h2>
          <p className="text-gray-700 text-lg mb-6">
            After years of managing batch operations across multiple sites, we saw the same problems everywhere:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Teams firefighting instead of executing to plan</li>
            <li>Critical information trapped in spreadsheets and emails</li>
            <li>Deviations discovered too late to prevent impact</li>
            <li>Systems too complex for daily use or too simple to scale</li>
          </ul>
          <p className="text-gray-700 text-lg mb-6">
            We tried every solution on the market. Enterprise systems took years to implement and required armies of
            consultants. Simple tools couldn't handle the complexity of real batch operations. So we built
            BatchTrak™—the platform that gives you enterprise-level visibility with startup-level speed.
          </p>
          <p className="text-gray-700 text-lg">
            <strong>BatchTrak™ isn't just software—it's the operational backbone we wish we'd had</strong> when we were
            running batch operations ourselves.
          </p>
        </div>
      </Section>

      {/* Our Approach */}
      <Section background="gray" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Software-First, Implementation-Smart</h2>
          <p className="text-gray-600 mb-8">
            We don't just sell you software and walk away. We ensure your success with proven implementation expertise
            and ongoing support.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-left">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <Zap className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold">BatchTrak™ Platform</h3>
              </div>
              <p className="text-gray-700">
                Real-time batch visibility and control—configured to your workflows in 30 days, not 30 months.
              </p>
            </div>
            <div className="text-left">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <Target className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold">Implementation Expertise</h3>
              </div>
              <p className="text-gray-700">
                Strategic guidance from operations veterans who know how to make technology stick in manufacturing
                environments.
              </p>
            </div>
            <div className="text-left">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <Users className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold">Team Enablement</h3>
              </div>
              <p className="text-gray-700">
                Role-based training and ongoing coaching to build capabilities that drive lasting improvements.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* What Makes Us Different */}
      <Section background="white" padding="lg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">What Makes Us Different</h2>
          <ul className="space-y-6">
            <li>
              <h3 className="text-xl font-bold">We've Been in Your Shoes</h3>
              <p className="text-gray-700">
                Our team has managed batch operations, dealt with deviations at 2 AM, and explained delays to executives
                and clients. We built BatchTrak™ to solve real problems, not theoretical ones.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-bold">Speed Without Compromise</h3>
              <p className="text-gray-700">
                30-day implementation vs. multi-year enterprise rollouts. You get enterprise-level capabilities without
                enterprise-level complexity.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-bold">Built for Batch Manufacturing</h3>
              <p className="text-gray-700">
                Not a generic workflow tool adapted for manufacturing. BatchTrak™ was designed from the ground up for
                the unique challenges of batch operations.
              </p>
            </li>
          </ul>
        </div>
      </Section>

      {/* ISPE/GAMP5 Section */}
      <Section background="gray" padding="lg">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">ISPE/GAMP5 Commissioned Platform</h3>
            <p className="text-gray-700">
              BatchTrak™ is commissioned per ISPE and GAMP5 standards, providing documented evidence of industry best
              practice alignment to support customer workflows in regulated environments.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="white" padding="xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to See What BatchTrak™ Can Do for You?</h2>
          <p className="text-gray-600 mb-8">
            Let us show you how BatchTrak™ can transform your batch operations with a personalized demo tailored to your
            challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-white" asChild>
              <a href="/contact">Contact Us</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/batchtrak">Explore BatchTrak™</a>
            </Button>
          </div>
        </div>
      </Section>

      {/* Add structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </PageLayout>
  )
}
