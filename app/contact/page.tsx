"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import PageLayout from "@/components/layout/PageLayout"
import Section from "@/components/ui/Section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ContactInfo from "@/components/shared/ContactInfo"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Form validation schema
const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company name is required"),
  jobTitle: z.string().optional(),
  phone: z.string().optional(),
  interest: z.string().optional(),
  message: z.string().min(10, "Please provide more details about your challenges")
})

type FormData = z.infer<typeof formSchema>

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean
    message?: string
  }>({})
  const { executeRecaptcha } = useGoogleReCaptcha()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      jobTitle: "",
      phone: "",
      interest: "",
      message: ""
    }
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus({})
    
    try {
      // Make sure reCAPTCHA is available
      if (!executeRecaptcha) {
        throw new Error("reCAPTCHA has not been loaded")
      }

      // Execute reCAPTCHA and get token
      const recaptchaToken = await executeRecaptcha('contact_form')
      
      // Send form data with reCAPTCHA token
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          recaptchaToken
        }),
      })

      const result = await response.json()
      
      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: result.message || "Thank you for your message. We will be in touch shortly."
        })
        reset() // Clear the form on success
      } else {
        setSubmitStatus({
          success: false,
          message: result.message || "An error occurred. Please try again."
        })
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus({
        success: false,
        message: "An error occurred. Please try again."
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSelectChange = (value: string) => {
    setValue("interest", value)
  }
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
            
            {submitStatus.success && (
              <Alert className="mb-6 bg-green-50 border-green-200">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-green-800">Success</AlertTitle>
                <AlertDescription className="text-green-700">
                  {submitStatus.message}
                </AlertDescription>
              </Alert>
            )}
            
            {submitStatus.success === false && (
              <Alert className="mb-6 bg-red-50 border-red-200">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <AlertTitle className="text-red-800">Error</AlertTitle>
                <AlertDescription className="text-red-700">
                  {submitStatus.message}
                </AlertDescription>
              </Alert>
            )}
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-gray-50 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className={errors.firstName ? "text-red-500" : ""}>First Name *</Label>
                  <Input 
                    id="firstName" 
                    placeholder="John" 
                    {...register("firstName")} 
                    className={errors.firstName ? "border-red-500" : ""}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className={errors.lastName ? "text-red-500" : ""}>Last Name *</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Doe" 
                    {...register("lastName")} 
                    className={errors.lastName ? "border-red-500" : ""}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className={errors.email ? "text-red-500" : ""}>Email Address *</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john.doe@company.com" 
                  {...register("email")} 
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company" className={errors.company ? "text-red-500" : ""}>Company *</Label>
                  <Input 
                    id="company" 
                    placeholder="Your Company Name" 
                    {...register("company")} 
                    className={errors.company ? "border-red-500" : ""}
                  />
                  {errors.company && (
                    <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Title/Job Role</Label>
                  <Input 
                    id="jobTitle" 
                    placeholder="Operations Manager, QA Director, etc." 
                    {...register("jobTitle")} 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="+1 (555) 123-4567" 
                  {...register("phone")} 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="interest">What are you interested in?</Label>
                <Select onValueChange={handleSelectChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your primary interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="demo">BatchTrak™ Demo</SelectItem>
                    <SelectItem value="operational-transformation">BatchTrak™ Operational Transformation</SelectItem>
                    <SelectItem value="lean-coaching">LEAN Leader Coaching Program</SelectItem>
                    <SelectItem value="onsite-implementation">On-Site Implementation</SelectItem>
                    <SelectItem value="advanced-integrations">Advanced Integrations</SelectItem>
                    <SelectItem value="multi-site">Multi-Site Coordination</SelectItem>
                    <SelectItem value="success-manager">Dedicated Success Manager</SelectItem>
                    <SelectItem value="ai-intelligence">AI Intelligence Layer</SelectItem>
                    <SelectItem value="general">General Information</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className={errors.message ? "text-red-500" : ""}>Tell us about your challenges *</Label>
                <Textarea
                  id="message"
                  placeholder="What batch operations challenges are you facing? What would success look like for your team?"
                  className={`min-h-[120px] ${errors.message ? "border-red-500" : ""}`}
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  type="submit" 
                  className="flex-1 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Contact Us"}
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
