import FAQAccordion from "./FAQAccordion"

interface FAQ {
  id: string
  question: string
  answer: string
}

interface FAQCategoryProps {
  title: string
  faqs: FAQ[]
  className?: string
}

export default function FAQCategory({ title, faqs, className = "" }: FAQCategoryProps) {
  if (faqs.length === 0) return null

  return (
    <div className={`mb-12 ${className}`}>
      <h2 className="text-3xl font-bold mb-6 text-primary">{title}</h2>
      <FAQAccordion faqs={faqs} />
    </div>
  )
}
