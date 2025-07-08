/**
 * Centralised, re-usable marketing/implementation data for the site
 * ----------------------------------------------------------------------------
 *  – Package grids
 *  – Implementation timelines
 *  – Role-based value props
 *
 *  NOTE:  Only modify data, do not remove the named exports.
 */

import { IMPLEMENTATION_TIMELINE } from "./constants"

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

export interface Package {
  name: string
  subtitle: string
  price: string
  description: string
  features: string[]
  cta: string
  popular: boolean
  duration?: string
  included?: string
}

export interface RoleData {
  title: string
  subtitle: string
  pains: string[]
  benefits: string[]
  cta: string
}

/* -------------------------------------------------------------------------- */
/*                              SOFTWARE PACKAGES                             */
/* -------------------------------------------------------------------------- */

export const BATCHTRAK_PACKAGES: Package[] = [
  {
    name: "Visibility Essentials",
    subtitle: "Get off spreadsheets. Get your team tracking in real time.",
    price: "Contact for pricing",
    description: "Lightweight, fast-to-implement solution for single-site teams ready to eliminate manual tracking",
    features: [
      "Role-based dashboards and workflows with automated alerts",
      "Basic reporting and analytics",
      "Standard API integrations",
      "Value Stream Diagnostic Checklist (remote)",
      "30-day implementation with remote go-live support",
      "Foundation training for all users (self-paced)",
      "Email-based support",
    ],
    cta: "Start Your Transformation",
    popular: false,
  },
  {
    name: "Operational LEAN Stack",
    subtitle: "From visibility to velocity. Build operational muscle that lasts.",
    price: "Contact for pricing",
    description: "Complete operational framework combining BatchTrak™ platform with LEAN methodology and coaching",
    features: [
      "Everything in Visibility Essentials",
      "Pre-configured role-based workflows aligned with LEAN best practices",
      "Custom reporting and advanced analytics",
      "90-day LEAN Optimization Program",
      "Weekly remote coaching checkpoints",
      "Performance and capability assessment for frontline teams",
      "Done-for-you remote configuration tailored to your site",
      "Priority support with faster response times",
    ],
    cta: "Build LEAN Operations",
    popular: true,
  },
  {
    name: "Command Center",
    subtitle: "Scale your systems. Govern with clarity. Lead from the top.",
    price: "Contact for pricing",
    description:
      "Full-scope deployment and transformation partner for multi-site enterprises requiring strategic oversight",
    features: [
      "Everything in Operational LEAN Stack",
      "Multi-site coordination and centralized command center deployment",
      "MCP AI Agent for early signal detection and cross-site intelligence",
      "Custom integrations (ERP, MES, QMS, LIMS)",
      "On-site strategic assessment and implementation planning",
      "Executive performance dashboards and reporting",
      "Dedicated Customer Success Manager",
      "12-month transformation roadmap with quarterly executive reviews",
    ],
    cta: "Partner With Us",
    popular: false,
  },
]

/* -------------------------------------------------------------------------- */
/*                         IMPLEMENTATION SERVICE PACKAGES                    */
/* -------------------------------------------------------------------------- */

export const IMPLEMENTATION_PACKAGES: Package[] = [
  {
    name: "Standard Implementation",
    subtitle: "Single-site deployment",
    duration: "30 days",
    price: "",
    description: "Complete BatchTrak™ setup with essential training and support",
    features: [
      "Site assessment and process mapping",
      "BatchTrak™ configuration and setup",
      "User training (all roles)",
      "Go-live support",
      "30-day post-launch coaching",
    ],
    included: "Included with Standard package",
    cta: "",
    popular: false,
  },
  {
    name: "Advanced Implementation",
    subtitle: "Multi-workflow deployment",
    duration: "45 days",
    price: "",
    description: "Comprehensive deployment with advanced workflows and integrations",
    features: [
      "Everything in Standard",
      "Advanced workflow configuration",
      "System integrations (API setup)",
      "Custom reporting setup",
      "90-day optimization program",
    ],
    included: "Included with Advanced package",
    cta: "",
    popular: false,
  },
  {
    name: "Enterprise Implementation",
    subtitle: "Multi-site deployment",
    duration: "60-90 days",
    price: "",
    description: "Full-scale rollout with custom integrations and dedicated support",
    features: [
      "Everything in Advanced",
      "Multi-site coordination",
      "Custom integrations (ERP, MES, LIMS)",
      "Dedicated implementation manager",
      "12-month success program",
    ],
    included: "Included with Enterprise package",
    cta: "",
    popular: false,
  },
]

/* -------------------------------------------------------------------------- */
/*                         ROLE-BASED VALUE PROPOSITIONS                      */
/* -------------------------------------------------------------------------- */

export const ROLE_BASED_CONTENT: RoleData[] = [
  {
    title: "Site Head - Quality/Manufacturing",
    subtitle: "Executive Operations Leadership",
    pains: [
      "Limited visibility into lot disposition pipeline and release readiness",
      "Difficulty anticipating revenue impact from batch delays",
      "Site success rate below target/site deviation rate above target",
    ],
    benefits: [
      "Executive dashboard showing product disposition status and revenue timeline",
      "Resource deployment insights for batch record review and deviation investigation",
      "Provides framework for reliability and continuous improvement",
    ],
    cta: "Contact Us",
  },
  {
    title: "Operations Manager",
    subtitle: "Cross-Functional Coordination",
    pains: [
      "Searching for batch status and roadblocks across shifts",
      "Poor communication coordination between departments",
      "Reactive management instead of proactive continuous improvement",
    ],
    benefits: [
      "Real-time batch tracking against quality release process",
      "Streamlined cross-shift communication and handoffs",
      "Data-driven continuous improvement and escalation management",
    ],
    cta: "View Operations Dashboard",
  },
  {
    title: "Quality Assurance User",
    subtitle: "Documentation & Compliance",
    pains: [
      "Manual tracking of production and laboratory record status",
      "Inefficient communication of required corrections",
      "Missed disposition timelines due to coordination delays",
    ],
    benefits: [
      "Automated tracking of MBR and test method completion status",
      "Streamlined correction communication and resolution workflows",
      "Right-first-time manufacturing principles with reduced rework",
    ],
    cta: "See QA Workflows",
  },
  {
    title: "Frontline Leader",
    subtitle: "Tactical Operations Supervision",
    pains: [
      "Delayed alerts for workflow issues affecting team productivity",
      "Unclear visibility into document review status and exceptions",
      "Difficulty building optimized daily resource plans",
    ],
    benefits: [
      "Real-time alerts for delays and workflow bottlenecks",
      "Clear visibility into batch/analytical record review status",
      "Resource optimization tools for daily planning and task assignment",
    ],
    cta: "View Supervisor Tools",
  },
  {
    title: "Operations Planner",
    subtitle: "Strategic Planning & Scheduling",
    pains: [
      "Inaccurate data on durations, delays, and capacity constraints",
      "Complex scheduling activities without clear plant capacity visibility",
      "Difficulty modeling optimal manufacturing schedules at scale",
    ],
    benefits: [
      "Accurate capacity modeling with real-time constraint visibility",
      "Simplified scheduling with integrated duration and delay data",
      "Strategic responsiveness with reduced tactical noise and error elimination",
    ],
    cta: "See Planning Tools",
  },
  {
    title: "IT / Admin",
    subtitle: "System Integration & Management",
    pains: [
      "Integration complexity creating system reliability issues",
      "User management overhead across multiple platforms",
      "Downtime costs from system maintenance",
    ],
    benefits: [
      "Simple integrations that enhance system reliability",
      "Centralized user management that reduces overhead",
      "Cloud-based uptime that eliminates maintenance costs",
    ],
    cta: "See IT Solutions",
  },
]

/* -------------------------------------------------------------------------- */
/*                             RE-EXPORT CONSTANTS                            */
/* -------------------------------------------------------------------------- */

export { IMPLEMENTATION_TIMELINE }
