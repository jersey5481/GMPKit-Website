"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQ {
  id: string
  question: string
  answer: string
}

interface FAQAccordionProps {
  faqs: FAQ[]
  className?: string
}

export default function FAQAccordion({ faqs, className = "" }: FAQAccordionProps) {
  return (
    <Accordion type="single" collapsible className={`space-y-4 ${className}`}>
      {faqs.map((faq) => (
        <AccordionItem key={faq.id} value={faq.id} className="border border-gray-200 rounded-lg px-6 py-2 bg-gray-50">
          <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-4">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-gray-700 leading-relaxed pb-4">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
