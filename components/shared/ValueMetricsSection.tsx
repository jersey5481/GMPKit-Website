import Section from "@/components/ui/Section"
import { VALUE_METRICS } from "@/lib/constants"
import {
  Radio,
  Clipboard,
  Clock,
  Shield,
  TrendingUp,
  Compass,
  AlertTriangle,
  Calendar,
  CheckSquare,
  FileText,
} from "lucide-react"

const iconMap = {
  Radio,
  Clipboard,
  Clock,
  Shield,
  TrendingUp,
  Compass,
  AlertTriangle,
  Calendar,
  CheckSquare,
  FileText,
}

interface ValueMetricsSectionProps {
  title?: string
  description?: string
  metrics?: typeof VALUE_METRICS
  background?: "white" | "gray" | "primary"
}

export default function ValueMetricsSection({
  title = "Designed to Move the Metrics That Matter",
  description = "BatchTrak™ delivers real results—on the floor, across departments, and at the leadership level.",
  metrics = VALUE_METRICS,
  background = "white",
}: ValueMetricsSectionProps) {
  return (
    <Section background={background} padding="xl" className="text-center">
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">{description}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto text-left">
        {metrics.map((metric, index) => {
          const IconComponent = iconMap[metric.icon as keyof typeof iconMap]
          return (
            <div key={index} className="flex flex-col items-start">
              <IconComponent className="h-8 w-8 text-primary mb-2" />
              <h3 className="text-xl font-semibold mb-1">{metric.title}</h3>
              <p className="text-gray-600">{metric.description}</p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
