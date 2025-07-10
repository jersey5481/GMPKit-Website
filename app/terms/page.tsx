import PageLayout from "@/components/layout/PageLayout"
import Section from "@/components/ui/Section"

export default function TermsPage() {
  return (
    <PageLayout>
      <Section background="white" padding="xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">Terms and Conditions</h1>
            <p className="text-lg text-primary font-semibold">BatchTrak™</p>
            <p className="text-gray-600 mt-4">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            {/* Agreement to Terms */}
            <section id="agreement">
              <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms of Use constitute a legally binding agreement made between you, whether personally or on
                behalf of an entity ("you") and GMPKit, LLC. ("Company", "we", "us", or "our"), concerning your access
                to and use of the https://www.batchtrak.com and/or www.gmpkit.com websites as well as any other media
                form, media channel, mobile website or mobile application related, linked, or otherwise connected
                thereto (collectively, the "Site").
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these
                Terms of Use.{" "}
                <strong>
                  IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE
                  SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                </strong>
              </p>
              <p className="text-gray-700 leading-relaxed">
                The Site is intended for users who are at least 18 years old. Persons under the age of 18 are not
                permitted to use or register for the Site.
              </p>
            </section>

            {/* Intellectual Property Rights */}
            <section id="intellectual-property">
              <h2 className="text-2xl font-bold mb-4">Intellectual Property Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases,
                functionality, software, website designs, audio, video, text, photographs, and graphics on the Site
                (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the
                "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark
                laws and various other intellectual property rights and unfair competition laws of the United States,
                international copyright laws, and international conventions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Provided that you are eligible to use the Site, you are granted a limited license to access and use the
                Site and to download or print a copy of any portion of the Content to which you have properly gained
                access solely for your personal and/or corporate (i.e., employee of a company with a BatchTrak™
                subscription/license), non-commercial use.
              </p>
            </section>

            {/* User Registration */}
            <section id="user-registration">
              <h2 className="text-2xl font-bold mb-4">User Registration</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Access to this system may require the creation of a user account. Users are responsible for maintaining
                the confidentiality of their login credentials and ensuring that access is limited to authorized
                individuals only. All activity performed under a user's credentials will be attributed to the assigned
                user and must comply with applicable company policies and standards.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The Company reserves the right, in its sole discretion, to revoke, reassign, or modify any username or
                account access if deemed necessary for security, operational integrity, or compliance with corporate
                policies.
              </p>
            </section>

            {/* Fees and Payment */}
            <section id="fees-payment">
              <h2 className="text-2xl font-bold mb-4">Fees and Payment</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You will be required to purchase or pay a fee to access our services. You agree to provide current,
                complete, and accurate purchase and account information for all purchases made via the Site. Sales tax
                will be added to the price of purchases as deemed required by us. We may change prices at any time. All
                payments shall be in U.S. dollars.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If your purchase is subject to recurring charges, then you consent to our charging your payment method
                on a recurring basis without requiring your prior approval for each recurring charge, until you notify
                us of your cancellation.
              </p>
            </section>

            {/* Payment Failure Policy */}
            <section id="payment-failure">
              <h2 className="text-2xl font-bold mb-4">Payment Failure and Instance Termination Policy</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>
                    Failure to complete payment for your GMPKit BatchTrak™ subscription will result in the automatic
                    termination of your BatchTrak™ Instance.
                  </strong>
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Upon the first failed payment attempt, access to your Instance and its contents will be suspended.
                During this suspension period, GMPKit will make multiple payment collection attempts using the
                designated payment method on file. These attempts will occur over a 7-day grace period, during which you
                will receive email notifications at the email address associated with your account regarding the failed
                payment attempts.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If no successful payment is received by the end of the 7-day period, your BatchTrak™ Instance will be
                permanently terminated. Termination will result in irreversible loss of all data and content, including
                any live API endpoints associated with your Instance.
              </p>
            </section>

            {/* Cancellation */}
            <section id="cancellation">
              <h2 className="text-2xl font-bold mb-4">Cancellation</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All purchases are non-refundable. You can cancel your subscription at any time by logging into your
                account. Your cancellation will take effect at the end of the current paid term.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you are unsatisfied with our services, please email us at support@gmpkit.com.
              </p>
            </section>

            {/* Exit Plan */}
            <section id="exit-plan">
              <h2 className="text-2xl font-bold mb-4">Exit Plan</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If GMPKit, LLC is no longer solvent/operating during the term of any active paid subscription, it will
                grant a perpetual license to the owner of each active subscription. This license will be free of charge
                and remove any support and hosting obligations.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Additional instructions will be provided as to how to set up BatchTrak™ in each customer's own cloud
                environment and migrate their data. This does not apply to any customers who have custom terms set forth
                in their enterprise agreements.
              </p>
            </section>

            {/* Acquisition Clause */}
            <section id="acquisition">
              <h2 className="text-2xl font-bold mb-4">Acquisition Clause</h2>
              <p className="text-gray-700 leading-relaxed">
                In the event that GMPKit, LLC is acquired by another company during the term of any active paid
                subscription, we commit to ensuring that the software will not be modified in any way that restricts or
                limits the functionality of the product as it existed at the time of acquisition. We will maintain the
                same level of service and feature availability for the duration of the active subscription term.
              </p>
            </section>

            {/* Acceptable Use Policy */}
            <section id="acceptable-use">
              <h2 className="text-2xl font-bold mb-4">Acceptable Use Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may not access or use the Site for any purpose other than that for which we make the Site available.
                As a user of the Site, you agree to not conduct the following prohibited activities:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>
                  Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users
                  by electronic or other means
                </li>
                <li>Circumvent, disable, or otherwise interfere with security-related features of the Site</li>
                <li>
                  Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account
                  information
                </li>
                <li>
                  Use the Site as part of any effort to compete with us or otherwise use the Site for any
                  revenue-generating endeavor
                </li>
                <li>Decipher, decompile, disassemble, or reverse engineer any of the software comprising the Site</li>
                <li>Upload or transmit viruses, Trojan horses, or other harmful material</li>
                <li>Use the Site in a manner inconsistent with any applicable laws or regulations</li>
                <li>Violate any privacy laws, including the GDPR or equivalent local regulations</li>
              </ul>
            </section>

            {/* Term and Termination */}
            <section id="termination">
              <h2 className="text-2xl font-bold mb-4">Term and Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms of Use shall remain in full force and effect while you access or use the Site.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>
                  WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE, WE RESERVE THE RIGHT, IN OUR SOLE
                  DISCRETION AND WITHOUT PRIOR NOTICE OR LIABILITY, TO DENY ACCESS TO AND USE OF THE SITE TO ANY
                  INDIVIDUAL OR ENTITY FOR ANY REASON OR NO REASON.
                </strong>
              </p>
              <p className="text-gray-700 leading-relaxed">
                If your account is terminated or suspended for any reason, you are strictly prohibited from creating a
                new account—whether under your own name, a fictitious name, a borrowed identity, or on behalf of any
                third party.
              </p>
            </section>

            {/* Governing Law */}
            <section id="governing-law">
              <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Use and your use of the Site are governed by and construed in accordance with the laws of
                the State of Washington applicable to agreements made and to be entirely performed within the State of
                Washington, without regard to its conflict of law principles.
              </p>
            </section>

            {/* Dispute Resolution */}
            <section id="dispute-resolution">
              <h2 className="text-2xl font-bold mb-4">Dispute Resolution</h2>
              <h3 className="text-xl font-semibold mb-3">Informal Negotiations</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                To expedite resolution and control the cost of any dispute, the Parties agree to first attempt to
                negotiate any Dispute informally for at least thirty (30) days before initiating arbitration.
              </p>

              <h3 className="text-xl font-semibold mb-3">Binding Arbitration</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If the Parties are unable to resolve a Dispute through informal negotiations, the Dispute shall be
                exclusively resolved through binding arbitration.{" "}
                <strong>
                  YOU UNDERSTAND THAT WITHOUT THIS PROVISION, YOU WOULD HAVE THE RIGHT TO FILE A LAWSUIT IN COURT AND
                  HAVE A JURY TRIAL.
                </strong>
              </p>
              <p className="text-gray-700 leading-relaxed">
                The arbitration shall be administered by the American Arbitration Association ("AAA") in accordance with
                its Commercial Arbitration Rules. Except where otherwise required by AAA rules or applicable law, the
                arbitration shall take place in the State of Washington, United States.
              </p>
            </section>

            {/* Disclaimer */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <p className="text-gray-700 leading-relaxed">
                  <strong>
                    THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. TO THE FULLEST EXTENT PERMITTED BY LAW, WE
                    DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF.
                  </strong>
                </p>
              </div>
            </section>

            {/* Limitations of Liability */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Limitations of Liability</h2>
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <p className="text-gray-700 leading-relaxed">
                  <strong>
                    IN NO EVENT WILL WE BE LIABLE FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL,
                    SPECIAL, OR PUNITIVE DAMAGES. OUR LIABILITY TO YOU WILL AT ALL TIMES BE LIMITED TO THE LESSER OF THE
                    AMOUNT PAID BY YOU TO US DURING THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING OR
                    $600.00 USD.
                  </strong>
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section id="contact">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In order to resolve a complaint regarding the Site or to receive further information regarding use of
                the Site, please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  <strong>GMPKit, LLC.</strong>
                  <br />
                  14571 N Kelsey St
                  <br />
                  STE 105, PMB 146
                  <br />
                  Monroe WA 98272
                  <br />
                  United States
                  <br />
                  <br />

                  <strong>Email:</strong>{" "}
                  <a href="mailto:support@gmpkit.com" className="text-primary hover:underline">
                    support@gmpkit.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </Section>
    </PageLayout>
  )
}
