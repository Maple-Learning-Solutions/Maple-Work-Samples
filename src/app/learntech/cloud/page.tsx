"use client"

import React, { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, ArrowRight, ShieldCheck, Plus, Minus, Check, X } from "lucide-react"

export default function CloudPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-maple-green/30">
      {/* Hero Section - SaaS Dashboard Layout */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden min-h-[90vh] flex flex-col items-center justify-center">
        {/* Modern SaaS Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-950" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-maple-green/20 blur-[120px] rounded-full opacity-50" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-maple-green/10 text-maple-green text-sm font-semibold tracking-wider uppercase mb-6 border border-maple-green/20">
                LearnTech Cloud
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
            >
              Cloud Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-maple-green to-emerald-400">Infrastructure</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-400 mb-10 font-light leading-relaxed max-w-3xl mx-auto"
            >
              Secure, scalable cloud environments for enterprise learning. Take total control over your data, performance, and integrations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="#demo" 
                className="px-8 py-4 bg-maple-green text-black font-bold rounded-xl hover:scale-105 transition-all text-center shadow-[0_0_20px_rgba(202,255,0,0.3)]"
              >
                Start Free Trial
              </Link>
              <Link 
                href="#contact" 
                className="px-8 py-4 bg-white/5 text-white font-semibold rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm border border-white/10 text-center flex items-center justify-center gap-2"
              >
                Book a Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Dashboard Image & Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10 bottom-[-2px] h-1/2 mt-auto"></div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-2 backdrop-blur-sm shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-maple-green to-transparent"></div>
              <img 
                src="/dashboard.gif" 
                alt="Cloud Infrastructure Dashboard" 
                className="w-full h-auto rounded-xl shadow-2xl object-cover relative z-0"
              />
            </div>
            
            {/* Floating Stats */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -left-12 top-1/4 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-xl z-20 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-maple-green/20 flex items-center justify-center text-maple-green">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">99.99%</div>
                  <div className="text-xs text-slate-400">Uptime SLA</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute -right-12 bottom-1/3 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-xl z-20 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">Infinite</div>
                  <div className="text-xs text-slate-400">Scalability</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Logos & Stats Section (Off-White Background) */}
      <section className="py-20 bg-[#F8F9FA] text-slate-900 overflow-hidden border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-[1400px]">
          
          {/* Trusted By Logos */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-24 w-full"
          >
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-10">Trusted by innovative companies worldwide</p>
            
            <div className="relative w-full flex overflow-hidden">
              <style dangerouslySetInnerHTML={{__html: `
                @keyframes marquee {
                  0% { transform: translateX(0%); }
                  100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                  animation: marquee 40s linear infinite;
                }
              `}} />
              
              <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                {/* First Set */}
                <div className="flex items-center transition-all duration-500">
                  {[...Array(14)].map((_, i) => (
                    <div key={`logo-1-${i}`} className="w-40 md:w-56 flex justify-center items-center shrink-0">
                      <img 
                        src={`/c${i + 1}.png`} 
                        alt={`Client ${i + 1}`} 
                        className="max-h-10 md:max-h-14 max-w-[85%] object-contain hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
                {/* Second Set */}
                <div className="flex items-center transition-all duration-500">
                  {[...Array(14)].map((_, i) => (
                    <div key={`logo-2-${i}`} className="w-40 md:w-56 flex justify-center items-center shrink-0">
                      <img 
                        src={`/c${i + 1}.png`} 
                        alt={`Client ${i + 1}`} 
                        className="max-h-10 md:max-h-14 max-w-[85%] object-contain hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cloud Stats Section */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                See how powerful and scalable our <br className="hidden md:block" /> Cloud Learning Infrastructure is!
              </h2>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
                Manage every aspect of your learning environments with robust, secure architectures that simplify deployment, data integration, and global delivery. Choose the best cloud topology—our infrastructure adapts to your workflow for smarter, <span className="font-semibold text-slate-900">faster enterprise learning.</span>
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center mt-20">
              {/* Stat 1 */}
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 flex items-center justify-center mb-4">
                  <div className="absolute inset-0 text-blue-200 z-0 animate-pulse">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current">
                      <path d="M42.7,-74.6C56.6,-66.2,69.9,-56.3,79.5,-43.3C89.1,-30.3,94.9,-15.1,93.6,-0.7C92.2,13.6,83.7,27.3,74.5,40.4C65.3,53.5,55.3,66,42.5,73.4C29.7,80.9,14.8,83.3,0.5,82.3C-13.8,81.4,-27.6,77.1,-40.8,69.9C-53.9,62.8,-66.5,52.8,-75.4,40.1C-84.3,27.3,-89.6,11.8,-88.4,-3C-87.1,-17.9,-79.3,-32.1,-69.1,-43.5C-58.8,-54.9,-46,-63.5,-32.5,-72C-19,-80.5,-4.8,-88.9,5,-87.6C14.8,-86.3,28.8,-83,42.7,-74.6Z" transform="translate(100 100)" />
                    </svg>
                  </div>
                  <span className="relative z-10 text-5xl font-bold text-slate-800">100%</span>
                </div>
                <p className="text-slate-500 font-medium leading-tight">Data sovereignty<br />compliance</p>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 flex items-center justify-center mb-4">
                  <div className="absolute inset-0 text-amber-200 z-0 animate-pulse" style={{ animationDelay: '1s' }}>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current">
                      <path d="M51.9,-72.1C65.2,-64.6,72.6,-47,77.7,-29.4C82.8,-11.9,85.6,5.5,80.9,20.8C76.2,36,64,49.1,50.1,59.3C36.2,69.5,20.7,76.9,4.2,71C-12.2,65,-29.5,45.7,-42.6,31.4C-55.7,17,-64.5,7.6,-66.3,-2.3C-68.1,-12.3,-62.8,-22.8,-54.8,-31.6C-46.8,-40.3,-36,-47.4,-24.5,-55.8C-12.9,-64.2,-0.7,-74,15.6,-77.2C31.8,-80.4,48.2,-77,51.9,-72.1Z" transform="translate(100 100)" />
                    </svg>
                  </div>
                  <span className="relative z-10 text-5xl font-bold text-slate-800">3x</span>
                </div>
                <p className="text-slate-500 font-medium leading-tight">Faster content<br />delivery globally</p>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 flex items-center justify-center mb-4">
                  <div className="absolute inset-0 text-emerald-200 z-0 animate-pulse" style={{ animationDelay: '2s' }}>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current">
                      <path d="M48.4,-70.6C60.2,-58.5,65.6,-40.3,71,-22.6C76.4,-4.9,81.9,12.3,76.4,26.4C70.9,40.5,54.4,51.5,38.1,60.8C21.8,70.1,5.6,77.7,-9.8,75C-25.2,72.3,-39.8,59.3,-52.1,45.4C-64.4,31.5,-74.4,16.7,-75.4,1.4C-76.4,-14,-68.4,-30,-57.4,-42.5C-46.3,-55.1,-32.2,-64.2,-17.1,-69.1C-2,-74,15.8,-74.8,32.4,-72.3C49.1,-69.8,65.8,-63.9,48.4,-70.6Z" transform="translate(100 100)" />
                    </svg>
                  </div>
                  <span className="relative z-10 text-5xl font-bold text-slate-800">100k+</span>
                </div>
                <p className="text-slate-500 font-medium leading-tight">Concurrent users<br />supported</p>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 flex items-center justify-center mb-4">
                  <div className="absolute inset-0 text-rose-200 z-0 animate-pulse" style={{ animationDelay: '3s' }}>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current">
                      <path d="M44.7,-76.4C58.4,-69.2,70.5,-58.3,79.5,-44.6C88.4,-31,94.3,-14.5,91.8,1C89.3,16.5,78.5,31,67.6,44.1C56.7,57.1,45.8,68.6,31.8,75C17.9,81.5,1.1,82.8,-14.2,79.4C-29.4,76.1,-43,68,-54.6,57.3C-66.2,46.5,-75.7,33.1,-81.4,17.8C-87,2.5,-88.7,-14.7,-82.9,-29.6C-77.1,-44.5,-63.7,-57.1,-49.1,-64.2C-34.5,-71.4,-18.8,-73.2,-2.2,-69.5C14.4,-65.8,30.9,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
                    </svg>
                  </div>
                  <span className="relative z-10 text-5xl font-bold text-slate-800">40%</span>
                </div>
                <p className="text-slate-500 font-medium leading-tight">Reduction in<br />hosting costs</p>
              </div>
            </div>
          </div>

          {/* Comparison Table Section */}
          <div className="mt-32 max-w-5xl mx-auto pb-12 relative">
            <div className="absolute top-0 right-0 -mt-12 -mr-12 opacity-30 pointer-events-none hidden md:block">
              {/* Scribble decoration */}
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 60 C 30 10, 50 100, 70 50 S 110 90, 115 20" stroke="#CAFF00" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            
            <div className="text-center mb-12 relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                Standard SaaS isn't always enough
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Maple Cloud Infrastructure gives you <span className="font-semibold text-slate-900">total control</span>, privacy, and performance that shared multi-tenant systems simply cannot provide.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 overflow-hidden relative z-10">
              {/* Table Header */}
              <div className="grid grid-cols-3 text-center border-b border-slate-100 bg-white">
                <div className="p-6 text-slate-500 font-medium text-sm md:text-base flex items-center justify-center tracking-wider">FEATURES</div>
                <div className="p-6 bg-emerald-50/50 flex items-center justify-center border-x border-slate-100">
                  <div className="flex items-center justify-center text-emerald-700 font-bold">
                    Maple Cloud
                  </div>
                </div>
                <div className="p-6 text-slate-500 font-medium text-sm md:text-base flex items-center justify-center">Standard SaaS LMS</div>
              </div>

              {/* Table Rows */}
              {[
                { feature: 'Data Sovereignty', maple: 'Total control & local residency', other: 'Shared databases, limited control', otherIcon: 'X' },
                { feature: 'Scalability', maple: 'Infinite auto-scaling', other: 'Restricted by tier limits', otherIcon: 'Minus' },
                { feature: 'Security', maple: 'Dedicated single-tenant', other: 'Multi-tenant risks', otherIcon: 'X' },
                { feature: 'Customization', maple: 'Deep architectural changes', other: 'Only superficial UI tweaks', otherIcon: 'X' },
                { feature: 'Integration', maple: 'Headless API-first', other: 'Rigid standard connectors', otherIcon: 'Minus' },
                { feature: 'Compliance', maple: 'SOC2, HIPAA, FedRAMP ready', other: 'Basic compliance only', otherIcon: 'Check' },
                { feature: 'Performance', maple: 'Dedicated resources, global CDN', other: 'Shared resources, throttle limits', otherIcon: 'Minus' }
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-3 text-center border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors">
                  <div className="p-4 md:p-6 text-slate-600 flex items-center justify-center text-sm md:text-base">{row.feature}</div>
                  
                  <div className="p-4 md:p-6 bg-emerald-50/30 flex items-center justify-center gap-2 border-x border-slate-100 text-sm md:text-base text-slate-800 font-medium">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-600 shrink-0" strokeWidth={3} />
                    <span className="text-left leading-tight">{row.maple}</span>
                  </div>
                  
                  <div className="p-4 md:p-6 flex items-center justify-center gap-2 text-sm md:text-base text-slate-600">
                    {row.otherIcon === 'X' && <X className="w-4 h-4 md:w-5 md:h-5 text-slate-900 shrink-0" strokeWidth={2.5} />}
                    {row.otherIcon === 'Check' && <Check className="w-4 h-4 md:w-5 md:h-5 text-slate-900 shrink-0" strokeWidth={2.5} />}
                    {row.otherIcon === 'Minus' && <Minus className="w-4 h-4 md:w-5 md:h-5 text-slate-900 shrink-0" strokeWidth={2.5} />}
                    <span className="text-left leading-tight">{row.other}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA After Table - Custom Container Design */}
            <div className="mt-20 mb-8 relative rounded-2xl overflow-hidden bg-[#1B4055] text-left">
              {/* Decorative Background Shapes */}
              <div className="absolute -top-[75%] -right-[45%] w-[800px] h-[800px] bg-[#0091B6] rounded-full z-0 hidden md:block" />
              <div className="absolute -top-[75%] -right-[45%] w-[700px] h-[700px] bg-[#53D0F6] rounded-full z-0 hidden md:block" />
              
              {/* Orange Quarter Circle */}
              <div className="absolute bottom-30 right-[25%] w-16 h-16 bg-[#F97316] rounded-bl-full z-0 hidden md:block" />

              <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 flex flex-col md:w-[65%]">
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Discover the Power of Custom Cloud
                </h3>
                <p className="text-slate-200 mb-10 text-lg leading-relaxed max-w-xl">
                  Explore how a bespoke cloud architecture can secure your data and scale your learning delivery infinitely.
                </p>
                <div>
                  <a 
                    href="#contact" 
                    className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-transparent border border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all group w-fit"
                  >
                    Talk to our Architects 
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
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
            {[{"question":"Is cloud infrastructure more expensive than SaaS?","answer":"Initial setup costs can be higher, but at high scale (e.g., hundreds of thousands of external users), a custom cloud architecture can often be significantly more cost-effective than per-seat SaaS licensing."},{"question":"Which cloud providers do you work with?","answer":"We are proficient in AWS, Microsoft Azure, and Google Cloud Platform, and will align with your organization's existing IT preferences."},{"question":"How do you handle data privacy?","answer":"We design architectures that enforce strict data residency, encryption at rest and in transit, and granular access controls."}].map((faq, index) => (
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
    </div>
  )
}
