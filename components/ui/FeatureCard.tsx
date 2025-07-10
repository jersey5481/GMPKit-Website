"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FeatureCardProps {
  title: string
  subtitle: string
  items: string[]
  buttonLabel?: string
  onButtonClick?: () => void
  className?: string
}

export default function FeatureCard({
  title,
  subtitle,
  items,
  buttonLabel,
  onButtonClick,
  className = "",
}: FeatureCardProps) {
  return (
    <Card className={`p-6 flex flex-col shadow-md rounded-2xl ${className}`}>
      <CardContent className="space-y-6 flex flex-col flex-1 p-0">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold leading-tight">{title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{subtitle}</p>
        </div>

        <div className="space-y-4 flex-1">
          {items.map((item, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle className="text-green-500 mt-1 w-4 h-4 flex-shrink-0" />
              <span className="text-sm leading-relaxed">{item}</span>
            </div>
          ))}
        </div>

        {buttonLabel && (
          <div className="pt-4">
            <Button variant="outline" className="w-full bg-transparent" onClick={onButtonClick}>
              {buttonLabel}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
