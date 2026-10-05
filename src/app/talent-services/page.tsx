"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function TalentServicesCategoryPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-maple-green/30">
      {/* Category Hero */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop)" }}
          />
          <div className="absolute inset-0 bg-slate-950/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0.8)_0%,rgba(2,6,23,0)_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        </div>

        <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Specialized Learning Talent
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 font-light leading-relaxed">
              Scale your L&D capabilities instantly with our vetted instructional designers, developers, and learning administrators.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 relative z-10 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Overview
              </h2>
              <div className="w-20 h-1 bg-maple-green mb-8"></div>
            </div>
            <div>
              <p className="text-lg text-slate-300 leading-relaxed font-light">
                Building and maintaining an internal Learning and Development team capable of handling every technical and instructional challenge is difficult and expensive. Maple's Talent Services provide you with flexible, elite learning professionals who integrate seamlessly into your team, allowing you to scale up for major initiatives and maintain operational excellence without overhead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 relative z-10 bg-slate-900/30 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explore Talent Services
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our core capabilities in this area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <Link 
              href="/talent-services/staff-augmentation"
              className="bg-slate-950/50 p-8 rounded-2xl border border-white/10 hover:border-maple-green/50 hover:bg-slate-900 transition-all group flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-between">
                L&D Staff Augmentation
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-maple-green group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-slate-400 font-light leading-relaxed mb-6 flex-grow text-sm">
                Instantly add specialized expertise to your learning team.
              </p>
            </Link>
            
            <Link 
              href="/talent-services/managed-learning-solutions"
              className="bg-slate-950/50 p-8 rounded-2xl border border-white/10 hover:border-maple-green/50 hover:bg-slate-900 transition-all group flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-between">
                Managed Learning Solutions
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-maple-green group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-slate-400 font-light leading-relaxed mb-6 flex-grow text-sm">
                Outsource your end-to-end training operations.
              </p>
            </Link>
            
            <Link 
              href="/talent-services/learning-administration"
              className="bg-slate-950/50 p-8 rounded-2xl border border-white/10 hover:border-maple-green/50 hover:bg-slate-900 transition-all group flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-between">
                Learning Administration
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-maple-green group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-slate-400 font-light leading-relaxed mb-6 flex-grow text-sm">
                Keep your learning technology running flawlessly.
              </p>
            </Link>
            
          </div>
        </div>
      </section>
    </div>
  )
}
