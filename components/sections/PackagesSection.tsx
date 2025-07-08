"use client"

import { useState } from "react"
import Section from "@/components/ui/Section"
import { Button } from "@/components/ui/button"
import PackageGrid from "@/components/shared/PackageGrid"
import PackageComparisonModal from "@/components/ui/PackageComparisonModal"
import { BATCHTRAK_PACKAGES } from "@/lib/shared-data"

export default function PackagesSection() {
  const [isComparisonModalOpen, setIsComparisonModalOpen] = useState(false)

  return (
    <Section background="white" padding="xl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Transformation Level</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            From getting off spreadsheets to building a command center for multi-site operations. Each tier includes the
            platform, methodology, and support to ensure your success—not just software implementation.
          </p>
        </div>

        <PackageGrid packages={BATCHTRAK_PACKAGES} />

        <div className="text-center mt-12">
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Every Tier Includes Transformation Support</h3>
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

          <Button variant="outline" size="lg" onClick={() => setIsComparisonModalOpen(true)}>
            Compare All Features & Services
          </Button>
        </div>
      </div>

      <PackageComparisonModal isOpen={isComparisonModalOpen} onClose={() => setIsComparisonModalOpen(false)} />
    </Section>
  )
}
