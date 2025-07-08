import PageLayout from "@/components/layout/PageLayout"
import Section from "@/components/ui/Section"

export default function PrivacyPage() {
  return (
    <PageLayout>
      <Section background="white" padding="xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">Privacy Notice</h1>
            <p className="text-lg text-primary font-semibold">BatchTrak™</p>
            <p className="text-gray-600 mt-4">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            {/* Privacy Notice */}
            <section id="privacy-notice">
              <h2 className="text-2xl font-bold mb-4">Privacy Notice</h2>
              <p className="text-gray-700 leading-relaxed">
                This Privacy Notice describes the information collection, use, retention, and sharing practices of
                GMPKit, LLC. and its affiliates and subsidiaries ("GMPKit", "we", "us", "our") when you interact with us
                online through our website, www.gmpkit.com and its subdomains (e.g., batchtrak.com) (collectively, the
                "Website") or when you purchase our backend software or API (collectively, "Services").
              </p>
            </section>

            {/* Our Role in Data Processing */}
            <section id="our-role">
              <h2 className="text-2xl font-bold mb-4">Our Role in Data Processing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The entity responsible for the collection and processing of your personal information when you use the
                Website or inquire about or engage our Services is GMPKit, LLC. For the purposes of the General Data
                Protection Regulation ("GDPR") and the UK Data Protection Act 2018 ("DPA"), GMPKit, LLC is the Data
                Controller. You can contact GMPKit, LLC by emailing us at support@GMPKit.com or by mail.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you use our backend software or APIs, GMPKit, LLC is responsible for processing your personal
                information. In this capacity, and for the purposes of GDPR and the UK DPA, GMPKit, LLC acts as the Data
                Processor.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This Privacy Notice does not apply to the extent that we process personal information in the role of a
                processor or service provider on behalf of our customers, including but not limited to cases where our
                customers create their own websites and applications running on our backend software.
              </p>
            </section>

            {/* Personal Information We Collect */}
            <section id="personal-information">
              <h2 className="text-2xl font-bold mb-4">Personal information we collect and how we use it</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                GMPKit, LLC ("we," "us," or "our") collects personal information when you engage with our Website.
                Personal information includes any data that identifies, relates to, describes, is capable of being
                associated with, or could reasonably be linked, directly or indirectly, to you. As used in this Privacy
                Notice, "personal information" also includes "Personal Data" as defined under the General Data
                Protection Regulation ("GDPR") and the UK Data Protection Act 2018 ("DPA"). We retain your personal
                information for as long as necessary to fulfill the purposes for which it was collected, as outlined in
                this Privacy Notice, unless you request its deletion and no exception to your right to deletion applies.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you interact with websites or applications built using our Services, and the GDPR, Regulation (EU)
                2016/679, or the UK DPA applies to our customer, GMPKit, LLC acts as a Data Processor in relation to the
                personal data processed to provide such services. To exercise your rights under the GDPR and/or the DPA,
                you should submit your request directly to the applicable customer. We will support our customer in
                fulfilling such requests as required by law.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                When we collect or process personal information on behalf of a customer, GMPKit, LLC acts as a Service
                Provider under the California Privacy Rights Act ("CPRA") and as a Processor under EU/UK data protection
                laws and other applicable U.S. state privacy laws. We process and retain your personal information
                strictly in accordance with the data processing agreement in place with our customer and applicable
                legal requirements.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                In certain cases, GMPKit, LLC acts as a Data Processor (or Service Provider) on behalf of our business
                customers (the Data Controllers). This means we process personal information only according to their
                instructions and for the purposes they specify.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                If your personal information has been submitted to us by one of our customers, and we process that data
                on their behalf, any privacy rights requests you submit to us (such as requests to access, correct, or
                delete your information) will be forwarded to the relevant customer for review and handling. You may
                also choose to contact the customer directly, as they are responsible for managing your data under
                applicable privacy laws.
              </p>
              <p className="text-gray-700 leading-relaxed">
                GMPKit will cooperate with our customers to support the timely and lawful handling of such requests.
              </p>
            </section>

            {/* Sign Up for Our Solutions */}
            <section id="sign-up">
              <h3 className="text-xl font-semibold mb-3">Sign Up for Our Solutions</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you sign up for any of our solutions, GMPKit, LLC collects your personal identifiers (name and
                email address) and your professional or employment-related information (company name). This information
                is used to create and manage your account. If EU or UK data protection laws apply, the legal basis for
                this collection is the performance of a contract.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We share this information with our customer relationship management platform provider, lead enrichment
                provider, and event outreach provider to help manage the client relationship. The legal basis for
                sharing with the event outreach provider is your consent, while the legal basis for other processing is
                our legitimate interest in efficiently providing our services and maintaining client relationships.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you are required to sign documents related to your engagement with our services, we will share your
                information with our e-signature provider. The legal basis for this processing is our legitimate
                interest in efficiently obtaining a legally binding execution of our agreement. Additionally, this
                information may be used for internal business analytics to assess GMPKit, LLC's performance and improve
                our services.
              </p>
            </section>

            {/* Make a Payment */}
            <section id="payment">
              <h3 className="text-xl font-semibold mb-3">Make a Payment</h3>
              <p className="text-gray-700 leading-relaxed">
                When making a payment, we collect, from you or our third-party payment processor, your personal
                identifiers (name and email address) and professional or employment-related information (organization
                name). This information is used to complete the transaction. We share this data with our third-party
                payment processor. If EU or UK data protection laws apply, the legal basis for this collection is the
                performance of a contract.
              </p>
            </section>

            {/* Video or Voice Calls */}
            <section id="video-calls">
              <h3 className="text-xl font-semibold mb-3">Conduct a Video or Voice Call to Discuss Our Services</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When participating in a video call, GMPKit, LLC collects your personal identifiers (name and business
                email address), visual and auditory information (video and voice data), and any messages or notes shared
                during the call. This information is used for communication purposes, and the legal basis for processing
                is the performance of a potential future contract.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We share this information with our video conferencing provider. Additionally, with your consent, we may
                use meeting assistance and note-taking software to help document discussions. When conducting a voice
                call, we collect your personal identifiers (name and business telephone number) and any discussed
                information. This data is shared with our telephone provider for communication services.
              </p>
            </section>

            {/* Technical Support */}
            <section id="technical-support">
              <h3 className="text-xl font-semibold mb-3">Request Technical Support</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you submit a technical support request, we collect your personal identifiers (name, business email
                address, and business telephone number) and employment-related information (company name, position).
                This information is used to process and troubleshoot your support request.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We share this data with our support ticket management, chat provider, and project/task management
                provider to track, resolve, and document support requests. The legal basis for this processing under EU
                or UK data protection laws is the performance of a contract and our legitimate interest in providing
                efficient support.
              </p>
            </section>

            {/* Communication */}
            <section id="communication">
              <h3 className="text-xl font-semibold mb-3">Communicate Regarding Our Services</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you communicate with us via email, we collect your personal identifiers (name and email address)
                and employment-related information (company name), as well as any additional information you share. This
                data is used to facilitate communication regarding our services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If EU or UK data protection laws apply, the legal basis for this processing is the performance of a
                contract and our legitimate interest in maintaining efficient client communication.
              </p>
            </section>

            {/* Website Visitors */}
            <section id="website-visitors">
              <h2 className="text-2xl font-bold mb-4">For Website Visitors</h2>

              <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you contact GMPKit, LLC via our Website, we collect your personal identifiers (name),
                employment-related information (work email address), and any additional information you include in your
                message. The legal basis for this processing is the necessity to provide the requested service.
              </p>

              <h3 className="text-xl font-semibold mb-3">Interact with Our Virtual Assistant ("Chatbot")</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                With your consent, we collect your personal identifiers (name) and any other information shared with the
                chatbot. We share this data with our chatbot provider to facilitate the service. If EU or UK data
                protection laws apply, the legal basis for this processing is consent.
              </p>

              <h3 className="text-xl font-semibold mb-3">Interact with Us on Social Media</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When engaging with our social media pages (e.g., LinkedIn, X, etc), we collect engagement metrics to
                tailor content and marketing. We do not control how social networking platforms store or process
                information. Please refer to their respective privacy policies.
              </p>

              <h4 className="text-lg font-medium mb-2">Social Media Pages</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                When interacting with our pages, we may collect your personal identifiers (name, profile picture) and
                any information you provide (e.g., comments, shares, ratings). This data is used for advertising,
                events, and communication. The legal basis under EU or UK data protection laws is our legitimate
                interest in promoting our services and engaging with clients.
              </p>

              <h4 className="text-lg font-medium mb-2">Community Management</h4>
              <p className="text-gray-700 leading-relaxed">
                With third-party tools, we collect engagement data (likes, shares, comments) to analyze content
                performance and improve public relations. The legal basis is our legitimate interest in optimizing
                communication with users and the public.
              </p>
            </section>

            {/* Website Interactions and Data Tracking */}
            <section id="data-tracking">
              <h2 className="text-2xl font-bold mb-4">Website Interactions and Data Tracking</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We automatically collect information when you interact with our Website using cookies, pixels, and
                tracking technologies. This includes:
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Website Tracking & Cookies:</strong> We use essential, performance, marketing, and analytics
                cookies to track usage, enhance experience, improve services, and prevent fraudulent activity. If EU or
                UK data protection laws apply, the legal basis for strictly necessary cookies is the performance of a
                contract.
              </p>

              <h3 className="text-xl font-semibold mb-3">Third-Party Analytics and Tracking</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Analytics:</strong> We use analytics to analyze website usage.
              </p>

              <h3 className="text-xl font-semibold mb-3">Data Aggregation & Compliance</h3>
              <p className="text-gray-700 leading-relaxed">
                We aggregate and anonymize data for benchmarking and internal analytics. We do not re-identify
                de-identified data unless required for compliance with applicable laws.
              </p>
              <p className="text-gray-700 leading-relaxed">
                GMPKit, LLC will also use the personal information collected as described to comply with legal
                obligations, maintain business efficiency, and other necessary purposes outlined in our data-sharing
                policies.
              </p>
            </section>

            {/* Data Retention */}
            <section id="data-retention">
              <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Unless otherwise stated in this Privacy Notice, we retain your personal information only as long as
                necessary to fulfill the purposes for which it was collected or until we receive a valid request for its
                deletion, subject to certain exceptions. However, we may need to retain and use your personal
                information beyond these periods for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>
                  <strong>Compliance with Legal Obligations:</strong> Retaining records as required by applicable laws
                  and regulations, including for accounting, dispute resolution, and compliance with labor, tax, and
                  financial regulations.
                </li>
                <li>
                  <strong>Safety and Security Commitments:</strong> Ensuring the security of our properties, preventing
                  fraud, and protecting individuals and assets.
                </li>
                <li>
                  <strong>Legal Claims and Obligations:</strong> Retaining information as necessary to respond to legal
                  processes or enforceable governmental requests, exercise or defend legal claims, or enforce our
                  contracts, including investigating potential violations.
                </li>
              </ul>
            </section>

            {/* How we share your personal information */}
            <section id="sharing">
              <h2 className="text-2xl font-bold mb-4">How we share your personal information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                GMPKit, LLC shares personal information as described in the Personal Information We Collect, How We Use
                It, and How We Share It section and generally in the following instances:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-3 ml-4">
                <li>
                  <strong>Within GMPKit, LLC:</strong> We share your personal information within GMPKit, LLC for the
                  legitimate business purposes of efficiently and effectively providing our Services. Access to your
                  personal information is limited to individuals who require it on a need-to-know basis. To the extent
                  EU/UK data protection law applies, the legal basis for this is our legitimate interest in providing
                  the Services more efficiently.
                </li>
                <li>
                  <strong>With Service Providers:</strong> We share personal information with service providers that
                  assist us in delivering our Services. These service providers are described more specifically in the
                  Personal Information We Collect, How We Use It, and How We Share It section of this Notice. Generally,
                  we may share your personal information with third-party contractors, partners, vendors, and providers
                  we use to perform functions on our behalf for business purposes, including data hosting, support
                  ticket management, customer relationship management, technical and security support, payment
                  processing, communications, and advertising.
                </li>
                <li>
                  <strong>In the Event of a Corporate Reorganization:</strong> If GMPKit, LLC undergoes a business
                  transaction such as a reorganization, merger, acquisition, sale, joint venture, assignment,
                  consolidation, transfer, change of control, or any other disposition of all or part of our business,
                  assets, or stock, we may share personal information with relevant third parties, including prospective
                  buyers, investors, or business partners (and their advisors). In the case of bankruptcy or
                  liquidation, personal information may also be transferred as part of the proceedings. To the extent
                  EU/UK data protection law applies, the legal basis for this is our legitimate interest in conducting
                  business operations or, where required by law, obtaining consent.
                </li>
                <li>
                  <strong>For Legal Purposes:</strong> We share personal information when legally required, such as in
                  response to court orders, subpoenas, regulatory requirements, law enforcement requests, or other legal
                  processes, including those related to national security. We may also share information with our legal
                  advisors or auditors to establish, protect, or exercise our legal rights, enforce our contracts, or
                  defend against legal claims. Additionally, we may share personal information as necessary to detect,
                  investigate, prevent, or take action against illegal activities, fraud, security threats, or
                  violations of our agreements and policies. To the extent EU/UK data protection law applies, the legal
                  basis for this is compliance with legal obligations or our legitimate interest in meeting other
                  applicable legal requirements.
                </li>
                <li>
                  <strong>With Your Consent:</strong> Apart from the instances outlined above, we may request your
                  explicit permission to share your personal information for a specific purpose. In such cases, we will
                  provide notice and obtain your consent before collecting or sharing the information. You may revoke
                  your consent at any time by contacting us at support@gmpkit.com.
                </li>
              </ul>
            </section>

            {/* Data Privacy Framework */}
            <section id="data-privacy-framework">
              <h2 className="text-2xl font-bold mb-4">Data Privacy Framework</h2>

              <h3 className="text-xl font-semibold mb-3">EU-U.S. Data Privacy Framework Compliance</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                GMPKit, LLC complies with the EU-U.S. Data Privacy Framework (EU-U.S. DPF) and the UK Extension to the
                EU-U.S. DPF, as set forth by the U.S. Department of Commerce. GMPKit, LLC has certified to the U.S.
                Department of Commerce that it adheres to the EU-U.S. Data Privacy Framework Principles (EU-U.S. DPF
                Principles) regarding the processing of personal data received from the European Union and the United
                Kingdom in reliance on the EU-U.S. DPF and the UK Extension to the EU-U.S. DPF.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                If there is any conflict between the terms in this Privacy Notice and the EU-U.S. DPF Principles, the
                Principles shall govern. To learn more about the Data Privacy Framework (DPF) Program and to view our
                certification, please visit{" "}
                <a
                  href="https://www.dataprivacyframework.gov/"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.dataprivacyframework.gov/
                </a>
                .
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                With respect to onward transfers of data subject to the EU-U.S. DPF and the UK Extension to the EU-U.S.
                DPF, GMPKit, LLC remains liable for processing such transfers in accordance with these Principles.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Regarding personal data received or processed pursuant to the DPF, GMPKit, LLC is subject to the
                investigatory and enforcement powers of the U.S. Federal Trade Commission (FTC).
              </p>

              <h3 className="text-xl font-semibold mb-3">Your Rights Under the EU-U.S. DPF and UK Extension</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Individuals from the EU & UK have the right to obtain confirmation of whether we maintain personal
                information about them in the United States. Upon request, we will provide you with access to the
                personal information we hold about you. You may also correct, amend, or delete any inaccurate personal
                information.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                To request access, correction, amendment, or deletion of personal information transferred to the United
                States under the EU-U.S. DPF, please contact us at privacy@gmpkit.com.
              </p>

              <h3 className="text-xl font-semibold mb-3">Dispute Resolution and Binding Arbitration</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                In compliance with the EU-U.S. DPF and the UK Extension to the EU-U.S. DPF, GMPKit, LLC commits to
                referring unresolved complaints regarding our handling of personal data received in reliance on the
                EU-U.S. DPF and the UK Extension to the EU-U.S. DPF to JAMS, an alternative dispute resolution provider
                based in the United States.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you do not receive timely acknowledgment of your DPF Principles-related complaint from us, or if we
                have not addressed your DPF Principles-related complaint to your satisfaction, please visit{" "}
                <a
                  href="https://www.jamsadr.com/DPF-Dispute-Resolution"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.jamsadr.com/DPF-Dispute-Resolution
                </a>{" "}
                for more information or to file a complaint. The services of JAMS are provided at no cost to you.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If your dispute cannot be resolved through JAMS, under certain conditions, you may invoke binding
                arbitration for any residual claims not resolved by other redress mechanisms.
              </p>
            </section>

            {/* Do Not Track */}
            <section id="do-not-track">
              <h2 className="text-2xl font-bold mb-4">Do not track</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not respond to Do Not Track (DNT) signals or similar mechanisms. DNT is a preference you can
                enable in your web browser to indicate that you do not wish to be tracked across websites and mobile
                applications. However, because there is no uniform industry standard for recognizing and responding to
                DNT signals, our systems do not currently respond to them.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You can enable or disable Do Not Track by adjusting the settings in your web browser's Preferences or
                Settings page.
              </p>
            </section>

            {/* Information Security */}
            <section id="information-security">
              <h2 className="text-2xl font-bold mb-4">Information Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures, such as access controls and
                encryption, to protect the personal information we collect and maintain from unauthorized access,
                destruction, use, modification, or disclosure. Only authorized individuals are permitted to access
                personal information, and they are required to treat it as confidential. However, no security measure or
                method of data transmission can guarantee 100% security, and we cannot guarantee the absolute security
                of the personal information we collect from you.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our systems may contain Controlled Unclassified Information (CUI), which is government-created or owned
                information that requires safeguarding or dissemination controls consistent with applicable laws,
                regulations, and government-wide policies. Additionally, our systems may be subject to other specific
                requirements related to certain types of CUI, such as Export Controlled Information.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                The Services are not intended for individuals under the age of eighteen (18) years. If we learn that we
                have collected or received personal information from individuals under the age of eighteen (18), we will
                delete the personal information. If you believe we have personal information on individuals under the
                age of eighteen (18), please contact us at the contact information provided below.
              </p>
            </section>

            {/* Changes to Privacy Notice */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Changes to this Privacy Notice</h2>
              <p className="text-gray-700 leading-relaxed">
                We may amend this Privacy Notice in our sole discretion at any time. If we do, we will post the changes
                to this page, and will indicate the date the changes go into effect. We encourage you to review our
                Privacy Notice to stay informed. If we make changes that materially affect Your Privacy Rights, we will
                notify you by prominent posting on the Website and/or via email, and obtain your consent, if required.
              </p>
            </section>

            {/* Contact Information */}
            <section id="contact">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions or concerns regarding this Privacy Notice, Please contact us by email at
                privacy@gmpkit.com or by mail at:
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
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+18173818767" className="text-primary hover:underline">
                    (817) 381-8767
                  </a>
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
