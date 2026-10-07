"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function LearntechCategoryPage() {
  return (
    <div className="min-h-screen bg-transparent text-white selection:bg-maple-green/30">
      {/* Category Hero */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop)" }}
          />
          <div className="absolute inset-0 bg-slate-950/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0.8)_0%,rgba(2,6,23,0)_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        </div>

        <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Learning Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 font-light leading-relaxed">
              Modernize your learning ecosystem with scalable SaaS and cloud-based platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 md:py-16 relative z-10 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-satoshi font-bold text-4xl md:text-5xl text-white mb-6">
                Overview
              </h2>
              <div className="w-20 h-1 bg-maple-green mb-8"></div>
            </div>
            <div>
              <p className="text-lg text-slate-300 leading-relaxed font-light">
                A great learning strategy is only as effective as the technology that delivers it. Maple's LearnTech division helps organizations architect, implement, and optimize modern learning ecosystems. Whether you need a flexible SaaS platform or a robust, secure cloud infrastructure, we ensure your technology seamlessly supports your learners and scales with your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-12 md:py-16 relative z-10 bg-slate-900/30 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="mb-16 text-center">
            <h2 className="font-satoshi font-bold text-4xl md:text-5xl text-white mb-4">
              Explore LearnTech
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our core capabilities in this area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <Link 
              href="/learntech/saas"
              className="bg-slate-950/50 p-8 rounded-2xl border border-white/10 hover:border-maple-green/50 hover:bg-slate-900 transition-all group flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-between">
                SaaS Learning Platforms
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-maple-green group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-slate-400 font-light leading-relaxed mb-6 flex-grow text-sm">
                Implement modern, scalable learning management systems.
              </p>
            </Link>
            
            <Link 
              href="/learntech/cloud"
              className="bg-slate-950/50 p-8 rounded-2xl border border-white/10 hover:border-maple-green/50 hover:bg-slate-900 transition-all group flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-between">
                Cloud Learning Infrastructure
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-maple-green group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-slate-400 font-light leading-relaxed mb-6 flex-grow text-sm">
                Secure, scalable cloud environments for enterprise learning.
              </p>
            </Link>
            
          </div>
        </div>
      </section>
    </div>
  )
}
