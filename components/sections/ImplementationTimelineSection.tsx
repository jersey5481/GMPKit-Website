import TimelineSection from "@/components/shared/TimelineSection"
import { IMPLEMENTATION_TIMELINE } from "@/lib/shared-data"
import { Calendar, Users, Settings, Rocket } from "lucide-react"

const timelineWithIcons = IMPLEMENTATION_TIMELINE.map((step, index) => ({
  ...step,
  icon: [Calendar, Settings, Users, Rocket][index],
}))

export default function ImplementationTimelineSection() {
  return (
    <>
      <TimelineSection
        title="Configured in 30 Days"
        description="Our proven implementation process gets you from kickoff to full deployment in just one month."
        steps={timelineWithIcons}
        background="gray"
      />

      <div className="text-center mt-12">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 inline-block">
          <h3 className="text-lg font-bold mb-2">Implementation includes:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
            <div>✓ Dedicated project manager</div>
            <div>✓ Custom configuration</div>
            <div>✓ Comprehensive training</div>
          </div>
        </div>
      </div>
    </>
  )
}
