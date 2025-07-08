"use client"

import { Button } from "@/components/ui/button"
import type { LucideIcon } from "lucide-react"

interface SolutionCardProps {
  icon: LucideIcon
  title: string
  description: string
  href: string
}

export default function SolutionCard({ icon: Icon, title, description, href }: SolutionCardProps) {
  return (
    <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-6">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Button variant="outline" asChild>
        <a href={href}>Learn More</a>
      </Button>
    </div>
  )
}
