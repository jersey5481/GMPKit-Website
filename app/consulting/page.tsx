import PageLayout from "@/components/layout/PageLayout"
import Section from "@/components/ui/Section"
import { generateMetadata as generateSEOMetadata, seoConfigs, generateServiceSchema } from "@/lib/seo"
import type { Metadata } from "next"
import CTASection from "@/components/shared/CTASection"

export const metadata: Metadata = generateSEOMetadata(seoConfigs.consulting)

const focusAreas = [
  {
    icon: "🔍",
    title: "Operational Diagnostics",
    description: "Identify constraints and execution gaps across sites, roles, or workflows.",
  },
  {
    icon: "🧱",
    title: "System Design & Configuration",
    description: "Tailor BatchTrak's structure to your operating model, not the other way around.",
  },
  {
    icon: "📈",
    title: "Performance Roadmaps",
    description: "Align teams with cross-functional plans that elevate accountability and flow.",
  },
  {
    icon: "🛠️",
    title: "Hands-On Deployment Support",
    description: "We don't just advise — we help configure, train, and tune for real-world use.",
  },
]

const differentiators = [
  {
    title: "Hands-On Experience:",
    description: "We've managed batch operations, not just studied them",
  },
  {
    title: "Platform-Integrated:",
    description: "Our recommendations work seamlessly with BatchTrak™",
  },
  {
    title: "Results-Focused:",
    description: "We measure success by your operational improvements, not deliverables",
  },
  {
    title: "Long-Term Partnership:",
    description: "Our team stays connected - ensuring your systems stay optimized as you scale.",
  },
]

const timelineSteps = [
  { step: 1, title: "Discovery & Assessment", duration: "2-4 weeks" },
  { step: 2, title: "System Design & Configuration", duration: "4-6 weeks" },
  { step: 3, title: "Pilot Implementation", duration: "6-8 weeks" },
  { step: 4, title: "Scale & Optimize", duration: "Ongoing" },
]

export default function ConsultingPage() {
  const serviceSchema = generateServiceSchema(
    "Manufacturing Operations Consulting",
    "Strategic consulting services focused on LEAN principles, Theory of Constraints, and operational excellence for batch manufacturers.",
  )

  return (
    <PageLayout currentPage="consulting">
      {/* Hero Section */}
      <Section background="gray" padding="xl" className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Manufacturing Operations Consulting: Strategy Meets Execution
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          You don't need more strategy decks — you need execution that sticks. Our consulting approach delivers a
          tactical playbook that turns strategic priorities into measurable progress using LEAN principles and Theory of
          Constraints.
        </p>
      </Section>

      {/* Where We Focus */}
      <Section background="white" padding="xl" className="text-center">
        <h2 className="text-3xl font-bold mb-12">Where We Focus</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto text-left">
          {focusAreas.map((area, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="text-3xl">{area.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* The GMPKit Difference */}
      <Section background="gray" padding="lg">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">The GMPKit Difference</h2>
            <p className="text-gray-500 md:text-xl max-w-2xl">
              We're not traditional consultants. We've lived the challenges of batch manufacturing firsthand—which is
              exactly why we built BatchTrak™. Our approach is practical, grounded, and focused on delivering results
              where they matter most: on the floor, across teams, and throughout your operation.
            </p>
            <ul className="grid gap-3 text-left">
              {differentiators.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary mt-0.5 flex-shrink-0"></div>
                  <span>
                    <strong>{item.title}</strong> {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
              <h3 className="text-xl font-bold mb-4">Typical Engagement Timeline</h3>
              <div className="space-y-4">
                {timelineSteps.map((step) => (
                  <div key={step.step} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-bold text-primary">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-semibold">{step.title}</h4>
                      <p className="text-sm text-gray-600">{step.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Align Strategy with Execution?"
        description="Let's start with a conversation about your current challenges and explore how our consulting approach can accelerate your BatchTrak™ implementation and operational improvements."
        primaryButton={{ text: "Schedule a Discovery Call" }}
        secondaryButton={{ text: "Download Case Studies" }}
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
