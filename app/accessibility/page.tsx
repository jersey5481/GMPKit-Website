import PageLayout from "@/components/layout/PageLayout"
import Section from "@/components/ui/Section"

export default function AccessibilityPage() {
  return (
    <PageLayout>
      <Section background="white" padding="xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">Accessibility Statement</h1>
            <p className="text-lg text-primary font-semibold">GMPKit, LLC</p>
            <p className="text-gray-600 mt-4">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            {/* Commitment to Accessibility */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Our Commitment to Accessibility</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                GMPKit, LLC is committed to ensuring that our website and BatchTrak™ platform are accessible to all
                users, including those with disabilities. We strive to provide an inclusive digital experience that
                allows everyone to access our services and information effectively.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We are continuously working to improve the accessibility of our digital platforms and ensure compliance
                with applicable accessibility standards and guidelines.
              </p>
            </section>

            {/* Accessibility Standards */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Accessibility Standards</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards published by
                the World Wide Web Consortium (W3C). These guidelines help make web content more accessible to people
                with a wide range of disabilities, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Visual impairments (blindness, low vision, color blindness)</li>
                <li>Hearing impairments (deafness, hearing loss)</li>
                <li>Motor impairments (difficulty using a mouse, slow response time)</li>
                <li>Cognitive impairments (learning disabilities, distractibility, memory issues)</li>
              </ul>
            </section>

            {/* Current Accessibility Features */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Current Accessibility Features</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website and platform currently include the following accessibility features:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Semantic HTML structure for screen reader compatibility</li>
                <li>Keyboard navigation support throughout the interface</li>
                <li>Alternative text for images and graphics</li>
                <li>Sufficient color contrast ratios for text readability</li>
                <li>Responsive design that works across different devices and screen sizes</li>
                <li>Clear and consistent navigation structure</li>
                <li>Form labels and instructions for user input fields</li>
              </ul>
            </section>

            {/* Ongoing Improvements */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Ongoing Improvements</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are actively working to enhance the accessibility of our platforms. Our ongoing efforts include:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Regular accessibility audits and testing with assistive technologies</li>
                <li>User testing with individuals who have disabilities</li>
                <li>Training our development team on accessibility best practices</li>
                <li>Implementing accessibility considerations in our design and development processes</li>
                <li>Staying current with evolving accessibility standards and guidelines</li>
              </ul>
            </section>

            {/* Assistive Technologies */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Assistive Technologies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website and platform are designed to be compatible with common assistive technologies, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Screen readers (JAWS, NVDA, VoiceOver, TalkBack)</li>
                <li>Voice recognition software</li>
                <li>Keyboard-only navigation</li>
                <li>Screen magnification software</li>
                <li>Alternative input devices</li>
              </ul>
            </section>

            {/* Known Limitations */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Known Limitations</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While we strive for full accessibility, we acknowledge that some areas of our platform may not yet meet
                all accessibility standards. We are actively working to address these limitations:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Some complex data visualizations may have limited screen reader support</li>
                <li>Certain third-party integrations may not fully conform to accessibility standards</li>
                <li>Some legacy features are being updated to meet current accessibility guidelines</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                We are committed to addressing these limitations in future updates and releases.
              </p>
            </section>

            {/* Feedback and Support */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Feedback and Support</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We welcome feedback about the accessibility of our website and platform. If you encounter any
                accessibility barriers or have suggestions for improvement, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <p className="text-gray-700">
                  <strong>Accessibility Coordinator</strong>
                  <br />
                  <strong>Email:</strong>{" "}
                  <a href="mailto:support@gmpkit.com" className="text-primary hover:underline">
                    support@gmpkit.com
                  </a>
                  <br />
                  <strong>Mail:</strong>
                  <br />
                  GMPKit, LLC
                  <br />
                  14571 N Kelsey St, STE 105, PMB 146
                  <br />
                  Monroe WA 98272
                  <br />
                  United States
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                When contacting us about accessibility issues, please provide as much detail as possible, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>The specific page or feature you were trying to access</li>
                <li>The assistive technology you were using (if applicable)</li>
                <li>A description of the problem you encountered</li>
                <li>Your contact information for follow-up</li>
              </ul>
            </section>

            {/* Alternative Access */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Alternative Access Methods</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you are unable to access certain content or features on our website due to accessibility barriers, we
                are committed to providing alternative access methods. These may include:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Alternative formats for documents and content</li>
                <li>Phone or email support for completing online tasks</li>
                <li>Personalized assistance for accessing our services</li>
                <li>Alternative communication methods for customer support</li>
              </ul>
            </section>

            {/* Third-Party Content */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Third-Party Content</h2>
              <p className="text-gray-700 leading-relaxed">
                Some content on our website may be provided by third-party services or vendors. While we strive to
                ensure that all content meets our accessibility standards, we may not have direct control over the
                accessibility of third-party content. We work with our vendors to encourage accessibility compliance and
                will provide alternative access methods when possible.
              </p>
            </section>

            {/* Updates to This Statement */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Updates to This Statement</h2>
              <p className="text-gray-700 leading-relaxed">
                This accessibility statement will be updated regularly to reflect our ongoing efforts to improve
                accessibility. We will post updates to this page and indicate the date of the most recent revision at
                the top of this statement.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </PageLayout>
  )
}
