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

export default function SaasPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)
  const [selectedSample, setSelectedSample] = useState<any | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  // Find relevant samples
  const relevantSamples = samples.filter(sample => ["saas-lms-implementation"].includes(sample.id))

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-maple-green/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop)" }}
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
                LearnTech
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight"
            >
              SaaS Learning Platforms
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-300 mb-10 font-light leading-relaxed"
            >
              Implement modern, scalable learning management systems.
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
      <section className="py-24 relative z-10 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                What is SaaS Learning Platforms?
              </h2>
              <div className="w-20 h-1 bg-maple-green mb-8"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-lg text-slate-300 leading-relaxed font-light">
                Navigate the complex landscape of learning technology with Maple. We help you select, implement, and optimize Software-as-a-Service (SaaS) learning platforms—including LMS, LXP, and capability academies—that deliver exceptional user experiences and robust administrative control.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      
      {/* Key Capabilities */}
      <section className="py-24 relative z-10 bg-slate-900/30">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
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
              What we deliver for SaaS Learning Platforms
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
                  <h3 className="text-xl font-bold text-white mb-2">Vendor Selection & Procurement</h3>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                    Objective analysis and RFP management to help you choose the right platform for your budget and goals.
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
                  <h3 className="text-xl font-bold text-white mb-2">System Implementation</h3>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                    End-to-end setup, configuration, and branding of your chosen SaaS platform.
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
                  <h3 className="text-xl font-bold text-white mb-2">Ecosystem Integration</h3>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                    Connecting your LMS with HRIS (Workday, SAP), CRM (Salesforce), and communication tools (Slack, Teams).
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
                  <h3 className="text-xl font-bold text-white mb-2">Platform Optimization</h3>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                    Auditing and reconfiguring underperforming existing platforms to improve adoption and reporting.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      
      {/* Use Cases */}
      <section className="py-24 relative z-10 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
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
                LMS Replacement
              </h3>
              <p className="text-slate-400 font-light leading-relaxed">
                Upgrading from an outdated legacy system to a modern, mobile-friendly SaaS platform.
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
                Extended Enterprise
              </h3>
              <p className="text-slate-400 font-light leading-relaxed">
                Setting up dedicated portals to train customers, partners, and external stakeholders.
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
                Learning Experience Platforms (LXP)
              </h3>
              <p className="text-slate-400 font-light leading-relaxed">
                Implementing platforms focused on self-directed learning, content curation, and skills taxonomy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      
      {/* Process */}
      <section className="py-24 relative z-10 border-t border-white/5 bg-slate-900/30">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
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
              How we approach SaaS Learning Platforms
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
                  <h3 className="text-xl font-bold text-white mb-2">Needs Analysis</h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">
                    Define technical requirements, user roles, security constraints, and success metrics.
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
                  <h3 className="text-xl font-bold text-white mb-2">Platform Evaluation</h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">
                    Review shortlisted platforms against your requirements and facilitate vendor demonstrations.
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
                  <h3 className="text-xl font-bold text-white mb-2">Configuration & Branding</h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">
                    Set up the environment, configure user permissions, and apply your corporate visual identity.
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
                  <h3 className="text-xl font-bold text-white mb-2">Integration & Migration</h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">
                    Connect APIs, set up single sign-on (SSO), and migrate historical data securely.
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
                  <h3 className="text-xl font-bold text-white mb-2">Training & Launch</h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">
                    Train your internal administrators and execute a comprehensive change management rollout for users.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Samples Showcase */}
      <section id="samples" className="py-24 relative z-10 border-t border-white/5 bg-slate-950">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <ServiceSamplesCarousel samples={relevantSamples} />
        </div>
      </section>

      
      {/* Why Maple */}
      <section className="py-24 relative z-10 bg-slate-900/30 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
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
              Our differentiators for SaaS Learning Platforms
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
              <h3 className="text-xl font-bold text-white mb-3">Unbiased Expertise</h3>
              <p className="text-slate-400 font-light leading-relaxed">
                We sit on your side of the table during vendor negotiations, ensuring you get exactly what you need.
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
              <h3 className="text-xl font-bold text-white mb-3">Technical Depth</h3>
              <p className="text-slate-400 font-light leading-relaxed">
                Our technical teams understand the nuances of complex enterprise integrations, SSO, and data compliance.
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
              <h3 className="text-xl font-bold text-white mb-3">User-Centric Configuration</h3>
              <p className="text-slate-400 font-light leading-relaxed">
                We configure systems to minimize clicks and friction, maximizing learner adoption rates.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      
      {/* FAQs */}
      <section className="py-24 relative z-10 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Frequently Asked Questions
            </motion.h2>
          </div>

          <div className="space-y-4">
            {[{"question":"How long does a typical LMS implementation take?","answer":"Depending on the complexity of integrations and data migration, a standard enterprise implementation typically takes between 8 to 16 weeks."},{"question":"Do you partner with specific LMS vendors?","answer":"We maintain deep relationships with leading vendors (like Docebo, Cornerstone, and Absorb), but our recommendations are always entirely agnostic and based purely on your requirements."},{"question":"What happens after the platform goes live?","answer":"We offer hypercare support immediately following launch, and can transition to long-term managed services if you need ongoing administrative support."}].map((faq, index) => (
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
      <section className="py-24 relative bg-transparent overflow-hidden px-4 md:px-6">
        <div className="max-w-[1200px] mx-auto relative z-10">
          <CtaCard
            title="Ready to Create Better SaaS Learning Platforms?"
            description="Let's design a learning solution that combines meaningful learning, engaging experiences, and the right technology for your organization."
            buttonText="Talk to Maple"
            inputPlaceholder="Email address"
            imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
            onButtonClick={() => {
              window.location.href = "mailto:info@maplelearningsolutions.com?subject=Inquiry: SaaS Learning Platforms";
            }}
          />
        </div>
      </section>
    </div>
  )
}
