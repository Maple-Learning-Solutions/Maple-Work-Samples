"use client"

import React, { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, ArrowRight, ShieldCheck, Plus, Minus } from "lucide-react"
import { CtaCard } from "@/components/ui/cta-card"
import SampleCard from "@/components/portfolio/SampleCard"
import SampleViewer from "@/components/portfolio/SampleViewer"
import { samples } from "@/data/samples"
import ServiceSamplesCarousel from "@/components/portfolio/ServiceSamplesCarousel"

export default function ManagedLearningSolutionsPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)
  const [selectedSample, setSelectedSample] = useState<any | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  // Find relevant samples
  const relevantSamples = samples // TODO: Filter specific samples per page using sample.id

  return (
    <div className="min-h-screen bg-transparent text-white selection:bg-maple-green/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop)" }}
          />
          <div className="absolute inset-0 bg-slate-950/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0.8)_0%,rgba(2,6,23,0)_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        </div>

        <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-maple-green text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-md border border-white/10">
                Talent Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight"
            >
              Managed Learning Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-300 mb-10 font-light leading-relaxed"
            >
              Outsource your end-to-end training operations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="#samples" 
                className="px-8 py-4 bg-maple-green text-black font-semibold rounded-lg hover:bg-opacity-90 transition-all text-center"
              >
                Explore Our Work
              </Link>
              <Link 
                href="#contact" 
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10 text-center"
              >
                Let's Talk
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="relative z-10 border-t border-white/5 bg-transparent overflow-hidden">
        <div className="flex flex-col md:flex-row items-stretch">
          {/* Left Side: Full Bleed Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[500px]"
          >
            <img 
              src="/img/Remote Learning Workspace.png" 
              alt="What is Managed Learning Solutions?" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
          </motion.div>

          {/* Right Side: Title + Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/2 flex flex-col justify-center py-16 md:py-24 px-8 md:px-16 lg:pr-24 xl:pr-32"
          >
            <h2 className="font-satoshi font-bold text-4xl md:text-5xl text-white mb-6">
                What is Managed Learning Solutions?
              </h2>
            <div className="w-20 h-1 bg-maple-green mb-8"></div>
            <p className="text-lg text-slate-300 leading-relaxed font-light">
                For organizations that want to focus on their core business, Maple offers comprehensive Managed Learning Solutions (MLS). We act as your dedicated, fully outsourced Learning & Development department, handling everything from strategic planning to content creation, delivery, and reporting.
              </p>
          </motion.div>
        </div>
      </section>

      
      {/* Samples Showcase */}
      <section id="samples" className="py-12 md:py-16 relative z-10 border-t border-white/5 bg-slate-950">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <ServiceSamplesCarousel samples={relevantSamples} />
        </div>
      </section>

      
      {/* Process */}
      <section className="py-12 md:py-16 relative z-10 border-t border-white/5 bg-slate-900/30">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-satoshi font-bold text-4xl md:text-5xl text-white mb-4"
            >
              Our Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 max-w-2xl mx-auto"
            >
              How we approach Managed Learning Solutions
            </motion.p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 z-0" />
            <div className="block md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-white/10 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                className="flex flex-row md:flex-col items-center md:items-start md:text-center relative group"
              >
                <div className="flex flex-col items-center shrink-0 w-16 md:w-full mr-6 md:mr-0 z-10">
                  <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-maple-green text-maple-green flex items-center justify-center font-bold text-lg mb-0 md:mb-6 group-hover:bg-maple-green group-hover:text-black transition-colors shadow-[0_0_15px_rgba(40,199,111,0.2)]">
                    01
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Discovery & Audit</h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">
                    We audit your existing learning materials, technology stack, and business objectives.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-row md:flex-col items-center md:items-start md:text-center relative group"
              >
                <div className="flex flex-col items-center shrink-0 w-16 md:w-full mr-6 md:mr-0 z-10">
                  <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-maple-green text-maple-green flex items-center justify-center font-bold text-lg mb-0 md:mb-6 group-hover:bg-maple-green group-hover:text-black transition-colors shadow-[0_0_15px_rgba(40,199,111,0.2)]">
                    02
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Service Level Agreement (SLA)</h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">
                    We define precise metrics for content production velocity, support response times, and quality standards.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-row md:flex-col items-center md:items-start md:text-center relative group"
              >
                <div className="flex flex-col items-center shrink-0 w-16 md:w-full mr-6 md:mr-0 z-10">
                  <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-maple-green text-maple-green flex items-center justify-center font-bold text-lg mb-0 md:mb-6 group-hover:bg-maple-green group-hover:text-black transition-colors shadow-[0_0_15px_rgba(40,199,111,0.2)]">
                    03
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Team Assembly</h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">
                    We dedicate a specific Account Director and production team to your organization.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.30000000000000004 }}
                className="flex flex-row md:flex-col items-center md:items-start md:text-center relative group"
              >
                <div className="flex flex-col items-center shrink-0 w-16 md:w-full mr-6 md:mr-0 z-10">
                  <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-maple-green text-maple-green flex items-center justify-center font-bold text-lg mb-0 md:mb-6 group-hover:bg-maple-green group-hover:text-black transition-colors shadow-[0_0_15px_rgba(40,199,111,0.2)]">
                    04
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Transition & Takeover</h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">
                    We smoothly migrate operations from your internal teams to our managed service framework.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-row md:flex-col items-center md:items-start md:text-center relative group"
              >
                <div className="flex flex-col items-center shrink-0 w-16 md:w-full mr-6 md:mr-0 z-10">
                  <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-maple-green text-maple-green flex items-center justify-center font-bold text-lg mb-0 md:mb-6 group-hover:bg-maple-green group-hover:text-black transition-colors shadow-[0_0_15px_rgba(40,199,111,0.2)]">
                    05
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Continuous Optimization</h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">
                    Quarterly business reviews to refine strategy and improve cost-efficiencies.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-12 md:py-16 relative z-10 bg-slate-900/30">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-satoshi font-bold text-4xl md:text-5xl text-white mb-4"
            >
              Key Capabilities
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 max-w-2xl mx-auto"
            >
              What we deliver for Managed Learning Solutions
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="bg-slate-950/50 border border-white/10 p-8 rounded-2xl hover:border-maple-green/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-maple-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start gap-4 relative z-10">
                <CheckCircle2 className="text-maple-green w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Strategic L&D Roadmapping</h3>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                    Aligning learning initiatives directly with your annual corporate business goals.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-950/50 border border-white/10 p-8 rounded-2xl hover:border-maple-green/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-maple-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start gap-4 relative z-10">
                <CheckCircle2 className="text-maple-green w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">End-to-End Content Factory</h3>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                    A dedicated team producing a continuous pipeline of eLearning, videos, and job aids.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-950/50 border border-white/10 p-8 rounded-2xl hover:border-maple-green/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-maple-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start gap-4 relative z-10">
                <CheckCircle2 className="text-maple-green w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Vendor Management</h3>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                    We manage all third-party content providers, LMS contracts, and specialized trainers on your behalf.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.30000000000000004 }}
              className="bg-slate-950/50 border border-white/10 p-8 rounded-2xl hover:border-maple-green/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-maple-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start gap-4 relative z-10">
                <CheckCircle2 className="text-maple-green w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Analytics & Reporting</h3>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                    Monthly executive readouts on learning consumption, performance impact, and ROI.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      
      {/* Why Maple */}
      <section className="py-12 md:py-16 relative z-10 bg-slate-900/30 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-satoshi font-bold text-4xl md:text-5xl text-white mb-4"
            >
              Why Choose Maple
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 max-w-2xl mx-auto"
            >
              Our differentiators for Managed Learning Solutions
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-slate-950 border border-white/10 rounded-2xl flex items-center justify-center text-maple-green mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Predictable Cost Structure</h3>
              <p className="text-slate-400 font-light leading-relaxed">
                Turn unpredictable headcount and production costs into a flat, transparent monthly or annual retainer.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-slate-950 border border-white/10 rounded-2xl flex items-center justify-center text-maple-green mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Instant Enterprise Capability</h3>
              <p className="text-slate-400 font-light leading-relaxed">
                Gain immediate access to strategists, technologists, and creatives that would take years to recruit individually.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-slate-950 border border-white/10 rounded-2xl flex items-center justify-center text-maple-green mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Strategic Partnership</h3>
              <p className="text-slate-400 font-light leading-relaxed">
                We don't just take orders; we proactively advise your C-suite on how learning can solve business challenges.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      
      {/* Use Cases */}
      <section className="py-12 md:py-16 relative z-10 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-satoshi font-bold text-4xl md:text-5xl text-white mb-4"
            >
              Where It Applies
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "80px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="h-1 bg-maple-green"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="bg-slate-900/50 p-8 rounded-2xl border border-white/10 hover:bg-slate-900 hover:border-white/20 transition-all group"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-maple-green opacity-0 -ml-7 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                Rapid Scaling Startups
              </h3>
              <p className="text-slate-400 font-light leading-relaxed">
                Fast-growing companies that need an enterprise-grade L&D function immediately without the time required to build one internally.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-900/50 p-8 rounded-2xl border border-white/10 hover:bg-slate-900 hover:border-white/20 transition-all group"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-maple-green opacity-0 -ml-7 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                Cost Optimization
              </h3>
              <p className="text-slate-400 font-light leading-relaxed">
                Large enterprises looking to convert fixed L&D overhead into a predictable, optimized operational expense.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-900/50 p-8 rounded-2xl border border-white/10 hover:bg-slate-900 hover:border-white/20 transition-all group"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-maple-green opacity-0 -ml-7 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                Global Franchises
              </h3>
              <p className="text-slate-400 font-light leading-relaxed">
                Ensuring consistent, high-quality training delivery across hundreds of distributed locations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      
      {/* FAQs */}
      <section className="py-12 md:py-16 relative z-10 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-satoshi font-bold text-4xl md:text-5xl text-white mb-6"
            >
              Frequently Asked Questions
            </motion.h2>
          </div>

          <div className="space-y-4">
            {[{"question":"Do we lose control of our learning strategy?","answer":"Absolutely not. You retain full strategic control and final approval. We act as the execution engine and strategic advisor."},{"question":"Who owns the intellectual property created?","answer":"You do. All custom content, frameworks, and materials created under a managed services agreement are owned entirely by your organization."},{"question":"Can we start small and scale up?","answer":"Yes, we often start by managing a specific function (like onboarding or sales training) and expand the mandate as we prove ROI."}].map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-sm ${
                  openFaqIndex === index 
                    ? "bg-slate-900/80 border-maple-green/50 shadow-lg shadow-maple-green/10" 
                    : "bg-slate-900/40 border-white/10 hover:bg-slate-900/60 hover:border-white/30"
                }`}
              >
                <button
                  className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-maple-green"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-medium text-white pr-8">{faq.question}</span>
                  <span className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors ${openFaqIndex === index ? 'bg-maple-green text-black' : 'bg-white/10 text-slate-300'}`}>
                    {openFaqIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-slate-300 font-light leading-relaxed border-t border-white/10 pt-4 mt-2 mx-6">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 relative bg-transparent overflow-hidden px-4 md:px-6">
        <div className="max-w-[1200px] mx-auto relative z-10">
          <CtaCard
            title="Ready to Create Better Managed Learning Solutions?"
            description="Let's design a learning solution that combines meaningful learning, engaging experiences, and the right technology for your organization."
            buttonText="Talk to Maple"
            inputPlaceholder="Email address"
            imageSrc="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop"
            onButtonClick={() => {
              window.location.href = "mailto:info@maplelearningsolutions.com?subject=Inquiry: Managed Learning Solutions";
            }}
          />
        </div>
      </section>
    </div>
  )
}
