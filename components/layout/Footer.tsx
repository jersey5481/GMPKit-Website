import Link from "next/link"
import { COMPANY_INFO, NAVIGATION_LINKS, CONTACT_METHODS } from "@/lib/constants"
import { Linkedin } from "lucide-react"

const footerSections = [
  {
    title: "Products",
    links: [
      { href: "/batchtrak", label: "BatchTrak™" },
      { href: "/consulting", label: "Consulting" },
      { href: "/training", label: "Training" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/faqs", label: "FAQs" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/terms", label: "Terms & Conditions" },
      { href: "/privacy", label: "Privacy Notice" },
      { href: "/accessibility", label: "Accessibility" },
    ],
  },
  {
    title: "Contact",
    links: [
      // Replace the phone and email links with:
      ...CONTACT_METHODS.map((method) => ({
        href: method.href,
        label: `${method.label}: ${method.value}`,
      })),
    ],
    address: [
      COMPANY_INFO.address.street,
      COMPANY_INFO.address.suite,
      `${COMPANY_INFO.address.city} ${COMPANY_INFO.address.state} ${COMPANY_INFO.address.zip}`,
      COMPANY_INFO.address.country,
    ],
  },
]

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background" id="contact">
      <div className="container flex flex-col gap-6 py-8 md:py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">{COMPANY_INFO.name}</h3>
            <p className="text-sm text-gray-500">{COMPANY_INFO.tagline}</p>
            <p className="text-xs text-gray-400 mt-2">
              *Commissioning documentation supports customer validation efforts but does not replace customer validation
              requirements.
            </p>

            {/* Social Media Links */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/gmpkit/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors"
                aria-label="Follow GMPKit on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="space-y-2">
              <h3 className="text-sm font-medium">{section.title}</h3>
              <ul className="space-y-1">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              {section.address && (
                <div className="mt-3 pt-2 border-t border-gray-200">
                  {section.address.map((line, index) => (
                    <p key={index} className="text-sm text-gray-500">
                      {line}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t pt-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <nav className="flex gap-4">
            {NAVIGATION_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-xs hover:underline">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
