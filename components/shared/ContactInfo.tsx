// New reusable contact information component
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { COMPANY_INFO, CONTACT_METHODS } from "@/lib/constants"

interface ContactInfoProps {
  showDescription?: boolean
  showAddress?: boolean
  showHours?: boolean
  className?: string
}

export default function ContactInfo({
  showDescription = true,
  showAddress = true,
  showHours = true,
  className = "",
}: ContactInfoProps) {
  const iconMap = {
    email: Mail,
    phone: Phone,
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {CONTACT_METHODS.map((method) => {
        const IconComponent = iconMap[method.type as keyof typeof iconMap]
        return (
          <div key={method.id} className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
              <IconComponent className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">{method.label}</h3>
              <p className="text-gray-600">{method.value}</p>
              {showDescription && <p className="text-sm text-gray-500">{method.description}</p>}
            </div>
          </div>
        )
      })}

      {showAddress && (
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Location</h3>
            <div className="text-gray-600">
              <p>{COMPANY_INFO.address.street}</p>
              <p>{COMPANY_INFO.address.suite}</p>
              <p>
                {COMPANY_INFO.address.city} {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}
              </p>
              <p>{COMPANY_INFO.address.country}</p>
            </div>
            <p className="text-sm text-gray-500 mt-1">Serving clients globally</p>
          </div>
        </div>
      )}

      {showHours && (
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
            <Clock className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Response Time</h3>
            <p className="text-gray-600">Within 24 hours</p>
          </div>
        </div>
      )}
    </div>
  )
}
