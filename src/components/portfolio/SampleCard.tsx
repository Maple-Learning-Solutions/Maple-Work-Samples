"use client"

import { WorkSample } from "@/data/samples"
import { Play, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

interface SampleCardProps {
  sample: WorkSample
  onClick: (sample: WorkSample) => void
}

export default function SampleCard({ sample, onClick }: SampleCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col bg-slate-900/50 border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-maple-green/50 transition-colors duration-300"
      onClick={() => onClick(sample)}
    >
      {/* Thumbnail Area */}
      <div className="relative aspect-video bg-black overflow-hidden flex items-center justify-center">
        {sample.thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img 
            src={sample.thumbnail} 
            alt={sample.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-900 to-black flex items-center justify-center relative">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
            {/* Abstract placeholder visual */}
            <div className="w-24 h-24 border border-white/5 rounded-full flex items-center justify-center relative overflow-hidden group-hover:border-maple-green/30 transition-colors duration-500">
               <div className="absolute inset-0 bg-maple-green/10 blur-xl"></div>
            </div>
          </div>
        )}
        
        {/* Play Icon / Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-maple-green/90 text-black flex items-center justify-center transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-[0_0_20px_rgba(0,220,130,0.5)]">
            {sample.type === "video" ? <Play size={28} className="ml-1" /> : <ExternalLink size={28} />}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-maple-green transition-colors">
          {sample.title}
        </h3>
        
        <div className="flex flex-wrap gap-2 mb-4 mt-auto">
          <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">
            {sample.solution}
          </span>
          {sample.industry && (
            <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">
              {sample.industry}
            </span>
          )}
        </div>
        
        <div className="flex items-center text-sm font-medium text-slate-400 group-hover:text-white transition-colors pt-4 border-t border-white/10">
          View Experience <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
        </div>
      </div>
    </motion.div>
  )
}
