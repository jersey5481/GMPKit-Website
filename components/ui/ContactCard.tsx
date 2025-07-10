"use client"

import { Button } from "@/components/ui/button"
import type { LucideIcon } from "lucide-react"

interface ContactCardProps {
  icon: LucideIcon
  title: string
  description: string
  buttonText: string
  href?: string
  onClick?: () => void
  variant?: "default" | "outline"
}

export default function ContactCard({
  icon: Icon,
  title,
  description,
  buttonText,
  href,
  onClick,
  variant = "outline",
}: ContactCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      
      {href ? (
        <Button variant={variant} size="sm" className="w-full" asChild>
          <a href={href}>{buttonText}</a>
        </Button>
      ) : (
        <Button 
          variant={variant} 
          size="sm" 
          className="w-full" 
          onClick={onClick}
        >
          {buttonText}
        </Button>
      )}
    </div>
  )
}
