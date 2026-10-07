"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { WorkSample } from "@/data/samples"
import SampleCard from "./SampleCard"
import SampleViewer from "./SampleViewer"

interface ServiceSamplesCarouselProps {
  samples: WorkSample[]
  serviceName?: string
}

export default function ServiceSamplesCarousel({ samples, serviceName }: ServiceSamplesCarouselProps) {
  const [selectedSample, setSelectedSample] = useState<WorkSample | null>(null)
  
  // Show only up to 3 samples to maintain the clean 3-card layout
  const displaySamples = samples.slice(0, 3)

  if (displaySamples.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="font-satoshi font-bold text-4xl md:text-5xl text-white mb-6">Explore Our Work</h2>
        <div className="max-w-2xl mx-auto bg-slate-950/50 border border-white/10 rounded-2xl p-12">
          <div className="inline-flex w-16 h-16 rounded-full bg-white/5 items-center justify-center mb-6">
            <span className="text-3xl">🚀</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Sample Showcase Coming Soon</h3>
          <p className="text-slate-400">
            We are currently curating the best {serviceName ? serviceName : "learning"} experiences to display here. 
            Contact us to request a private demonstration of our capabilities in this area.
          </p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-satoshi font-bold text-4xl md:text-5xl text-white mb-4"
        >
          Explore Our Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 max-w-2xl"
        >
          Explore selected learning experiences and digital solutions created by Maple.
        </motion.p>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {displaySamples.map((sample) => (
            <SampleCard 
              key={sample.id} 
              sample={sample} 
              onClick={() => setSelectedSample(sample)} 
            />
          ))}
        </AnimatePresence>
      </motion.div>

      <SampleViewer 
        sample={selectedSample} 
        isOpen={!!selectedSample} 
        onClose={() => setSelectedSample(null)} 
      />
    </>
  )
}
