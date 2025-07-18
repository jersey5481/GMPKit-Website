import PageLayout from "@/components/layout/PageLayout"
import Section from "@/components/ui/Section"
import FeatureCard from "@/components/ui/FeatureCard"
import ValueMetricsSection from "@/components/shared/ValueMetricsSection"
import DeploymentIncludesSection from "@/components/shared/DeploymentIncludesSection"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Monitor, Workflow, Brain, CheckCircle, AlertTriangle, Eye, TrendingDown, Clock } from "lucide-react"
import { generateMetadata as generateSEOMetadata, seoConfigs, generateSoftwareApplicationSchema } from "@/lib/seo"
import type { Metadata } from "next"
import Image from "next/image"
import PackagesSection from "@/components/sections/PackagesSection"

export const metadata: Metadata = generateSEOMetadata(seoConfigs.batchtrak)

const batchTrakFeatures = [
  {
    title: "Operational Visibility & Control",
    subtitle: "Know exactly what's happening—in every batch, at every site, in real time.",
    items: [
      "Unified dashboard for multi-site batch tracking",
      "Intelligent alerts for escalations and delays",
      "Role-based views for QA, Ops, and Leadership",
      "Catch issues before they become escalations",
    ],
    buttonLabel: "Learn How It Works",
  },
  {
    title: "Connected, Configurable Workflows",
    subtitle: "Integrate with your systems and streamline batch execution.",
    items: [
      "Open APIs for ERP, MES, LIMS, and more",
      "Workflows aligned to your SOPs and tech stack",
      "Clear accountability across departments",
      "Scales from single-site to enterprise rollout",
    ],
    buttonLabel: "Explore Integration Options",
  },
  {
    title: "Built-In Intelligence & Team Enablement",
    subtitle: "Go beyond tracking—equip your team to lead and improve.",
    items: [
      "AI-enabled analytics",
      "LEAN + Theory of Constraints foundations",
      "Deviation prevention and decision-support tools",
      "Role-based onboarding and training",
    ],
    buttonLabel: "See How We Train Teams",
  },
]

const keyCapabilities = [
  {
    icon: Monitor,
    title: "Real-Time Batch Tracking",
    description:
      "Monitor every batch across all sites with live status updates, automated alerts, and comprehensive audit trails.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Improve batch reliability with configurable workflows that keep teams aligned, accountable, and on track—without overhauling your existing systems.",
  },
  {
    icon: Brain,
    title: "Intelligent Analytics",
    description:
      "Turn data into insights with AI-enabled analytics that identify trends, predict issues, and recommend actions.",
  },
]

const problems = [
  {
    icon: AlertTriangle,
    title: "Manual systems don't scale",
    description: "Spreadsheets and paper trails break down as you grow",
  },
  {
    icon: Eye,
    title: "Visibility gaps delay decisions",
    description: "You can't manage what you can't see in real-time",
  },
  {
    icon: TrendingDown,
    title: "Deviations pile up, root causes vanish",
    description: "Problems compound when tracking is reactive, not proactive",
  },
]

const vsEnterprise = [
  {
    feature: "Implementation Time",
    batchtrak: "30 days",
    enterprise: "12-24 months",
    advantage: "98% faster deployment",
  },
  {
    feature: "User Training",
    batchtrak: "Role-based, included",
    enterprise: "Extensive, additional cost",
    advantage: "Built for daily use",
  },
  {
    feature: "Customization",
    batchtrak: "Configurable workflows",
    enterprise: "Heavy customization required",
    advantage: "Works with your process",
  },
  {
    feature: "Total Cost",
    batchtrak: "Transparent pricing",
    enterprise: "Complex licensing + consulting",
    advantage: "Predictable investment",
  },
]

export default function BatchTrakPage() {
  const softwareSchema = generateSoftwareApplicationSchema()

  return (
    <PageLayout currentPage="batchtrak">
      {/* Hero Section */}
      <Section background="gray" padding="xl" className="text-center">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-10">
            <Image
              src="/images/batchtrak-logo-new.png"
              width={1000}
              height={300}
              alt="BatchTrak™"
              className="h-80 w-auto"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            The Platform That Tracks Your Manufacturing Batches From Start to Finish
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            BatchTrak™ is a digital platform built on LEAN principles, giving pharmaceutical and biotech manufacturers
            real-time visibility into every batch. By replacing spreadsheets and manual trackers, BatchTrak™ eliminates
            guesswork, reduces waste, and drives continuous improvement through structured, role-based workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Schedule Discovery Call</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* What is BatchTrak Section */}
      <Section background="white" padding="xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">What is BatchTrak™?</h2>

          <div className="mb-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-4">
                Think of it as a digital command center for your production floor
              </h3>
              <p className="text-gray-600 mb-6">
                Every manufacturing batch goes through multiple steps—manufacturing, document review, deviation
                investigation, and testing. BatchTrak™ tracks each step in real-time, so you always know:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  Which batches are running and which are delayed
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  What's causing bottlenecks in your process
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  When batches will be ready for release
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  Who's responsible for each step
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#e6f7df] to-[#f2faea] p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-center">The Bottom Line</h3>
            <p className="text-lg text-gray-700 mb-8 text-center">
              BatchTrak™ replaces the chaos of spreadsheets, emails, and phone calls with one clear system that everyone
              can see and use. Your team spends less time hunting for information and more time moving the KPIs that matter:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col items-center h-full">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <TrendingDown className="h-6 w-6 text-green-600 transform rotate-180" />
                </div>
                <p className="font-semibold text-gray-800 text-center whitespace-nowrap text-sm">Increasing success rate</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col items-center h-full">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-green-600" />
                </div>
                <p className="font-semibold text-gray-800 text-center whitespace-nowrap text-sm">Decreasing deviations</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col items-center h-full">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <p className="font-semibold text-gray-800 text-center whitespace-nowrap text-sm">Adhering to schedule</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col items-center h-full">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <p className="font-semibold text-gray-800 text-center whitespace-nowrap text-sm">On-time disposition</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* The Problem Section */}
      <Section background="gray" padding="xl">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Most Batch Operations Break Down</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Even the best teams struggle when their systems can't keep up with the complexity of scaling up batch
              manufacturing. Critical KPIs suffer—more lost batches, longer review cycles, and delayed
              dispositions—while business outcomes fall short.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {problems.map((problem, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 mb-4">
                  <problem.icon className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                <p className="text-gray-600">{problem.description}</p>
              </div>
            ))}
          </div>

          {/* Solution callout */}
          <div className="bg-primary text-white p-8 rounded-lg text-center">
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 mr-3" />
              <h3 className="text-2xl font-bold">
                GMPKit fixes this by combining LEAN principles with BatchTrak™ technology
              </h3>
            </div>
            <p className="text-xl text-primary-foreground/90">
              — See every batch. Prevent every failure. Control every outcome.
            </p>
          </div>
        </div>
      </Section>

      {/* Key Capabilities */}
      <Section background="white" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Built for Batch Manufacturing Excellence</h2>
          <p className="text-xl text-gray-600 mb-8">
            BatchTrak™ combines real-time visibility, intelligent automation, and ISPE/GAMP5 commissioned standards
            alignment to support biopharma manufacturers who require both operational efficiency and regulatory
            confidence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyCapabilities.map((capability, index) => (
              <div key={index} className="text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-6">
                  <capability.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{capability.title}</h3>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* BatchTrak vs Enterprise Comparison */}
      <Section background="gray" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">The BatchTrak™ Implementation Advantage</h2>
          <p className="text-xl text-gray-600 mb-8">
            See how a BatchTrak™ implementation compares to a traditional enterprise deployment.
          </p>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-4 gap-4 p-6 bg-gradient-to-r from-[#e6f7df] to-[#f2faea] font-bold text-sm">
              <div className="text-gray-800">Feature</div>
              <div className="text-primary">BatchTrak™</div>
              <div className="text-gray-800">Enterprise Systems</div>
              <div className="text-gray-800">Advantage</div>
            </div>
            {vsEnterprise.map((comparison, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 p-6 border-t border-gray-100 text-sm">
                <div className="font-medium">{comparison.feature}</div>
                <div className="text-primary font-medium">{comparison.batchtrak}</div>
                <div className="text-gray-600">{comparison.enterprise}</div>
                <div className="text-green-600 font-medium">{comparison.advantage}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Feature Cards */}
      <Section background="white" padding="xl">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Everything You Need in One Platform</h2>
            <p className="text-xl text-gray-600 mb-8">
              BatchTrak™ isn't just software—it's a complete operational system designed to eliminate waste, reduce
              risk, and accelerate results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {batchTrakFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                subtitle={feature.subtitle}
                items={feature.items}
                className="h-full"
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Packages Section */}
      <PackagesSection />

      {/* Value Metrics */}
      <ValueMetricsSection />

      {/* Implementation Support */}
      <DeploymentIncludesSection
        title="Implementation Expertise Included"
        description="BatchTrak™ isn't sold in isolation—we ensure adoption and success every step of the way with proven implementation methodology."
        showCaricature={false}
      />

      {/* ROI Section */}
      <Section background="white" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Proven ROI from Day One</h2>
          <p className="text-gray-600 mb-8">
            BatchTrak™ customers see measurable improvements within 90 days of deployment.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">LEAN</div>
              <p className="text-sm text-gray-600">Manufacturing Principles</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">30</div>
              <p className="text-sm text-gray-600">Day Implementation</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-sm text-gray-600">Real-time Visibility</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <p className="text-sm text-gray-600">Batch Accountability</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action Section */}
      <Section background="primary" padding="xl">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">See BatchTrak in Action</h2>
          <p className="text-xl mb-8">
            Experience how BatchTrak™ can transform your batch operations with a personalized demonstration tailored to your use case.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Schedule a Demo</Link>
          </Button>
        </div>
      </Section>
    </PageLayout>
  )
}
