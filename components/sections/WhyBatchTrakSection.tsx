import Section from "@/components/ui/Section"
import { AlertTriangle, Eye, TrendingDown, CheckCircle } from "lucide-react"

const problems = [
  {
    icon: AlertTriangle,
    title: "Manual systems don't scale",
    description: "Spreadsheets and paper trails break down as you grow",
  },
  {
    icon: Eye,
    title: "Visibility gaps delay decisions",
    description: "You can't manage what you can't see in real-time",
  },
  {
    icon: TrendingDown,
    title: "Deviations pile up, root causes vanish",
    description: "Problems compound when tracking is reactive, not proactive",
  },
]

export default function WhyBatchTrakSection() {
  return (
    <Section background="gray" padding="xl">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Most Batch Operations Break Down</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Even the best teams struggle when their systems can't keep up with the complexity of scaling up batch
            manufacturing. Critical KPIs suffer—more lost batches, longer review cycles, and delayed dispositions—while
            business outcomes fall short.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 mb-4">
                <problem.icon className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Solution callout */}
        <div className="bg-primary text-white p-8 rounded-lg text-center">
          <div className="flex items-center justify-center mb-4">
            <CheckCircle className="h-8 w-8 mr-3" />
            <h3 className="text-2xl font-bold">
              GMPKit fixes this by combining LEAN principles with BatchTrak™ technology
            </h3>
          </div>
          <p className="text-xl text-primary-foreground/90">
            — See every batch. Prevent every failure. Control every outcome.
          </p>
        </div>
      </div>
    </Section>
  )
}
