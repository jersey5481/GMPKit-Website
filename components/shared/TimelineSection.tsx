// New reusable timeline component
import Section from "@/components/ui/Section"
import type { LucideIcon } from "lucide-react"

interface TimelineStep {
  phase: string
  title: string
  activities: string[]
  icon?: LucideIcon
}

interface TimelineSectionProps {
  title: string
  description: string
  steps: TimelineStep[]
  background?: "white" | "gray" | "primary"
  showConnectors?: boolean
}

export default function TimelineSection({
  title,
  description,
  steps,
  background = "white",
  showConnectors = true,
}: TimelineSectionProps) {
  return (
    <Section background={background} padding="lg">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-md h-full flex flex-col">
                <div className="text-center mb-4">
                  {step.icon && (
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto mb-3">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-primary">{step.phase}</h3>
                </div>
                <ul className="space-y-2 flex-grow">
                  {step.activities.map((activity, activityIndex) => (
                    <li key={activityIndex} className="text-sm text-gray-600 flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connector arrow for desktop */}
              {showConnectors && index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <div className="w-6 h-0.5 bg-primary"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-primary border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
