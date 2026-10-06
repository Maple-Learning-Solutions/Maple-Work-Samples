"use client"

import { industries } from "@/data/industries"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Industries() {
  return (
    <section id="industries" className="py-24 relative z-10 border-y border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Learning Experiences Built for Every Industry
          </h2>
          <p className="text-xl text-slate-300 font-light">
            We understand the unique regulatory, cultural, and operational challenges of your sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col bg-white/95 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-maple-green/20 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image Area */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={industry.image} 
                  alt={industry.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {industry.name}
                </h3>
                
                <p className="text-slate-500 leading-relaxed mb-6 flex-grow text-[15px]">
                  {industry.description}
                </p>
                
                {/* <div className="flex items-center text-sm font-semibold text-slate-900 group-hover:text-maple-green transition-colors mt-auto pt-4 border-t border-slate-200">
                  Explore Solutions <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
