import PageLayout from "@/components/layout/PageLayout"
import Section from "@/components/ui/Section"
import { CheckCircle, Users, Target, Zap, Clock, Shield, Rocket, HeadphonesIcon } from "lucide-react"
import { generateMetadata as generateSEOMetadata, generateServiceSchema } from "@/lib/seo"
import type { Metadata } from "next"
import CTASection from "@/components/shared/CTASection"
import Image from "next/image"


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
    title: "Implementation Expertise is Our Core Differentiator",
    description:
      "We don't just provide software—we ensure transformation. Our operations veterans have guided manufacturing sites through successful LEAN implementations.",
  },
  {
    title: "Coaching-Driven Transformation",
    description:
      "Technology enables change, but coaching drives results. We combine BatchTrak™ deployment with hands-on LEAN coaching to ensure lasting operational improvements.",
  },
  {
    title: "Foundation-First Approach",
    description:
      "Start with visibility essentials, then build your operational capabilities. We configure BatchTrak™ to work with your current reality while preparing for your transformation journey.",
  },
  {
    title: "Partnership Beyond Go-Live",
    description:
      "Implementation is just the beginning. We provide ongoing coaching, optimization, and upgrade pathways to help you achieve continuous operational excellence.",
  },
]

const implementationBenefits = [
  {
    icon: Target,
    title: "Strategic Assessment",
    description: "Complete analysis of your current workflows and identification of highest-impact improvements",
  },
  {
    icon: Users,
    title: "Collaborative Configuration",
    description: "Work directly with our experts to configure BatchTrak™ to your exact operational needs",
  },
  {
    icon: Rocket,
    title: "Hands-On Training",
    description: "Comprehensive training for all user roles to ensure confident adoption from day one",
  },
  {
    icon: HeadphonesIcon,
    title: "Go-Live Support",
    description: "Real-time support during launch with continuous monitoring and optimization",
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <div className="flex flex-col space-y-[-0.6em]">
              <div className="flex items-center justify-center gap-3">
                <div className="flex items-center">
                  <Image
                    src="/images/batchtrak-logo-new.png"
                    width={280}
                    height={84}
                    alt="BatchTrak™"
                    className="h-[4.46em] w-auto"
                    priority
                  />
                </div>
                <span>Implementation</span>
              </div>
              <span className="text-primary">From Setup to Success</span>
            </div>
          </h1>
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
            Technology is only as good as its implementation. We've learned what works (and what doesn't) from real-world
            deployments across the industry.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyImplementationMatters.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-[#e6f7df] to-[#f2faea] p-6 rounded-lg text-left shadow-lg border border-[#e0f0d8]">
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



      {/* Simplified Implementation Promise */}
      <Section background="white" padding="xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">30-Day Implementation: Your Foundation for Success</h2>

          <div className="bg-primary/10 border-2 border-primary/20 rounded-lg p-8 mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <p className="text-xl font-semibold text-gray-800 mb-4">
              Every BatchTrak™ package includes our proven 30-day implementation process—from initial assessment to full
              go-live.
            </p>
            <p className="text-lg text-gray-600">
              No additional fees, no surprises. Just expert guidance from operations veterans who ensure your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {implementationBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4 mx-auto">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-center">{benefit.title}</h3>
                <p className="text-sm text-gray-600 text-center">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Success Metrics */}
      <Section background="gray" padding="lg">
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
