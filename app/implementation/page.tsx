import PageLayout from "@/components/layout/PageLayout"
import Section from "@/components/ui/Section"
import { CheckCircle, Users, Target, Zap } from "lucide-react"
import { generateMetadata as generateSEOMetadata, generateServiceSchema } from "@/lib/seo"
import type { Metadata } from "next"
import CTASection from "@/components/shared/CTASection"

// Add imports
import PackageGrid from "@/components/shared/PackageGrid"
import TimelineSection from "@/components/shared/TimelineSection"
import { IMPLEMENTATION_PACKAGES, IMPLEMENTATION_TIMELINE } from "@/lib/shared-data"

export const metadata: Metadata = generateSEOMetadata({
  title: "BatchTrak™ Implementation Services | Expert Deployment Support",
  description:
    "Expert implementation services for BatchTrak™ platform. 30-day deployment with strategic guidance from operations veterans who ensure your success.",
  keywords: [
    "BatchTrak implementation",
    "manufacturing software deployment",
    "batch operations consulting",
    "pharmaceutical software implementation",
    "manufacturing operations support",
  ],
  canonical: "https://www.gmpkit.com/implementation",
})

const implementationApproach = [
  {
    icon: Target,
    title: "Strategic Assessment",
    description: "We analyze your current workflows and identify the highest-impact improvements",
    details: [
      "Process mapping and gap analysis",
      "Stakeholder interviews across roles",
      "Quick wins identification",
      "Success metrics definition",
    ],
  },
  {
    icon: Users,
    title: "Collaborative Configuration",
    description: "Your team works with our experts to configure BatchTrak™ to your exact needs",
    details: ["Role-based dashboard design", "Workflow customization", "Integration planning", "User access setup"],
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "30-day implementation with hands-on support to ensure smooth adoption",
    details: [
      "Phased rollout approach",
      "Real-time troubleshooting",
      "Performance monitoring",
      "Continuous optimization",
    ],
  },
]

const whyImplementationMatters = [
  {
    title: "We've Seen What Works (and What Doesn't)",
    description:
      "Our team has implemented batch operations improvements across dozens of sites. We know the common pitfalls and how to avoid them.",
  },
  {
    title: "Technology + Change Management",
    description:
      "Software alone doesn't drive results. We combine BatchTrak™ configuration with proven change management to ensure lasting adoption.",
  },
  {
    title: "Built for Your Reality",
    description:
      "We configure BatchTrak™ to work with your existing systems and processes, not force you to change everything to fit the software.",
  },
  {
    title: "Ongoing Partnership",
    description:
      "Implementation doesn't end at go-live. We provide ongoing coaching and optimization to help you get maximum value from BatchTrak™.",
  },
]

export default function ImplementationPage() {
  const serviceSchema = generateServiceSchema(
    "BatchTrak Implementation Services",
    "Expert implementation and deployment services for BatchTrak™ platform with strategic guidance from operations veterans.",
  )

  return (
    <PageLayout currentPage="implementation">
      {/* Hero Section */}
      <Section background="gray" padding="xl" className="text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">BatchTrak™ Implementation: From Setup to Success</h1>
          <p className="text-gray-600 text-lg">
            We don't just install software—we ensure your success. Our implementation services combine BatchTrak™
            configuration with strategic guidance from operations veterans who've been in your shoes.
          </p>
        </div>
      </Section>

      {/* Why Implementation Expertise Matters */}
      <Section background="white" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Why Implementation Expertise Matters</h2>
          <p className="text-xl text-gray-600 mb-8">
            Technology is only as good as its implementation. We've learned what works (and what doesn't) from dozens of
            deployments across the industry.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyImplementationMatters.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-left">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Our Implementation Approach */}
      <Section background="gray" padding="xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Our Implementation Approach</h2>
          <p className="text-xl text-gray-600 mb-8">
            Proven methodology that gets you from kickoff to full adoption in 30 days—not 30 months.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {implementationApproach.map((approach, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-left">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <approach.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{approach.title}</h3>
                <p className="text-gray-600 mb-4">{approach.description}</p>
                <ul className="space-y-2">
                  {approach.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Implementation Timeline */}
      <TimelineSection
        title="30-Day Implementation Timeline"
        description="Our proven process gets you from kickoff to full deployment in just one month."
        steps={IMPLEMENTATION_TIMELINE}
        background="white"
      />

      {/* Implementation Packages */}
      <Section background="gray" padding="xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Implementation Included with Every Package</h2>
          <p className="text-xl text-gray-600 mb-8">
            Implementation expertise is built into every BatchTrak™ package—no hidden costs, no surprises.
          </p>

          <PackageGrid packages={IMPLEMENTATION_PACKAGES} showDuration={true} showIncluded={true} />
        </div>
      </Section>

      {/* Success Metrics */}
      <Section background="white" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Implementation Success Metrics</h2>
          <p className="text-gray-600 mb-8">Our implementation approach delivers measurable results from day one.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <p className="text-sm text-gray-600">On-time go-live rate</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">85%</div>
              <p className="text-sm text-gray-600">User adoption in first month</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">60%</div>
              <p className="text-sm text-gray-600">Reduction in support tickets</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">30 Days</div>
              <p className="text-sm text-gray-600">Average implementation time</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Start Your BatchTrak™ Implementation?"
        description="Let's discuss your specific needs and create an implementation plan that ensures your success from day one."
        primaryButton={{ text: "Schedule Implementation Consultation", href: "/contact" }}
        secondaryButton={{ text: "Download Implementation Guide" }}
      />

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
