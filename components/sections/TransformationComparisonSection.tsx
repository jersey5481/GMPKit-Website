import Section from "@/components/ui/Section"
import { ArrowRight } from "lucide-react"

const comparisonData = [
  {
    category: "Target Organization",
    essentials: "Single-site teams, startups getting off spreadsheets",
    leanStack: "Multi-role teams, mid-size sites building structure",
    commandCenter: "Multi-site enterprises requiring strategic oversight",
  },
  {
    category: "Core Theme",
    essentials: "Batch visibility & alerts (Tool-centric)",
    leanStack: "Structured operations + coaching (Hybrid tool + service)",
    commandCenter: "Custom systems & scale (Solution partnership)",
  },
  {
    category: "Batch Visibility",
    essentials: "✓ Real-time dashboard",
    leanStack: "✓ Advanced dashboards",
    commandCenter: "✓ Multi-site command center",
  },
  {
    category: "Deviation Management",
    essentials: "Basic alerts",
    leanStack: "✓ Structured workflows + SOP templates",
    commandCenter: "✓ Advanced + custom protocols",
  },
  {
    category: "LEAN Methodology",
    essentials: "Foundation concepts",
    leanStack: "✓ 90-day optimization program",
    commandCenter: "✓ Continuous transformation partnership",
  },
  {
    category: "Consulting Deliverables",
    essentials: "Value Stream Diagnostic (remote)",
    leanStack: "SOP templates + remote coaching",
    commandCenter: "On-site strategic evaluation + embedded support",
  },
  {
    category: "System Integrations",
    essentials: "Standard APIs",
    leanStack: "QMS integration (optional add-on)",
    commandCenter: "✓ ERP/MES/LIMS + custom integrations",
  },
  {
    category: "AI/Advanced Tooling",
    essentials: "—",
    leanStack: "—",
    commandCenter: "✓ MCP AI agent interface",
  },
  {
    category: "Implementation Timeline",
    essentials: "30 days",
    leanStack: "45 days",
    commandCenter: "60-90 days",
  },
  {
    category: "Success Program",
    essentials: "Go-live support",
    leanStack: "90-day optimization",
    commandCenter: "6-month transformation partnership",
  },
]

export default function TransformationComparisonSection() {
  return (
    <Section background="gray" padding="xl">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Transformation Roadmap: From Tools to Partnership</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each tier builds on the previous, creating a natural progression from basic visibility to complete
            operational transformation. Choose where you want to start—and where you want to go.
          </p>
        </div>

        {/* Progression Visual */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <p className="text-sm font-medium">Visibility Essentials</p>
              <p className="text-xs text-gray-500">Tool-Centric</p>
            </div>
            <ArrowRight className="text-gray-400" />
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-2">
                <span className="text-primary font-bold">2</span>
              </div>
              <p className="text-sm font-medium">Operational LEAN Stack</p>
              <p className="text-xs text-gray-500">Hybrid Tool + Service</p>
            </div>
            <ArrowRight className="text-gray-400" />
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <p className="text-sm font-medium">Command Center</p>
              <p className="text-xs text-gray-500">Solution Partnership</p>
            </div>
          </div>
        </div>

        {/* Detailed Comparison Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-4 gap-4 p-6 bg-gray-50 font-semibold text-sm">
            <div>Capability</div>
            <div className="text-blue-600">Visibility Essentials</div>
            <div className="text-primary">Operational LEAN Stack</div>
            <div className="text-purple-600">Command Center</div>
          </div>
          {comparisonData.map((row, index) => (
            <div key={index} className="grid grid-cols-4 gap-4 p-6 border-t border-gray-100 text-sm">
              <div className="font-medium">{row.category}</div>
              <div className="text-gray-700">{row.essentials}</div>
              <div className="text-gray-700">{row.leanStack}</div>
              <div className="text-gray-700">{row.commandCenter}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <div className="bg-primary/10 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Natural Upgrade Path</h3>
            <p className="text-gray-600">
              Start where you are, grow when you're ready. Most customers begin with Visibility Essentials and upgrade
              to Operational LEAN Stack within 6 months as they see results and want to expand capabilities.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
