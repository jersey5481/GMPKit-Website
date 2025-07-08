import Section from "@/components/ui/Section"
import StatCard from "@/components/ui/StatCard"
import { SHARED_CONTENT } from "@/lib/constants"

interface StatsSectionProps {
  stats?: Array<{ number: string; label: string }>
  background?: "white" | "gray" | "primary"
  className?: string
}

export default function StatsSection({
  stats = SHARED_CONTENT.stats,
  background = "gray",
  className = "",
}: StatsSectionProps) {
  return (
    <Section background={background} padding="lg" className={className}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <StatCard key={index} number={stat.number} label={stat.label} />
        ))}
      </div>
    </Section>
  )
}
