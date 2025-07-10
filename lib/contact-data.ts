import { MessageCircle, Mail } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface ContactOption {
  id: string
  icon: LucideIcon
  title: string
  description: string
  buttonText: string
  href?: string
  onClick?: () => void
}

export const contactOptions: ContactOption[] = [
  {
    id: "email",
    icon: Mail,
    title: "Email Support",
    description: "Send us your detailed questions",
    buttonText: "Send Email",
    href: "mailto:support@gmpkit.com",
  },
]
