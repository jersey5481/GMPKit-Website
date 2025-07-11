"use client"

import { Button } from "@/components/ui/button"
import Section from "@/components/ui/Section"
import { Play } from "lucide-react"
import { SHARED_CONTENT } from "@/lib/constants"

export default function HeroSection() {
  const scrollToExplainer = () => {
    // Add a small delay to ensure the DOM is fully rendered
    setTimeout(() => {
      try {
        // Try to find the section by ID
        const explainerSection = document.getElementById("how-it-works")
        
        if (explainerSection) {
          explainerSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
          return
        }
        
        // Fallback: try to find the section by query selector
        const howItWorksSection = document.querySelector('section[id="how-it-works"]')
        if (howItWorksSection) {
          howItWorksSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
          return
        }
        
        // If we still can't find it, scroll to approximately where it should be
        console.log("How It Works section not found, using fallback scroll")
        const sections = document.querySelectorAll('section')
        if (sections.length > 2) {
          // Try to scroll to the third section (index 2), which is likely the How It Works section
          sections[2].scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        } else {
          // Last resort fallback
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          })
        }
      } catch (error) {
        console.log("Error scrolling to How It Works section:", error)
        // Safe fallback
        window.scrollTo({
          top: window.innerHeight,
          behavior: "smooth",
        })
      }
    }, 100) // 100ms delay
  }

  return (
    <Section background="white" padding="xl" className="text-center">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Your Operational Backbone for <span className="text-primary">Batch Manufacturing</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Empowering biopharma manufacturers to increase success rates, reduce deviations, and eliminate backlogs with
          real-time batch visibility. <br />
          <strong>All in one view.</strong>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="text-white text-lg px-8 py-4" onClick={scrollToExplainer}>
            <Play className="mr-2 h-5 w-5" />
            See How It Works
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center pt-8 border-t border-gray-200 dark:border-gray-700">
          {SHARED_CONTENT.stats.map((stat, index) => (
            <div key={index}>
              <div className="text-2xl md:text-3xl font-bold text-primary dark:text-primary mb-1">{stat.number}</div>
              <p className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
