import { CheckCircle } from "lucide-react"

interface BenefitItemProps {
  text: string
}

export default function BenefitItem({ text }: BenefitItemProps) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
      <span className="text-lg">{text}</span>
    </li>
  )
}
