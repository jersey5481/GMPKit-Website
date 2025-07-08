import Section from "@/components/ui/Section"
import { Users, Target, Cog, TrendingUp } from "lucide-react"

const serviceComponents = [
  {
    icon: Target,
    title: "Strategic Assessment",
    description: "Value stream diagnostics and process mapping to identify your highest-impact improvements",
    tiers: [
      "Remote diagnostic (Essentials)",
      "SOP template delivery (LEAN Stack)",
      "On-site evaluation (Command Center)",
    ],
  },
  {
    icon: Cog,
    title: "Platform Configuration",
    description: "BatchTrak™ configured to your workflows with LEAN principles embedded in every process",
    tiers: ["Standard setup (Essentials)", "Done-for-you config (LEAN Stack)", "Custom integrations (Command Center)"],
  },
  {
    icon: Users,
    title: "Team Enablement",
    description: "Role-based training and coaching to build internal capabilities and drive adoption",
    tiers: ["Foundation training (Essentials)", "90-day coaching (LEAN Stack)", "6-month partnership (Command Center)"],
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description: "Ongoing optimization support to ensure you achieve and sustain measurable results",
    tiers: [
      "Go-live support (Essentials)",
      "Optimization program (LEAN Stack)",
      "Embedded success manager (Command Center)",
    ],
  },
]

export default function ServiceIntegrationSection() {
  return (
    <Section background="white" padding="lg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Platform + Process + People = Transformation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just sell software. Every BatchTrak™ tier combines technology with methodology and human expertise
            to ensure your transformation succeeds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceComponents.map((component, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mr-4">
                  <component.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{component.title}</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{component.description}</p>
              <div className="space-y-2">
                {component.tiers.map((tier, tierIndex) => (
                  <div key={tierIndex} className="text-sm text-gray-500 flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {tier}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-primary/10 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Why This Hybrid Approach Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2">Technology Alone Fails</h4>
                <p className="text-sm text-gray-600">
                  Software without process change and team enablement leads to expensive shelf-ware
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Consulting Alone Is Temporary</h4>
                <p className="text-sm text-gray-600">
                  Recommendations without supporting technology don't create lasting change
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Integration Creates Results</h4>
                <p className="text-sm text-gray-600">
                  Platform + methodology + coaching creates sustainable transformation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
