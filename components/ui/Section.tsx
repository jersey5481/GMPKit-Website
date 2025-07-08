import type React from "react"
interface SectionProps {
  children: React.ReactNode
  background?: "white" | "gray" | "primary"
  padding?: "sm" | "md" | "lg" | "xl"
  className?: string
  id?: string
}

import { cn } from "@/lib/utils"

const backgroundClasses = {
  white: "bg-white",
  gray: "bg-gray-100",
  primary: "bg-primary",
}

const paddingClasses = {
  sm: "py-4",
  md: "py-8",
  lg: "py-12",
  xl: "py-16",
}

export default function Section({
  children,
  background = "white",
  padding = "lg",
  className = "",
  id,
  ...props
}: SectionProps) {
  return (
    <section className={cn(backgroundClasses[background], paddingClasses[padding], className)} id={id} {...props}>
      {children}
    </section>
  )
}
