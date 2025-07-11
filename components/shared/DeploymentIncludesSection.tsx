import Section from "@/components/ui/Section"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface DeploymentIncludesSectionProps {
  title?: string
  description?: string
  showCaricature?: boolean
}

const deploymentIncludes = [
  "Platform configuration and setup",
  "Data migration and integration support",
  "Custom workflow design",
  "User training and onboarding",
  "Go-live support and monitoring",
  "30-day post-deployment optimization",
]

export default function DeploymentIncludesSection({
  title = "What's Included in Every Deployment",
  description = "We don't just deliver software—we ensure successful adoption with comprehensive implementation support.",
  showCaricature = true,
}: DeploymentIncludesSectionProps) {
  return (
    <Section background="gray" padding="lg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>
        </div>

        <div className={`grid ${showCaricature ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"} gap-12 items-center`}>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deploymentIncludes.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 pl-8 md:pl-16">
                  <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {showCaricature && (
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/images/batchtrak-mascot-about.png"
                width={400}
                height={400}
                alt="BatchTrak Implementation Support"
                className="max-w-full h-auto"
              />
            </div>
          )}
        </div>
        
        <div className="mt-10 text-center">
          <Button size="lg" variant="default" asChild>
            <Link href="/implementation">Learn More About Our Implementation</Link>
          </Button>
        </div>
      </div>
    </Section>
  )
}
