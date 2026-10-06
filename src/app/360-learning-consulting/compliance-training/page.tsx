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
import WhyMapleAccordion from "@/components/sections/WhyMapleAccordion";

export default function ComplianceTrainingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)
  const [selectedSample, setSelectedSample] = useState<any | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  // Find relevant samples
  const relevantSamples = samples.filter(sample => ["compliance-scenario-demo"].includes(sample.id))

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-maple-green/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(https://plus.unsplash.com/premium_photo-1661509825240-53f8d598ff16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q29tcGxpYW5jZSUyMFRyYWluaW5nfGVufDB8fDB8fHww)" }}
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
                360° Learning Consulting
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight"
            >
              Compliance Training
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-300 mb-10 font-light leading-relaxed"
            >
              Protect your business without boring your employees.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="#benefits" 
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
                What is Compliance Training?
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
                Compliance training is mandatory, but it doesn't have to be miserable. Maple transforms dry legal and regulatory requirements into engaging, scenario-based learning experiences that respect your employees' time while rigorously protecting your organization from risk.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      
      {/* Benefits Section */}
      <section id="benefits" className="py-24 relative z-10 border-t border-white/5 bg-slate-950">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider"
            >
              BENEFITS <span className="text-slate-400 font-light lowercase">of Compliance Training</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "REDUCED LEGAL & REGULATORY RISKS",
                desc: "Compliance training helps employees understand and follow laws and regulations relevant to their roles, reducing the risk of fines, penalties, and lawsuits.",
                image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80"
              },
              {
                num: "02",
                title: "MINIMIZED WORKPLACE RISKS",
                desc: "Compliance training in areas like safety and harassment prevention can help reduce incidents and create a safer work environment.",
                image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
              },
              {
                num: "03",
                title: "BETTER DECISION-MAKING",
                desc: "Employees who understand compliance rules can make informed, ethical decisions that align with company values and regulatory requirements.",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80"
              }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col bg-slate-900 border border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-maple-green/10 hover:-translate-y-1 hover:border-white/20 transition-all duration-300"
              >
                {/* Image Area */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-800 shrink-0">
                  <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-maple-green font-mono text-sm font-bold shadow-lg">
                    .{benefit.num}
                  </div>
                  <img 
                    src={benefit.image} 
                    alt={benefit.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300"></div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex flex-col flex-grow relative bg-slate-900">
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-maple-green transition-colors">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed flex-grow text-sm md:text-[15px]">
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 relative z-10 border-t border-white/5 bg-[#030712]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-16 md:mb-24 text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:items-end gap-4 md:gap-6 justify-center md:justify-start"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-wider">
                OUR PROCESS
              </h2>
              <p className="text-xl md:text-2xl text-slate-400 font-light pb-1 md:pb-2">
                From insight to measurable transformation
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            {[{"title":"ANALYZE AND ASSESS","desc":"We start by measuring your organization's current performance metrics, establishing a clear baseline that guides our journey forward."},{"title":"UNCOVER OPPORTUNITIES","desc":"Through benchmark analysis and performance mapping, we identify key areas where your organization can maximize its potential."},{"title":"DESIGN STRATEGIC SOLUTIONS","desc":"Our experts collaborate with your team to develop targeted solutions that address root causes and align with your business objectives."},{"title":"DRIVE AND MEASURE IMPACT","desc":"We implement solutions and track progress through data-driven metrics, ensuring measurable improvements and sustainable results."}].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative bg-transparent border border-white/20 pt-20 pb-16 px-6 xl:px-10 flex flex-col h-full hover:border-maple-green/50 transition-colors duration-300"
              >
                {/* Number Tab */}
                <div className="absolute top-0 left-0 bg-maple-green text-black font-bold text-lg px-4 py-2">
                  .{String(idx + 1).padStart(2, '0')}
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-white uppercase text-center mb-8 tracking-wide leading-tight">
                  {step.title}
                </h3>
                
                <div className="flex justify-center mb-8">
                  <div className="w-8 h-[2px] bg-maple-green opacity-80"></div>
                </div>
                
                <p className="text-slate-400 text-sm md:text-base font-light text-center leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
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
              What we deliver for Compliance Training
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
                  <h3 className="text-xl font-bold text-white mb-2">Test-Out Assessments</h3>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                    Respect experienced employees' time by allowing them to test out of content they already know.
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
                  <h3 className="text-xl font-bold text-white mb-2">Scenario-Based Ethics</h3>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                    Moving beyond 'read-and-click' to interactive dilemmas where learners must navigate grey areas.
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
                  <h3 className="text-xl font-bold text-white mb-2">Micro-Compliance</h3>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                    Breaking annual monolithic courses into monthly 3-minute refreshers to maintain constant awareness.
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
                  <h3 className="text-xl font-bold text-white mb-2">Global Localization</h3>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                    Adapting courses not just for language, but for regional legal nuances and cultural context.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      
      {/* Why Maple */}
      <WhyMapleAccordion subtitle="Expertise, technology, and learning experiences built around your Compliance Training goals." items={[{"title":"Strategic Planning Expertise","desc":"We combine deep instructional design knowledge with industry best practices to create Compliance Training strategies that align perfectly with your organizational objectives.","image":"https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"},{"title":"Data-Driven Insights","desc":"Our solutions are never based on guesswork. We utilize continuous performance mapping and learner analytics to adapt and refine our approach for maximum impact.","image":"https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"},{"title":"Proven Industry Experience","desc":"Benefit from extensive consulting expertise across diverse sectors, helping organizations overcome complex challenges with greater confidence and clarity.","image":"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"},{"title":"Results-Focused Approach","desc":"We don't just deliver training; we deliver behavioral change. Our focus remains entirely on tracking progress and ensuring measurable, sustainable business results.","image":"https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"}]} />

      
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
                Information Security
              </h3>
              <p className="text-slate-400 font-light leading-relaxed">
                Phishing simulations, data handling protocols, and GDPR/CCPA compliance.
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
                Workplace Conduct
              </h3>
              <p className="text-slate-400 font-light leading-relaxed">
                Anti-harassment, diversity, equity, and inclusion, and code of conduct training.
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
                Industry-Specific Regulation
              </h3>
              <p className="text-slate-400 font-light leading-relaxed">
                HIPAA for healthcare, OSHA for manufacturing, or FINRA for financial services.
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
            {[{"question":"Can you guarantee this training meets our legal requirements?","answer":"We guarantee the instructional integrity and technical tracking, but we always require your internal legal counsel to sign off on the final content."},{"question":"How do you handle annual updates when laws change?","answer":"We build compliance courses modularly. If a single regulation changes, we can update that specific 2-minute section without rebuilding the entire course."},{"question":"Is this better than buying off-the-shelf compliance libraries?","answer":"Off-the-shelf is cheaper, but custom compliance uses your specific policies, your brand, and your industry scenarios, which significantly increases retention and defensibility."}].map((faq, index) => (
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
            title="Ready to Create Better Compliance Training?"
            description="Let's design a learning solution that combines meaningful learning, engaging experiences, and the right technology for your organization."
            buttonText="Talk to Maple"
            inputPlaceholder="Email address"
            imageSrc="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2112&auto=format&fit=crop"
            onButtonClick={() => {
              window.location.href = "mailto:info@maplelearningsolutions.com?subject=Inquiry: Compliance Training";
            }}
          />
        </div>
      </section>
    </div>
  )
}
