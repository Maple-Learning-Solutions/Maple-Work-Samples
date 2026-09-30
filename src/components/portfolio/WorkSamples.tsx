"use client"

import { useState } from "react"
import { samples, WorkSample } from "@/data/samples"
import SampleCard from "./SampleCard"
import SampleFilters from "./SampleFilters"
import SampleViewer from "./SampleViewer"
import { motion, AnimatePresence } from "framer-motion"

export default function WorkSamples() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedSample, setSelectedSample] = useState<WorkSample | null>(null)

  const filteredSamples = samples.filter((sample) => {
    if (activeCategory === "All") return true
    return sample.solution === activeCategory
  })

  return (
    <section id="work" className="pt-16 pb-32 relative bg-transparent min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-5">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Explore Our Work
          </h2>
          <p className="text-xl text-slate-400 font-light">
            Explore selected digital learning experiences created by Maple.
          </p>
        </div>

        <SampleFilters 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredSamples.map((sample) => (
              <SampleCard 
                key={sample.id} 
                sample={sample} 
                onClick={setSelectedSample} 
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredSamples.length === 0 && (
          <div className="py-20 text-center">
            <div className="inline-flex w-16 h-16 rounded-full bg-white/5 items-center justify-center mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-xl font-medium text-white mb-2">No experiences found</h3>
            <p className="text-slate-400">Check back later for more examples in this category.</p>
          </div>
        )}
      </div>

      <SampleViewer 
        sample={selectedSample} 
        isOpen={!!selectedSample} 
        onClose={() => setSelectedSample(null)} 
      />
    </section>
  )
}
