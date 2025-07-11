/**
 * Shared constants and content for the GMPKit website
 * ----------------------------------------------------------------------------
 * Centralised configuration, copy, and reusable data.
 */

/* -------------------------------------------------------------------------- */
/*                                SITE CONFIG                                 */
/* -------------------------------------------------------------------------- */
export const SITE_CONFIG = {
  name: "GMPKit",
  description: "Manufacturing Operations Excellence Platform",
  url: "https://gmpkit.com",
  ogImage: "https://gmpkit.com/og.jpg",
  links: {
    twitter: "https://twitter.com/gmpkit",
    linkedin: "https://linkedin.com/company/gmpkit",
  },
} as const

/* -------------------------------------------------------------------------- */
/*                               COMPANY INFO                                 */
/* -------------------------------------------------------------------------- */
export const COMPANY_INFO = {
  name: "GMPKit, LLC.",
  tagline: "ISPE/GAMP5-commissioned platform supporting biopharma manufacturers with standards-based batch operations.",
  email: "support@gmpkit.com",
  phone: "(817) 381-8767",
  address: {
    street: "14571 N Kelsey St",
    suite: "STE 105, PMB 146",
    city: "Monroe",
    state: "WA",
    zip: "98272",
    country: "United States",
  },
} as const

/* -------------------------------------------------------------------------- */
/*                         SIMPLE NAVIGATION LINKS                            */
/* -------------------------------------------------------------------------- */
export const NAVIGATION_LINKS = [
  { href: "/batchtrak", label: "BatchTrak™" },
  { href: "/implementation", label: "Implementation" },
  { href: "/training", label: "Training" },
  { href: "/about", label: "About" },
] as const

/* -------------------------------------------------------------------------- */
/*                         CONSOLIDATED CONTACT INFO                          */
/* -------------------------------------------------------------------------- */
/*  Phone entry removed per user request */
export const CONTACT_METHODS = [
  {
    id: "email",
    type: "email",
    label: "Email",
    value: COMPANY_INFO.email,
    href: `mailto:${COMPANY_INFO.email}`,
    description: "We typically respond within 24 hours",
  },
] as const

/* -------------------------------------------------------------------------- */
/*                               SHARED CONTENT                               */
/* -------------------------------------------------------------------------- */
export const SHARED_CONTENT = {
  hero: {
    title: "Manufacturing Operations Excellence Platform",
    subtitle:
      "Transform your manufacturing operations with integrated software, proven methodologies, and expert guidance",
    cta: "Start Your Transformation",
  },

  stats: [
    { number: "Done for You", label: "Turn-key Configuration" },
    { number: "30 Days", label: "To Full Deployment" },
    { number: "90 Days", label: "To Measurable Improvements" },
    { number: "LEAN", label: "Manufacturing Principles" },
  ],

  benefits: [
    {
      title: "Real-Time Visibility",
      description: "Track batch progress, identify bottlenecks, and make data-driven decisions with live dashboards",
      icon: "Eye",
    },
    {
      title: "LEAN Integration",
      description: "Built-in Theory of Constraints and LEAN principles to optimise flow and eliminate waste",
      icon: "TrendingUp",
    },
    {
      title: "Rapid Deployment",
      description: "Get up and running in 30 days with our proven implementation methodology",
      icon: "Zap",
    },
    {
      title: "Expert Support",
      description: "Ongoing coaching and support from manufacturing-operations experts",
      icon: "Users",
    },
  ],

  industries: [
    "Pharmaceuticals",
    "Biotechnology",
    "Medical Devices",
    "Food & Beverage",
    "Chemicals",
    "Consumer Products",
  ],

  transformation: {
    title: "Platform + Process + People = Transformation",
    subtitle: "Our integrated approach combines technology, methodology, and expertise",
    sections: [
      {
        title: "Platform",
        subtitle: "BatchTrak™ Software",
        description:
          "Real-time manufacturing operations platform with role-based dashboards, automated workflows, and integrated analytics",
        features: [
          "Real-time batch tracking and visibility",
          "Automated deviation management",
          "Role-based dashboards and workflows",
          "Advanced analytics and reporting",
          "API integrations (ERP, MES, LIMS, QMS)",
        ],
      },
      {
        title: "Process",
        subtitle: "LEAN Manufacturing Methodology",
        description: "Proven frameworks and methodologies to optimise operations and eliminate waste",
        features: [
          "Theory of Constraints implementation",
          "Value-Stream Mapping and optimisation",
          "Standard Operating Procedures (SOPs)",
          "Continuous improvement frameworks",
          "Performance measurement systems",
        ],
      },
      {
        title: "People",
        subtitle: "Team Enablement",
        description:
          "Comprehensive training, coaching, and support to ensure successful adoption and continuous improvement",
        features: [
          "Role-based training programs",
          "Change-management support",
          "Ongoing coaching and mentorship",
          "12-month partnership (Command Center)", // updated wording
          "Dedicated customer-success management",
        ],
      },
    ],
  },

  howItWorks: [
    {
      step: "1",
      title: "Assess",
      description: "Evaluate current-state operations and identify improvement opportunities",
    },
    { step: "2", title: "Configure", description: "Set up BatchTrak™ with your specific workflows and requirements" },
    { step: "3", title: "Deploy", description: "Go live with comprehensive training and support for all users" },
    {
      step: "4",
      title: "Optimise",
      description: "Continuous improvement through ongoing coaching and performance monitoring",
    },
  ],

  faqCategories: ["General", "Implementation", "Platform", "Support", "Pricing"],

  contact: {
    email: COMPANY_INFO.email,
    address: `${COMPANY_INFO.address.street}, ${COMPANY_INFO.address.city}, ${COMPANY_INFO.address.state} ${COMPANY_INFO.address.zip}`,
  },
} as const

/* -------------------------------------------------------------------------- */
/*                              VALUE METRICS                                 */
/* -------------------------------------------------------------------------- */
export const VALUE_METRICS = [
  {
    icon: "TrendingUp",
    title: "Batch Success Rate",
    description:
      "Increase first-pass success rates and reduce batch failures through proactive monitoring and prevention.",
  },
  {
    icon: "AlertTriangle",
    title: "Deviation Rate",
    description: "Minimise deviations with early detection, structured workflows, and root-cause prevention.",
  },
  {
    icon: "Calendar",
    title: "Adherence to Production Schedule",
    description: "Keep batches on track with real-time schedule visibility and proactive bottleneck management.",
  },
  {
    icon: "Clock",
    title: "Adherence to Disposition Schedule",
    description: "Accelerate lot release with streamlined disposition workflows and automated status tracking.",
  },
  {
    icon: "CheckSquare",
    title: "5S Housekeeping",
    description: "Maintain operational discipline with built-in 5S tracking and continuous-improvement workflows.",
  },
  {
    icon: "FileText",
    title: "Record Review Performance",
    description: "Streamline batch, analytical, and execution record reviews with automated tracking and alerts.",
  },
] as const

/* -------------------------------------------------------------------------- */
/*                            IMPLEMENTATION TIMELINE                         */
/* -------------------------------------------------------------------------- */
export const IMPLEMENTATION_TIMELINE = [
  {
    phase: "Discovery & Planning",
    duration: "Week 1-2",
    activities: ["Current-state assessment", "Requirements gathering", "Solution design", "Project planning"],
  },
  {
    phase: "Configuration & Setup",
    duration: "Week 3-4",
    activities: ["Platform configuration", "Workflow setup", "Integration development", "Testing & validation"],
  },
  {
    phase: "Training & Go-Live",
    duration: "Week 5-6",
    activities: ["User-training sessions", "Go-live support", "Issue resolution", "Performance monitoring"],
  },
  {
    phase: "Optimization",
    duration: "Ongoing",
    activities: ["Performance analysis", "Continuous improvement", "Additional training", "Feature enhancements"],
  },
] as const

/* -------------------------------------------------------------------------- */
/*                                NAVIGATION                                  */
/* -------------------------------------------------------------------------- */
export const NAVIGATION = {
  main: [
    {
      title: "Solutions",
      href: "/",
      items: [
        { title: "BatchTrak Platform", href: "/batchtrak", description: "Real-time manufacturing operations platform" },
        { title: "Implementation Services", href: "/implementation", description: "Expert deployment & configuration" },
        { title: "Training & Consulting", href: "/training", description: "LEAN methodology training & support" },
      ],
    },
    {
      title: "Services",
      href: "/consulting",
      items: [
        { title: "Consulting", href: "/consulting", description: "Strategic operations consulting" },
        { title: "Implementation", href: "/implementation", description: "Complete deployment & setup" },
        { title: "Training", href: "/training", description: "Comprehensive training programs" },
      ],
    },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ],
  footer: [
    {
      title: "Solutions",
      items: [
        { title: "BatchTrak Platform", href: "/batchtrak" },
        { title: "Implementation", href: "/implementation" },
        { title: "Training", href: "/training" },
      ],
    },
    {
      title: "Company",
      items: [
        { title: "About", href: "/about" },
        { title: "Contact", href: "/contact" },
        { title: "FAQs", href: "/faqs" },
      ],
    },
    {
      title: "Legal",
      items: [
        { title: "Privacy Policy", href: "/privacy" },
        { title: "Terms of Service", href: "/terms" },
        { title: "Accessibility", href: "/accessibility" },
      ],
    },
  ],
} as const

/* -------------------------------------------------------------------------- */
/*                                   METADATA                                 */
/* -------------------------------------------------------------------------- */
export const METADATA = {
  title: {
    default: "GMPKit – Manufacturing Operations Excellence Platform",
    template: "%s | GMPKit",
  },
  description:
    "Transform your manufacturing operations with integrated software, proven methodologies, and expert guidance.",
  keywords: [
    "manufacturing operations",
    "batch tracking",
    "LEAN manufacturing",
    "theory of constraints",
    "manufacturing software",
    "operations excellence",
    "continuous improvement",
    "manufacturing analytics",
  ],
  authors: [{ name: "GMPKit", url: "https://gmpkit.com" }],
  creator: "GMPKit",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gmpkit.com",
    title: "GMPKit – Manufacturing Operations Excellence Platform",
    description:
      "Transform your manufacturing operations with integrated software, proven methodologies, and expert guidance.",
    siteName: "GMPKit",
  },
  twitter: {
    card: "summary_large_image",
    title: "GMPKit – Manufacturing Operations Excellence Platform",
    description:
      "Transform your manufacturing operations with integrated software, proven methodologies, and expert guidance.",
    creator: "@gmpkit",
  },
} as const
