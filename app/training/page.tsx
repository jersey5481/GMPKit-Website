import PageLayout from "@/components/layout/PageLayout"
import Section from "@/components/ui/Section"
import { CheckCircle, Users, Award, BookOpen, Monitor, Zap } from "lucide-react"
import { generateMetadata as generateSEOMetadata, seoConfigs, generateServiceSchema } from "@/lib/seo"
import type { Metadata } from "next"
import CTASection from "@/components/shared/CTASection"

export const metadata: Metadata = generateSEOMetadata(seoConfigs.training)

const trainingApproach = [
  {
    icon: Monitor,
    title: "Hands-On Learning",
    description: "Practice with your actual BatchTrak™ configuration using real scenarios from your operation.",
  },
  {
    icon: Users,
    title: "Role-Based Content",
    description: "Training tailored to specific roles and responsibilities—no generic, one-size-fits-all sessions.",
  },
  {
    icon: Zap,
    title: "Immediate Application",
    description: "Learn today, apply tomorrow. Training is designed for immediate use in your daily operations.",
  },
]

const deliveryOptions = [
  {
    icon: Users,
    title: "On-Site Training",
    description: "Customized training delivered at your facility using your actual BatchTrak™ environment and data.",
    benefits: ["Team building", "Real environment", "Immediate Q&A", "Custom scenarios"],
  },
  {
    icon: BookOpen,
    title: "Virtual Workshops",
    description: "Interactive online sessions with hands-on exercises and real-time Q&A with our experts.",
    benefits: ["Flexible scheduling", "Cost effective", "Record sessions", "Global accessibility"],
  },
  {
    icon: Award,
    title: "Certification Programs",
    description: "Structured learning paths with assessments and certifications to validate competency levels.",
    benefits: ["Skill validation", "Career development", "Competency tracking", "Ongoing assessment"],
  },
]

export default function TrainingPage() {
  const serviceSchema = generateServiceSchema(
    "BatchTrak Training & Enablement",
    "Comprehensive training programs for BatchTrak™ platform focusing on role-based learning and operational excellence.",
  )

  return (
    <PageLayout currentPage="training">
      {/* Hero Section */}
      <Section background="gray" padding="xl" className="text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            BatchTrak™ Training: Build Capabilities That Drive Results
          </h1>
          <p className="text-gray-600 text-lg">
            Our training programs don't just teach software features—they develop the operational thinking and
            leadership skills your team needs to maximize BatchTrak™ value and drive continuous improvement. Guided by
            our proprietary checklist, training is strategically targeted to address the root causes and focus exactly
            where the problems are.
          </p>
        </div>
      </Section>

      {/* Training Philosophy */}
      <Section background="white" padding="lg">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">More Than Software Training—Operational Excellence</h2>
              <p className="text-gray-600 text-xl">
                The best BatchTrak™ implementations succeed when people understand not just how to use the platform, but
                how to think operationally and drive continuous improvement.
              </p>
              <ul className="grid gap-3 text-left">
                {[
                  {
                    title: "Role-Based Learning:",
                    desc: "Tailored content for operators, supervisors, managers, and executives",
                  },
                  {
                    title: "Real-World Application:",
                    desc: "Practice with your actual BatchTrak™ configuration and scenarios",
                  },
                  {
                    title: "Operational Thinking:",
                    desc: "Build problem-solving skills that go beyond the platform",
                  },
                  {
                    title: "Ongoing Development:",
                    desc: "Continuous coaching to build internal expertise and capabilities",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>{item.title}</strong> {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-center">Training Impact</h3>
                <div className="space-y-4">
                  {[
                    { metric: "85%", label: "Faster user adoption" },
                    { metric: "60%", label: "Reduction in support tickets" },
                    { metric: "40%", label: "Improvement in workflow compliance" },
                    { metric: "30 Days", label: "To actionable knowledge" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-primary">{stat.metric}</div>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Training Approach */}
      <Section background="gray" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Our Training Approach</h2>
          <p className="text-xl text-gray-600 mb-8">
            Practical, role-based training that gets your team productive with BatchTrak™ from day one.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainingApproach.map((approach, index) => (
              <div key={index} className="text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                  <approach.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{approach.title}</h3>
                <p className="text-gray-600">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Training Delivery Options */}
      <Section background="white" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Flexible Training Delivery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliveryOptions.map((option, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-left">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <option.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <ul className="space-y-1">
                  {option.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-2">
                      <CheckCircle className="h-3 w-3 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Training Included */}
      <Section background="gray" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Training Included with Every BatchTrak™ Package</h2>
          <p className="text-gray-600 mb-8">
            Comprehensive training is built into every BatchTrak™ implementation—ensuring your team is ready to succeed
            from day one.
          </p>

          <div className="max-w-3xl mx-auto">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Comprehensive Training Included with Every Package</h3>
              <p className="text-lg text-gray-700">
                Every BatchTrak™ engagement includes role-based training, hands-on coaching, and ongoing
                support—ensuring your team is ready to succeed from day one.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Empower Your Team with BatchTrak™?"
        description="Our training programs are designed to accelerate adoption, build confidence, and create lasting operational improvements. Let's discuss which programs are right for your team."
        primaryButton={{ text: "Schedule Training Consultation", href: "/contact" }}
        secondaryButton={{ text: "Download Training Overview" }}
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
