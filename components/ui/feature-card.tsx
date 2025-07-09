"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  title: string
  subtitle: string
  /**
   * List items to display under the subtitle.
   */
  items: string[]
  /**
   * Label for the CTA button (optional).
   */
  buttonLabel?: string
  /**
   * Click handler for the CTA button (optional).
   */
  onButtonClick?: () => void
  /**
   * Extra Tailwind classes.
   */
  className?: string
}

export default function FeatureCard({
  title,
  subtitle,
  items,
  buttonLabel,
  onButtonClick,
  className,
}: FeatureCardProps) {
  return (
    <div className={cn("flex flex-col rounded-lg border border-gray-200 bg-white p-8 shadow-sm", className)}>
      <h3 className="mb-2 text-2xl font-bold">{title}</h3>
      <p className="mb-6 text-gray-600">{subtitle}</p>

      <ul className="mb-6 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            {/* Using Lucide icon with valid props only */}
            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {buttonLabel && (
        <Button className="mt-auto w-full" onClick={onButtonClick}>
          {buttonLabel}
        </Button>
      )}
    </div>
  )
}
