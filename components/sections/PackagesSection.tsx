"use client"
import Section from "@/components/ui/Section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Plus, Star } from "lucide-react"
import Link from "next/link"

const CORE_OFFERING = {
  title: "BatchTrak™ Operational Transformation",
  subtitle: "Complete foundation for operational excellence",
  description: "Everything you need to transform from manual tracking to intelligent operations",
  coreFeatures: [
    "Value Stream Diagnostic Assessment",
    "BatchTrak™ platform configuration tailored to your workflows",
    "Role-based training for all users (production, QA, management)",
    "KPI tracking and results measurement dashboards",
    "30-day implementation with remote go-live support",
    "Foundation-level ongoing support and optimization guidance",
  ],
}

const UPGRADE_OPTIONS = [
  {
    name: "LEAN Leader Coaching Program",
    description: "90-day optimization with weekly coaching check-ins",
    icon: "📈",
  },
  {
    name: "On-Site Implementation",
    description: "Strategic assessment and hands-on setup at your facility",
    icon: "🏭",
  },
  {
    name: "Advanced Integrations",
    description: "Connect with ERP, MES, QMS, LIMS, and other systems",
    icon: "🔗",
  },
  {
    name: "Multi-Site Coordination",
    description: "Centralized command center for multiple locations",
    icon: "🌐",
  },
  {
    name: "Dedicated Success Manager",
    description: "12-month partnership with quarterly executive reviews",
    icon: "👥",
  },
  {
    name: "AI Intelligence Layer",
    description: "MCP Agent for early signal detection and cross-site intelligence",
    icon: "🤖",
  },
]

export default function PackagesSection() {
  return (
    <Section background="white" padding="xl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Transform Your Operations</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Start with our comprehensive foundation, then add the upgrades that match your operational goals and
            organizational maturity.
          </p>
        </div>

        {/* Main Offering Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-2 border-blue-200 shadow-lg">
            <CardHeader className="text-center pb-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="h-6 w-6 text-blue-600" />
                <CardTitle className="text-3xl font-bold text-gray-900">{CORE_OFFERING.title}</CardTitle>
                <Star className="h-6 w-6 text-blue-600" />
              </div>
              <CardDescription className="text-lg text-gray-600 mb-2">{CORE_OFFERING.subtitle}</CardDescription>
              <p className="text-gray-700">{CORE_OFFERING.description}</p>
            </CardHeader>

            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Foundation (Included for Everyone):</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {CORE_OFFERING.coreFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Available Upgrades:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {UPGRADE_OPTIONS.map((upgrade, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
                    >
                      <div className="text-2xl">{upgrade.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Plus className="h-4 w-4 text-blue-600" />
                          <h4 className="font-semibold text-gray-900">{upgrade.name}</h4>
                        </div>
                        <p className="text-sm text-gray-600">{upgrade.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center pt-6 border-t">
                <Link href="/contact">
                  <Button size="lg" className="px-8">
                    Discover Your Path Forward
                  </Button>
                </Link>
                <p className="text-sm text-gray-500 mt-2">We'll help you choose the right combination for your needs</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Supporting Information */}
        <div className="text-center">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Every Implementation Includes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2">Platform + Process</h4>
                <p className="text-sm text-gray-600">
                  BatchTrak™ software configured to your workflows with LEAN principles embedded
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Implementation Expertise</h4>
                <p className="text-sm text-gray-600">
                  Strategic guidance from operations veterans who ensure adoption and results
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Ongoing Partnership</h4>
                <p className="text-sm text-gray-600">
                  Coaching and optimization support to build internal capabilities and drive continuous improvement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
