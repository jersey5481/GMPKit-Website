import Section from "@/components/ui/Section"
import IndustryPill from "@/components/ui/IndustryPill"
import { INDUSTRIES } from "@/lib/constants"

interface IndustriesSectionProps {
  title?: string
  description?: string
  industries?: typeof INDUSTRIES
  background?: "white" | "gray" | "primary"
  className?: string
}

export default function IndustriesSection({
  title = "Supporting Biopharma Manufacturers. Ready for More.",
  description = "From biopharma to food & beverage, our ISPE/GAMP5 commissioned platform adapts to any batch-based manufacturing environment where standards alignment, quality, and regulatory confidence matter.",
  industries = INDUSTRIES,
  background = "white",
  className = "",
}: IndustriesSectionProps) {
  return (
    <Section background={background} padding="lg" className={`text-center ${className}`}>
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">{description}</p>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
        {industries.map((industry, index) => (
          <IndustryPill key={index} name={industry.name} />
        ))}
      </div>
    </Section>
  )
}
