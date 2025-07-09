"use client"

import { useState } from "react"
import Section from "@/components/ui/Section"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import { ROLE_BASED_CONTENT } from "@/lib/shared-data"
import type { RoleData } from "@/lib/shared-data"

const roles: RoleData[] = ROLE_BASED_CONTENT

export default function RoleBasedSection() {
  const [expandedRole, setExpandedRole] = useState<number | null>(null)

  const toggleRole = (index: number) => {
    setExpandedRole(expandedRole === index ? null : index)
  }

  return (
    <Section background="gray" padding="xl">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Transformation Value by Role</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            GMPKit's BatchTrak™ platform delivers specific transformation outcomes for every role in your organization.
            See how our platform + methodology approach creates value across your entire team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6 cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => toggleRole(index)}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{role.title}</h3>
                    <p className="text-sm text-gray-600">{role.subtitle}</p>
                  </div>
                  {expandedRole === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </div>

              {expandedRole === index && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">What if you could...</h4>
                      <ul className="space-y-1">
                        {role.aspirations.map((aspiration, aspirationIndex) => (
                          <li key={aspirationIndex} className="text-sm text-gray-600 flex items-start">
                            <span className="text-blue-500 mr-2">?</span>
                            {aspiration}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary mb-2">Your New Reality:</h4>
                      <ul className="space-y-1">
                        {role.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="text-sm text-gray-600 flex items-start">
                            <span className="text-primary mr-2">✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Button removed to fix the error */}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
