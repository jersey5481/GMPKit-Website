export interface FAQ {
  id: string
  category: string
  question: string
  answer: string
}

export const faqData: FAQ[] = [
  // Platform & Capabilities
  {
    id: "platform-1",
    category: "Platform & Capabilities",
    question: "What specific workflows or functions does BatchTrak™ support today?",
    answer:
      "BatchTrak™ supports real-time batch tracking, task sequencing, deviation management, multi-site coordination, and complete visibility into production milestones. It's designed specifically for batch manufacturing operations.",
  },
  {
    id: "platform-2",
    category: "Platform & Capabilities",
    question: "How configurable is BatchTrak™ to our unique processes?",
    answer:
      "BatchTrak™ is highly configurable. Dashboards, workflows, and user views can be adapted to reflect how your teams actually work—without requiring custom code. We configure the platform during implementation to match your specific processes.",
  },
  {
    id: "platform-3",
    category: "Platform & Capabilities",
    question: "Does BatchTrak™ integrate with existing MES, QMS, or ERP systems?",
    answer:
      "Yes. BatchTrak™ is built for integration and can connect with any system that provides an API. We offer robust API-based connectivity for MES, QMS, ERP systems—including SAP—as well as custom platforms, ensuring alignment with your existing digital infrastructure.",
  },
  {
    id: "platform-4",
    category: "Platform & Capabilities",
    question: "Does BatchTrak™ support Active Directory (AD)/LDAP or SSO integration?",
    answer: "Yes, identity integration capabilities—including AD/LDAP and SSO—are available with all packages.",
  },
  {
    id: "platform-5",
    category: "Platform & Capabilities",
    question: "Can BatchTrak™ support multi-site or global operations?",
    answer:
      "Yes. BatchTrak™ supports multi-site and global operations with UTC-based timestamping, scalable deployment architecture, and redundant configuration options.",
  },
  {
    id: "platform-6",
    category: "Platform & Capabilities",
    question: "How does BatchTrak™ compare to traditional enterprise systems?",
    answer:
      "BatchTrak™ delivers enterprise-level capabilities with startup-level speed. While traditional enterprise systems often take 12-24 months to implement, BatchTrak™ deploys in 30 days. You get real-time batch visibility without the complexity and cost of conventional enterprise solutions.",
  },
  {
    id: "platform-7",
    category: "Platform & Capabilities",
    question: "Can BatchTrak™ be accessed on mobile devices or remotely?",
    answer:
      "Yes. BatchTrak™ is web-based and responsive, allowing authorized users to access the platform from any device with an internet connection. Production teams can monitor batch progress, receive alerts, and update statuses from the production floor using tablets or mobile devices, while management can maintain visibility from anywhere.",
  },
  {
    id: "platform-8",
    category: "Platform & Capabilities",
    question: "How does BatchTrak™ handle scaling as our operations grow?",
    answer:
      "BatchTrak™ is architected for scalability from the ground up. The platform easily accommodates growing batch volumes, increasing user counts, and expanding site networks without performance degradation. Our cloud infrastructure automatically scales to match your usage patterns, ensuring consistent performance whether you're tracking dozens or thousands of batches across multiple facilities.",
  },

  {
    id: "platform-9",
    category: "Platform & Capabilities",
    question: "Which specific industries does BatchTrak™ work best for?",
    answer:
      "BatchTrak™ was originally designed for regulated batch manufacturing environments like pharmaceuticals, medical devices, and food & beverage production. However, it has proven equally valuable in any batch production environment where visibility, traceability, and operational excellence are priorities—including specialty chemicals, cosmetics, and advanced materials manufacturing. The platform is particularly beneficial in environments with complex workflows, compliance requirements, or quality-critical processes.",
  },

  // Packages & Pricing
  {
    id: "pricing-1",
    category: "Packages & Pricing",
    question: "What's included in each BatchTrak™ package?",
    answer:
      "The BatchTrak™ Operational Transformation package includes a Value Stream Diagnostic Assessment, platform configuration tailored to your workflows, role-based training for all users, KPI tracking dashboards, 30-day implementation with remote go-live support, and foundation-level ongoing support. Additional upgrade options include LEAN Leader Coaching, On-Site Implementation, Advanced Integrations, Multi-Site Coordination, Dedicated Success Manager, and AI Intelligence Layer.",
  },
  {
    id: "pricing-2",
    category: "Packages & Pricing",
    question: "Are there any hidden costs for implementation or training?",
    answer:
      "No hidden costs. Implementation expertise and training are included with every package. We'll clearly outline any optional services—like custom integrations—during planning so everything is transparent from day one.",
  },
  {
    id: "pricing-3",
    category: "Packages & Pricing",
    question: "Can we start with one package and upgrade later?",
    answer:
      "Absolutely. You can begin with the core BatchTrak™ Operational Transformation package and add upgrade options as your needs evolve. Many customers start with the foundation and add capabilities like LEAN Leader Coaching or Advanced Integrations as they see value and want to expand their implementation. We design the system to make these additions seamless.",
  },

  // Implementation & Support
  {
    id: "implementation-1",
    category: "Implementation & Support",
    question: "What is the expected implementation timeline?",
    answer:
      "The BatchTrak™ Operational Transformation package includes a 30-day implementation with remote go-live support. Timeline can vary slightly based on complexity and availability of client documentation like SOPs and workflow requirements. Early engagement from your team helps keep the project on track. On-site implementation is available as an upgrade option for more complex deployments.",
  },
  {
    id: "implementation-2",
    category: "Implementation & Support",
    question: "What support is included during implementation?",
    answer:
      "Implementation includes dedicated project management, collaborative configuration, comprehensive training, go-live support, and post-launch coaching. Our team stays involved through early use to ensure success.",
  },
  {
    id: "implementation-3",
    category: "Implementation & Support",
    question: "How do you handle updates, feature requests, and bug fixes?",
    answer:
      "Feature requests and issues are logged through our support channels. We prioritize enhancements based on user feedback and deploy updates iteratively to ensure continuous improvement.",
  },
  {
    id: "implementation-4",
    category: "Implementation & Support",
    question: "How does GMPKit help overcome user resistance to new systems?",
    answer:
      "We address adoption challenges through a multi-faceted approach: (1) involving key stakeholders early in the configuration process to ensure the system reflects their actual needs, (2) providing role-based training that focuses on the specific benefits for each user group, (3) designing intuitive interfaces that minimize training requirements, and (4) offering ongoing coaching to reinforce best practices. Our implementation methodology is specifically designed to build internal champions and demonstrate immediate value to frontline users.",
  },
  {
    id: "implementation-5",
    category: "Implementation & Support",
    question: "What aspects of BatchTrak™ can't be customized?",
    answer:
      "While BatchTrak™ is highly configurable, the core architecture—including the security model, audit trail functionality, and fundamental data structures—remains consistent across all implementations to ensure system integrity and reliability. This approach allows us to maintain a robust, standardized foundation while still adapting the user experience, workflows, terminology, and integrations to match your specific processes. If you have specific customization requirements, we can discuss them during the scoping process.",
  },

  // Compliance
  {
    id: "compliance-1",
    category: "Compliance",
    question: "How do we know BatchTrak™ is usable in GMP Regulated Environments?",
    answer:
      "BatchTrak™ operates within GMP environments as a continuous improvement tool—not as a validated GMP decision-making system. It has undergone a System Impact Assessment under ISPE/GAMP5 guidelines, confirming that it supports compliance through structured workflows, full audit trails, and traceable user actions—without requiring formal validation. If your organization requires a fully-qualified (validated) instance of BatchTrak™, please contact GMPKit for additional options.",
  },
  {
    id: "compliance-2",
    category: "Compliance",
    question: "How do you handle data integrity, traceability, and version control?",
    answer:
      "We use structured task execution, immutable audit logs, and version-controlled templates. All timestamps are recorded in UTC to ensure global consistency. Role-based access controls ensure data integrity.",
  },
  {
    id: "compliance-3",
    category: "Compliance",
    question: "Will our QA team need to review the system?",
    answer:
      "While full system validation is typically not required, your QA team may choose to review configured workflows or SOP alignment to ensure the tool fits within your quality framework. We support this review process.",
  },
  {
    id: "compliance-4",
    category: "Compliance",
    question: "How does BatchTrak™ stay current with changing regulatory requirements?",
    answer:
      "Our compliance team continuously monitors regulatory trends and updates across key industries we serve. As regulations evolve, we assess the impact on our platform and implement necessary updates as part of our regular release cycle. For significant regulatory changes, we provide guidance to clients on how BatchTrak™ can support compliance with the new requirements. Our system's configurability also allows your team to adapt workflows and documentation as your internal compliance needs change.",
  },

  // Security & Data Management
  {
    id: "security-1",
    category: "Security & Data Management",
    question: "Where is our data hosted, and what are your data protection protocols?",
    answer:
      "Data is hosted in secure, ISO/IEC 27001-compliant cloud infrastructure designed for reliability and resilience. BatchTrak™ follows best practices for encryption, access control, and uptime with built-in redundancy and backup protocols.",
  },
  {
    id: "security-2",
    category: "Security & Data Management",
    question: "How is access controlled, and what security standards do you follow?",
    answer:
      "Access is controlled through role-based permissions with full audit trails. While BatchTrak™ is hosted on ISO 27001-compliant infrastructure, our security practices align with ISO 27001 principles, and data protection is foundational to our platform design.",
  },
  {
    id: "security-3",
    category: "Security & Data Management",
    question: "Can we export our data at any time?",
    answer: "Yes. All your data is exportable upon request in common formats, ensuring transparency and continuity.",
  },

  // Training & Adoption
  {
    id: "training-1",
    category: "Training & Adoption",
    question: "What training is included with BatchTrak™?",
    answer:
      "The BatchTrak™ Operational Transformation package includes role-based training for all users (production, QA, management) tailored to your team's specific responsibilities. The LEAN Leader Coaching Program upgrade option provides additional 90-day optimization with weekly coaching check-ins. Our training approach ensures your team can effectively use the platform from day one while developing continuous improvement capabilities.",
  },
  {
    id: "training-2",
    category: "Training & Adoption",
    question: "How long does it take for teams to become proficient?",
    answer:
      "Most teams achieve proficiency within 30 days of go-live. Our role-based training approach and hands-on practice with your actual configuration accelerates adoption significantly.",
  },
  {
    id: "training-3",
    category: "Training & Adoption",
    question: "Do you provide ongoing training and support?",
    answer:
      "Yes. The BatchTrak™ Operational Transformation package includes foundation-level ongoing support and optimization guidance. For enhanced support, the Dedicated Success Manager upgrade option provides a partnership with quarterly executive reviews, while the LEAN Leader Coaching Program offers weekly coaching check-ins. All clients receive access to our help desk and knowledge base to ensure you're maximizing BatchTrak™ value.",
  },

  // Strategic Fit
  {
    id: "strategic-1",
    category: "Strategic Fit",
    question: "What's your long-term vision for BatchTrak™?",
    answer:
      "Our vision is to become the gold standard for batch operations platforms—delivering real-time visibility and operational control without the complexity of traditional enterprise systems. We're building the future of lean batch manufacturing.",
  },
  {
    id: "strategic-2",
    category: "Strategic Fit",
    question: "How do you see GMPKit evolving in the manufacturing ecosystem?",
    answer:
      "GMPKit fills the gap between manual processes and overly complex enterprise systems. We're building lightweight, intelligent tools that boost operational performance while maintaining the agility manufacturers need to compete.",
  },
  {
    id: "strategic-3",
    category: "Strategic Fit",
    question: "What KPIs does BatchTrak™ move?",
    answer:
      "BatchTrak™ drives measurable improvements in key manufacturing metrics including batch success rate, deviation reduction, schedule adherence, and on-time disposition. Clients typically see reduction in deviations, improvement in on-time batch completion, and significantly enhanced visibility into production bottlenecks. These operational improvements translate directly to business outcomes like increased capacity utilization, reduced operational costs, and faster time-to-market.",
  },
  {
    id: "strategic-4",
    category: "Strategic Fit",
    question: "Will the GMPKit approach require my site to adjust its strategy?",
    answer:
      "Typically not. Our toolset equips your operations team with a tactical playbook. You set the strategy, we provide the tools, training and software that empowers execution.",
  },
  {
    id: "strategic-5",
    category: "Strategic Fit",
    question: "How quickly do customers typically see ROI from BatchTrak™?",
    answer:
      "Most clients begin seeing measurable operational improvements within the first 60 days after go-live. The initial value comes from enhanced visibility and reduced firefighting, while deeper financial returns typically emerge as teams leverage the data for continuous improvement. Our Value Stream Diagnostic Assessment helps identify the highest-impact areas to target first, accelerating time-to-value.",
  },
  {
    id: "strategic-6",
    category: "Strategic Fit",
    question: "What makes BatchTrak™ different from other continuous improvement solutions?",
    answer:
      "BatchTrak™ differentiates itself through three key advantages: (1) Speed to value—deploying in 30 days rather than the 12+ months typical of enterprise systems, (2) Operational focus—designed specifically for the day-to-day needs of manufacturing and quality teams, and (3) Continuous improvement orientation—providing not just tracking but actionable insights that drive measurable operational improvements. Unlike generic workflow tools or rigid enterprise systems, BatchTrak™ balances structure and flexibility to support real-world manufacturing operations.",
  },
]

export const faqCategories = [
  "Platform & Capabilities",
  "Packages & Pricing",
  "Implementation & Support",
  "Compliance",
  "Security & Data Management",
  "Training & Adoption",
  "Strategic Fit",
] as const

// Utility function to get FAQs by category
export function getFAQsByCategory(category: string): FAQ[] {
  return faqData.filter((faq) => faq.category === category)
}

// Utility function to get all unique categories
export function getAllCategories(): string[] {
  return Array.from(new Set(faqData.map((faq) => faq.category)))
}
