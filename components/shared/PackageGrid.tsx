// New reusable component for package displays
import { Button } from "@/components/ui/button"
import { Check, Star, Clock } from "lucide-react"
import type { Package } from "@/lib/shared-data"

interface PackageGridProps {
  packages: Package[]
  showDuration?: boolean
  showIncluded?: boolean
  className?: string
}

export default function PackageGrid({
  packages,
  showDuration = false,
  showIncluded = false,
  className = "",
}: PackageGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto ${className}`}>
      {packages.map((pkg, index) => (
        <div
          key={index}
          className={`relative bg-white rounded-lg border-2 p-8 ${
            pkg.popular ? "border-primary shadow-lg scale-105" : "border-gray-200 shadow-sm"
          }`}
        >
          {pkg.popular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                <Star className="h-4 w-4 mr-1" />
                Most Popular
              </div>
            </div>
          )}

          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-1">{pkg.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{pkg.subtitle}</p>

            {showDuration && pkg.duration && (
              <div className="flex items-center justify-center gap-2 mb-3">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">{pkg.duration}</span>
              </div>
            )}

            {pkg.price && <div className="text-3xl font-bold text-primary mb-2">{pkg.price}</div>}

            <p className="text-sm text-gray-600">{pkg.description}</p>
          </div>

          <ul className="space-y-3 mb-8">
            {pkg.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start">
                <Check className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          {showIncluded && pkg.included && (
            <div className="text-center mb-6">
              <div className="bg-primary/10 text-primary px-3 py-2 rounded-lg text-sm font-medium">{pkg.included}</div>
            </div>
          )}

          {pkg.cta && (
            <Button
              className={`w-full ${pkg.popular ? "bg-primary hover:bg-primary/90" : ""}`}
              variant={pkg.popular ? "default" : "outline"}
            >
              {pkg.cta}
            </Button>
          )}
        </div>
      ))}
    </div>
  )
}
