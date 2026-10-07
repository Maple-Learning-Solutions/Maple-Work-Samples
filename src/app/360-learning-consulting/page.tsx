"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function ThreeSixtyLearningConsultingCategoryPage() {
  return (
    <div className="min-h-screen bg-transparent text-white selection:bg-maple-green/30">
      {/* Category Hero */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop)" }}
          />
          <div className="absolute inset-0 bg-slate-950/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0.8)_0%,rgba(2,6,23,0)_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        </div>

        <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              End-to-End Learning Consulting
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 font-light leading-relaxed">
              Transform your organization's capabilities with strategic, immersive, and measurable learning solutions.
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
                Maple Learning Solutions provides comprehensive consulting that spans the entire learning lifecycle. From initial strategic roadmapping to the development of highly immersive custom content, and the rigorous evaluation of business impact, we partner with you to build a culture of continuous high performance.
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
              Explore 360° Learning Consulting
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our core capabilities in this area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <Link 
              href="/360-learning-consulting/gamification"
              className="bg-slate-950/50 p-8 rounded-2xl border border-white/10 hover:border-maple-green/50 hover:bg-slate-900 transition-all group flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-between">
                Gamification for Modern Learning
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-maple-green group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-slate-400 font-light leading-relaxed mb-6 flex-grow text-sm">
                Transform traditional learning experiences into engaging, interactive journeys.
              </p>
            </Link>
            
            <Link 
              href="/360-learning-consulting/simulation"
              className="bg-slate-950/50 p-8 rounded-2xl border border-white/10 hover:border-maple-green/50 hover:bg-slate-900 transition-all group flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-between">
                Simulation-Based Learning
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-maple-green group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-slate-400 font-light leading-relaxed mb-6 flex-grow text-sm">
                Practice critical skills in a safe, realistic environment.
              </p>
            </Link>
            
            <Link 
              href="/360-learning-consulting/ar-vr-training"
              className="bg-slate-950/50 p-8 rounded-2xl border border-white/10 hover:border-maple-green/50 hover:bg-slate-900 transition-all group flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-between">
                AR/VR Training
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-maple-green group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-slate-400 font-light leading-relaxed mb-6 flex-grow text-sm">
                Immersive, spatial learning for high-stakes environments.
              </p>
            </Link>
            
            <Link 
              href="/360-learning-consulting/ilt"
              className="bg-slate-950/50 p-8 rounded-2xl border border-white/10 hover:border-maple-green/50 hover:bg-slate-900 transition-all group flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-between">
                Instructor-Led Training (ILT)
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-maple-green group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-slate-400 font-light leading-relaxed mb-6 flex-grow text-sm">
                High-impact, facilitated live learning experiences.
              </p>
            </Link>
            
            <Link 
              href="/360-learning-consulting/vilt"
              className="bg-slate-950/50 p-8 rounded-2xl border border-white/10 hover:border-maple-green/50 hover:bg-slate-900 transition-all group flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-between">
                Virtual Instructor-Led Training (VILT)
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-maple-green group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-slate-400 font-light leading-relaxed mb-6 flex-grow text-sm">
                Engaging live learning across the globe.
              </p>
            </Link>
            
            <Link 
              href="/360-learning-consulting/microlearning"
              className="bg-slate-950/50 p-8 rounded-2xl border border-white/10 hover:border-maple-green/50 hover:bg-slate-900 transition-all group flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-between">
                Microlearning
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-maple-green group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-slate-400 font-light leading-relaxed mb-6 flex-grow text-sm">
                Bite-sized learning in the flow of work.
              </p>
            </Link>
            
            <Link 
              href="/360-learning-consulting/blended-learning"
              className="bg-slate-950/50 p-8 rounded-2xl border border-white/10 hover:border-maple-green/50 hover:bg-slate-900 transition-all group flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-between">
                Blended Learning Journeys
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-maple-green group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-slate-400 font-light leading-relaxed mb-6 flex-grow text-sm">
                The perfect mix of digital and live instruction.
              </p>
            </Link>
            
            <Link 
              href="/360-learning-consulting/elearning-development"
              className="bg-slate-950/50 p-8 rounded-2xl border border-white/10 hover:border-maple-green/50 hover:bg-slate-900 transition-all group flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-between">
                Custom eLearning Development
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-maple-green group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-slate-400 font-light leading-relaxed mb-6 flex-grow text-sm">
                Premium, interactive digital courses at scale.
              </p>
            </Link>
            
            <Link 
              href="/360-learning-consulting/video-learning"
              className="bg-slate-950/50 p-8 rounded-2xl border border-white/10 hover:border-maple-green/50 hover:bg-slate-900 transition-all group flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-between">
                Video Learning Production
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-maple-green group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-slate-400 font-light leading-relaxed mb-6 flex-grow text-sm">
                High-fidelity educational video content.
              </p>
            </Link>
            
            <Link 
              href="/360-learning-consulting/it-training"
              className="bg-slate-950/50 p-8 rounded-2xl border border-white/10 hover:border-maple-green/50 hover:bg-slate-900 transition-all group flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-between">
                IT & Technical Training
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-maple-green group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-slate-400 font-light leading-relaxed mb-6 flex-grow text-sm">
                Bridge the gap between technology and the business.
              </p>
            </Link>
            
            <Link 
              href="/360-learning-consulting/immersive-learning"
              className="bg-slate-950/50 p-8 rounded-2xl border border-white/10 hover:border-maple-green/50 hover:bg-slate-900 transition-all group flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-between">
                Immersive Learning
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-maple-green group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-slate-400 font-light leading-relaxed mb-6 flex-grow text-sm">
                Deep psychological engagement for critical skill acquisition.
              </p>
            </Link>
            
            <Link 
              href="/360-learning-consulting/performance-management"
              className="bg-slate-950/50 p-8 rounded-2xl border border-white/10 hover:border-maple-green/50 hover:bg-slate-900 transition-all group flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-between">
                Performance Management & Evaluation
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-maple-green group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-slate-400 font-light leading-relaxed mb-6 flex-grow text-sm">
                Align employee performance with strategic goals.
              </p>
            </Link>
            
            <Link 
              href="/360-learning-consulting/organizational-development"
              className="bg-slate-950/50 p-8 rounded-2xl border border-white/10 hover:border-maple-green/50 hover:bg-slate-900 transition-all group flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-between">
                Organization Development
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-maple-green group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-slate-400 font-light leading-relaxed mb-6 flex-grow text-sm">
                Architecting agile, high-performing organizations.
              </p>
            </Link>
            
            <Link 
              href="/360-learning-consulting/learning-strategy"
              className="bg-slate-950/50 p-8 rounded-2xl border border-white/10 hover:border-maple-green/50 hover:bg-slate-900 transition-all group flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-between">
                Learning Strategy & Consulting
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-maple-green group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-slate-400 font-light leading-relaxed mb-6 flex-grow text-sm">
                Transform L&D from a cost center to a strategic partner.
              </p>
            </Link>
            
            <Link 
              href="/360-learning-consulting/learning-analytics"
              className="bg-slate-950/50 p-8 rounded-2xl border border-white/10 hover:border-maple-green/50 hover:bg-slate-900 transition-all group flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-between">
                Learning Analytics & Data Insights
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-maple-green group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-slate-400 font-light leading-relaxed mb-6 flex-grow text-sm">
                Prove the business impact of your learning programs.
              </p>
            </Link>
            
            <Link 
              href="/360-learning-consulting/employee-onboarding"
              className="bg-slate-950/50 p-8 rounded-2xl border border-white/10 hover:border-maple-green/50 hover:bg-slate-900 transition-all group flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-between">
                Employee Onboarding & Engagement
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-maple-green group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-slate-400 font-light leading-relaxed mb-6 flex-grow text-sm">
                Accelerate time-to-competence for new hires.
              </p>
            </Link>
            
            <Link 
              href="/360-learning-consulting/leadership-development"
              className="bg-slate-950/50 p-8 rounded-2xl border border-white/10 hover:border-maple-green/50 hover:bg-slate-900 transition-all group flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-between">
                Leadership Development
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-maple-green group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-slate-400 font-light leading-relaxed mb-6 flex-grow text-sm">
                Build the next generation of resilient leaders.
              </p>
            </Link>
            
            <Link 
              href="/360-learning-consulting/compliance-training"
              className="bg-slate-950/50 p-8 rounded-2xl border border-white/10 hover:border-maple-green/50 hover:bg-slate-900 transition-all group flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-between">
                Compliance Training
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-maple-green group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-slate-400 font-light leading-relaxed mb-6 flex-grow text-sm">
                Protect your business without boring your employees.
              </p>
            </Link>
            
            <Link 
              href="/360-learning-consulting/systems-process-training"
              className="bg-slate-950/50 p-8 rounded-2xl border border-white/10 hover:border-maple-green/50 hover:bg-slate-900 transition-all group flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-between">
                Systems & Process Training
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-maple-green group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-slate-400 font-light leading-relaxed mb-6 flex-grow text-sm">
                Ensure flawless adoption of critical enterprise tools.
              </p>
            </Link>
            
            <Link 
              href="/360-learning-consulting/sales-enablement"
              className="bg-slate-950/50 p-8 rounded-2xl border border-white/10 hover:border-maple-green/50 hover:bg-slate-900 transition-all group flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-between">
                Sales Enablement Training
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-maple-green group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-slate-400 font-light leading-relaxed mb-6 flex-grow text-sm">
                Accelerate revenue with high-impact sales training.
              </p>
            </Link>
            
            <Link 
              href="/360-learning-consulting/learning-delivery"
              className="bg-slate-950/50 p-8 rounded-2xl border border-white/10 hover:border-maple-green/50 hover:bg-slate-900 transition-all group flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-between">
                Learning Delivery & Evaluation
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-maple-green group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-slate-400 font-light leading-relaxed mb-6 flex-grow text-sm">
                Flawless execution and measurable impact.
              </p>
            </Link>
            
          </div>
        </div>
      </section>
    </div>
  )
}
