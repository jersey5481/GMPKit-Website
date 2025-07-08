"use client"
import { Button } from "@/components/ui/button"
import { X, Check, Minus } from "lucide-react"
import { BATCHTRAK_PACKAGES } from "@/lib/shared-data"

interface PackageComparisonModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function PackageComparisonModal({ isOpen, onClose }: PackageComparisonModalProps) {
  if (!isOpen) return null

  const allFeatures = [
    "Role-based dashboards and workflows with automated alerts",
    "Basic reporting and analytics",
    "Standard API integrations",
    "Value Stream Diagnostic Checklist (remote)",
    "30-day implementation with remote go-live support",
    "Foundation training for all users (self-paced)",
    "Email-based support",
    "Pre-configured role-based workflows aligned with LEAN best practices",
    "Custom reporting and advanced analytics",
    "90-day LEAN Optimization Program",
    "Weekly remote coaching checkpoints",
    "Performance and capability assessment for frontline teams",
    "Done-for-you remote configuration tailored to your site",
    "Priority support with faster response times",
    "Multi-site coordination and centralized command center deployment",
    "MCP AI Agent for early signal detection and cross-site intelligence",
    "Custom integrations (ERP, MES, QMS, LIMS)",
    "On-site strategic assessment and implementation planning",
    "Executive performance dashboards and reporting",
    "Dedicated Customer Success Manager",
    "12-month transformation roadmap with quarterly executive reviews",
  ]

  const getFeatureStatus = (packageIndex: number, feature: string) => {
    const pkg = BATCHTRAK_PACKAGES[packageIndex]

    // Check if feature is explicitly listed
    if (pkg.features.includes(feature)) {
      return "included"
    }

    // Check if "Everything in [previous package]" covers it
    if (packageIndex > 0 && pkg.features.some((f) => f.includes("Everything in"))) {
      // Check if feature exists in previous packages
      for (let i = 0; i < packageIndex; i++) {
        if (BATCHTRAK_PACKAGES[i].features.includes(feature)) {
          return "included"
        }
      }
    }

    return "not-included"
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold">Package Comparison</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="overflow-auto max-h-[calc(90vh-120px)]">
          <div className="p-6">
            {/* Package Headers */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="font-semibold text-gray-600">Features</div>
              {BATCHTRAK_PACKAGES.map((pkg, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`p-4 rounded-lg border-2 ${
                      pkg.popular ? "border-primary bg-primary/5" : "border-gray-200"
                    }`}
                  >
                    <h3 className="font-bold text-lg mb-1">{pkg.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{pkg.subtitle}</p>
                    <p className="text-sm font-medium text-primary">{pkg.price}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Comparison Table */}
            <div className="space-y-2">
              {allFeatures.map((feature, featureIndex) => (
                <div key={featureIndex} className="grid grid-cols-4 gap-4 py-3 border-b border-gray-100">
                  <div className="text-sm font-medium">{feature}</div>
                  {BATCHTRAK_PACKAGES.map((_, packageIndex) => (
                    <div key={packageIndex} className="flex justify-center">
                      {getFeatureStatus(packageIndex, feature) === "included" ? (
                        <Check className="h-5 w-5 text-green-600" />
                      ) : (
                        <Minus className="h-5 w-5 text-gray-300" />
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Implementation Timeline */}
            <div className="mt-8 grid grid-cols-4 gap-4">
              <div className="font-semibold text-gray-600">Implementation Timeline</div>
              <div className="text-center text-sm">30 days</div>
              <div className="text-center text-sm">45-60 days</div>
              <div className="text-center text-sm">60-90 days</div>
            </div>

            {/* Support Level */}
            <div className="mt-4 grid grid-cols-4 gap-4">
              <div className="font-semibold text-gray-600">Support Level</div>
              <div className="text-center text-sm">Email-based Support</div>
              <div className="text-center text-sm">Priority Support + Weekly Coaching</div>
              <div className="text-center text-sm">Dedicated Success Manager</div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 grid grid-cols-4 gap-4">
              <div></div>
              {BATCHTRAK_PACKAGES.map((pkg, index) => (
                <div key={index} className="text-center">
                  <Button
                    className={`w-full ${pkg.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    {pkg.cta}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
