import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

/**
 * Section
 * ----------------------------------------------------------------------------
 * A light wrapper around the native <section> element that standardises
 * vertical padding and background colour while **never** forwarding its own
 * props to the DOM.
 */

type Background = "white" | "gray" | "primary"
type Padding = "none" | "sm" | "lg" | "xl"

interface SectionProps {
  children: ReactNode
  className?: string
  background?: Background
  padding?: Padding
}

/* Tailwind helpers */
const backgroundClasses: Record<Background, string> = {
  white: "bg-white dark:bg-gray-900",
  gray: "bg-gray-50 dark:bg-gray-800",
  primary: "bg-primary text-primary-foreground dark:bg-secondary dark:text-secondary-foreground",
}

const paddingClasses: Record<Padding, string> = {
  none: "",
  sm: "py-8 md:py-12",
  lg: "py-12 md:py-16",
  xl: "py-16 md:py-24",
}

export default function Section({ children, className, background = "white", padding = "lg" }: SectionProps) {
  return (
    <section className={cn(backgroundClasses[background], paddingClasses[padding], "w-full", className)}>
      {children}
    </section>
  )
}
