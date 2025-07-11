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

  // Compliance & Validation
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
