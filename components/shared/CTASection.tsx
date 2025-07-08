"use client"

import Link from "next/link"
import Section from "@/components/ui/Section"
import { Button } from "@/components/ui/button"

type ButtonLike = { text: string; href: string; onClick?: never } | { text: string; onClick: () => void; href?: never }

interface CTASectionProps {
  title: string
  description: string
  primaryButton: ButtonLike
  secondaryButton?: ButtonLike
  background?: "white" | "gray" | "primary"
}

function renderButton({ text, href, onClick }: ButtonLike, variant: "default" | "outline") {
  // If an href is supplied, render a <Link> inside the shadcn/ui <Button>
  if (href) {
    return (
      <Button asChild size="lg" variant={variant}>
        <Link href={href}>{text}</Link>
      </Button>
    )
  }

  // Otherwise render a normal button that executes an onClick handler
  return (
    <Button size="lg" variant={variant} onClick={onClick}>
      {text}
    </Button>
  )
}

export default function CTASection({
  title,
  description,
  primaryButton,
  secondaryButton,
  background = "white",
}: CTASectionProps) {
  return (
    <Section background={background} padding="xl">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="text-xl text-gray-600">{description}</p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Primary */}
          {renderButton(primaryButton, "default")}

          {/* Secondary (optional) */}
          {secondaryButton && renderButton(secondaryButton, "outline")}
        </div>
      </div>
    </Section>
  )
}
