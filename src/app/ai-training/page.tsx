"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function AiTrainingCategoryPage() {
  return (
    <div className="min-h-screen bg-transparent text-white selection:bg-maple-green/30">
      {/* Category Hero */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop)" }}
          />
          <div className="absolute inset-0 bg-slate-950/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0.8)_0%,rgba(2,6,23,0)_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        </div>

        <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              AI Training & Enablement
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 font-light leading-relaxed">
              Equip your workforce with the practical AI skills needed to accelerate productivity and drive innovation.
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
                As artificial intelligence reshapes the modern workplace, organizations need more than just tools—they need teams capable of leveraging them effectively. Maple's AI Training programs are designed to demystify artificial intelligence, providing hands-on, role-specific learning experiences that empower your workforce to integrate AI into their daily operations seamlessly.
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
              Explore AI Training
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our core capabilities in this area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <Link 
              href="/ai-training/foundations"
              className="bg-slate-950/50 p-8 rounded-2xl border border-white/10 hover:border-maple-green/50 hover:bg-slate-900 transition-all group flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-between">
                AI Foundations
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-maple-green group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-slate-400 font-light leading-relaxed mb-6 flex-grow text-sm">
                Build practical AI literacy and application skills.
              </p>
            </Link>
            
            <Link 
              href="/ai-training/sales-leadership"
              className="bg-slate-950/50 p-8 rounded-2xl border border-white/10 hover:border-maple-green/50 hover:bg-slate-900 transition-all group flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-between">
                AI for Sales & Leadership
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-maple-green group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-slate-400 font-light leading-relaxed mb-6 flex-grow text-sm">
                Apply AI to sales, decision-making and leadership workflows.
              </p>
            </Link>
            
          </div>
        </div>
      </section>
    </div>
  )
}
