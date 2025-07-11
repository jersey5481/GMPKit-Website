import Section from "@/components/ui/Section"
import { Search, Settings, Users, Monitor, TrendingUp } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Assess your process",
    description: "We analyze your current batch workflows and identify improvement opportunities",
  },
  {
    icon: Settings,
    title: "Configure BatchTrak to your flow",
    description: "Customize dashboards, alerts, and workflows to match how your team actually works",
  },
  {
    icon: Users,
    title: "Train your team with our playbook",
    description: "Role-based training ensures everyone knows how to use the system effectively",
  },
  {
    icon: Monitor,
    title: "Track batch progress in real time",
    description: "Monitor every batch across all sites with live updates and intelligent alerts",
  },
  {
    icon: TrendingUp,
    title: "Improve continuously",
    description: "Use data insights to optimize processes and prevent future issues",
  },
]

export default function HowItWorksSection() {
  return (
    <Section background="white" padding="xl" id="how-it-works">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From assessment to optimization, we guide you through every step of transforming your batch operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Step number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold z-10">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 mx-auto mb-4">
                <step.icon className="h-8 w-8 text-primary dark:text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-2 dark:text-white">{step.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{step.description}</p>

              {/* Connector line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 dark:bg-gray-700 -translate-x-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
