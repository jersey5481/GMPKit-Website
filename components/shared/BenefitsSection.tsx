import Section from "@/components/ui/Section"
import BenefitItem from "@/components/ui/BenefitItem"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { SHARED_CONTENT } from "@/lib/constants"

interface BenefitsSectionProps {
  title?: string
  description?: string
  benefits?: string[]
  buttonText?: string
  buttonHref?: string
  imageSrc?: string
  imageAlt?: string
  background?: "white" | "gray" | "primary"
  reverse?: boolean
}

export default function BenefitsSection({
  title = "Why Leading Manufacturers Trust GMPKit",
  description = "GMPKit delivers more than software. We provide the platform, process, and people enablement to drive execution, build accountability, and keep your teams aligned—so you can hit your targets with confidence.",
  benefits = SHARED_CONTENT.benefits,
  buttonText = "See How It Works",
  buttonHref = "/batchtrak",
  imageSrc = "/images/gmpkit-mascot.png",
  imageAlt = "GMPKit - Complete batch operations solution",
  background = "gray",
  reverse = false,
}: BenefitsSectionProps) {
  return (
    <Section background={background} padding="lg">
      <div className={`grid gap-6 lg:grid-cols-2 lg:gap-12 items-center ${reverse ? "lg:flex-row-reverse" : ""}`}>
        <div className={`space-y-6 ${reverse ? "lg:order-2" : ""}`}>
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className="text-xl text-gray-600">{description}</p>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <BenefitItem key={index} text={benefit} />
            ))}
          </ul>
          <div className="pt-4">
            <Button size="lg" asChild>
              <a href={buttonHref}>
                {buttonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
        <div className={`flex justify-center ${reverse ? "lg:order-1" : ""}`}>
          <Image src={imageSrc || "/placeholder.svg"} width={400} height={400} alt={imageAlt} className="rounded-lg" />
        </div>
      </div>
    </Section>
  )
}
