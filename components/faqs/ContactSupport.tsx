"use client"

import { Button } from "@/components/ui/button"
import ContactCard from "@/components/ui/ContactCard"
import { contactOptions } from "@/lib/contact-data"

interface ContactSupportProps {
  title?: string
  description?: string
  showCTAButtons?: boolean
  className?: string
}

export default function ContactSupport({
  title = "Still Have Questions?",
  description = "Can't find what you're looking for? Our team is here to help you get the answers you need.",
  showCTAButtons = true,
  className = "",
}: ContactSupportProps) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-xl text-gray-600 mb-8">{description}</p>

      <div className="grid grid-cols-1 gap-6 mb-8 max-w-md mx-auto">
        {contactOptions.map((option) => (
          <ContactCard
            key={option.id}
            icon={option.icon}
            title={option.title}
            description={option.description}
            buttonText={option.buttonText}
            href={option.href}
            onClick={option.onClick}
          />
        ))}
      </div>


    </div>
  )
}
