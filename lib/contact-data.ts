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
    id: "contact",
    icon: MessageCircle,
    title: "Contact Us",
    description: "Get in touch with our team",
    buttonText: "Contact Us",
    href: "/contact",
  },
]
