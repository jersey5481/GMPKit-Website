import type React from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  background?: "white" | "gray" | "primary"
  padding?: "sm" | "md" | "lg" | "xl"
  className?: string
  id?: string
}

const backgroundClasses = {
  white: "bg-white",
  gray: "bg-gray-50",
  primary: "bg-primary text-primary-foreground",
}

const paddingClasses = {
  sm: "py-4",
  md: "py-8",
  lg: "py-12",
  xl: "py-16",
}

export default function Section({ children, background = "white", padding = "lg", className = "", id }: SectionProps) {
  return (
    <section className={cn(backgroundClasses[background], paddingClasses[padding], className)} id={id}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  )
}
