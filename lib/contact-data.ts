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
    id: "chat",
    icon: MessageCircle,
    title: "Live Chat",
    description: "Get instant answers from our support team",
    buttonText: "Start Chat",
    onClick: () => {
      // Add your chat widget logic here
      console.log("Starting chat...")
    },
  },
  {
    id: "email",
    icon: Mail,
    title: "Email Support",
    description: "Send us your detailed questions",
    buttonText: "Send Email",
    href: "mailto:support@gmpkit.com",
  },
]
