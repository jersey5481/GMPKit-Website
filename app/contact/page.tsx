import PageLayout from "@/components/layout/PageLayout"
import Section from "@/components/ui/Section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { generateMetadata as generateSEOMetadata, seoConfigs } from "@/lib/seo"
import type { Metadata } from "next"
import ContactInfo from "@/components/shared/ContactInfo"

export const metadata: Metadata = generateSEOMetadata(seoConfigs.contact)

export default function ContactPage() {
  return (
    <PageLayout currentPage="contact">
      <Section background="gray" padding="xl" className="text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Ready to Transform Your Batch Operations?</h1>
          <p className="text-lg text-gray-600">
            Experience how our ISPE/GAMP5-commissioned BatchTrak™ platform helps biopharma manufacturers streamline
            batch operations in line with industry standards. Schedule a personalized demo or get answers to your
            questions.
          </p>
        </div>
      </Section>

      <Section background="white" padding="xl">
        <div className="max-w-4xl mx-auto">
          {/* Contact Form */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
            <form className="space-y-6 bg-gray-50 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" placeholder="Doe" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" placeholder="john.doe@company.com" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Company *</Label>
                  <Input id="company" placeholder="Your Company Name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Title/Job Role</Label>
                  <Input id="jobTitle" placeholder="Operations Manager, QA Director, etc." />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="interest">What are you interested in?</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your primary interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="demo">BatchTrak™ Demo</SelectItem>
                    <SelectItem value="standard">Standard Package</SelectItem>
                    <SelectItem value="advanced">Advanced Package</SelectItem>
                    <SelectItem value="enterprise">Enterprise Package</SelectItem>
                    <SelectItem value="implementation">Implementation Services</SelectItem>
                    <SelectItem value="training">Training Programs</SelectItem>
                    <SelectItem value="general">General Information</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Tell us about your challenges *</Label>
                <Textarea
                  id="message"
                  placeholder="What batch operations challenges are you facing? What would success look like for your team?"
                  className="min-h-[120px]"
                  required
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button type="submit" className="flex-1 text-white">
                  Contact Us
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-center">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ContactInfo />

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">What to Expect</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Initial response within 24 hours</li>
                  <li>• Discovery call to understand your needs</li>
                  <li>• Personalized BatchTrak™ demonstration</li>
                  <li>• Custom proposal with clear next steps</li>
                  <li>• Implementation timeline and support plan</li>
                </ul>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <h4 className="font-medium mb-2">Typical Demo Includes:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Real-time batch tracking walkthrough</li>
                    <li>• Role-based dashboard examples</li>
                    <li>• Integration capabilities overview</li>
                    <li>• Implementation timeline discussion</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  )
}
