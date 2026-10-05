"use client"

import { useState } from "react"
import { samples, WorkSample } from "@/data/samples"
import SampleCard from "./SampleCard"
import SampleFilters from "./SampleFilters"
import SampleViewer from "./SampleViewer"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function WorkSamples() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedSample, setSelectedSample] = useState<WorkSample | null>(null)
  const [page, setPage] = useState(0)

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat)
    setPage(0)
  }

  const filteredSamples = samples.filter((sample) => {
    if (activeCategory === "All") return true
    return sample.solution === activeCategory
  })

  const itemsPerPage = 4
  const totalPages = Math.ceil(filteredSamples.length / itemsPerPage)
  const currentSamples = filteredSamples.slice(page * itemsPerPage, (page + 1) * itemsPerPage)

  const nextPage = () => setPage((p) => (p + 1) % totalPages)
  const prevPage = () => setPage((p) => (p - 1 + totalPages) % totalPages)

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
          setActiveCategory={handleCategoryChange} 
        />

        <div className="relative">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-8"
          >
            <AnimatePresence mode="popLayout">
              {currentSamples.map((sample) => (
                <SampleCard 
                  key={sample.id} 
                  sample={sample} 
                  onClick={setSelectedSample} 
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-8">
              <button 
                onClick={prevPage}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors hover:border-maple-green group"
              >
                <ChevronLeft size={24} className="group-hover:text-maple-green transition-colors" />
              </button>
              
              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setPage(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${page === i ? 'bg-maple-green' : 'bg-white/20 hover:bg-white/40'}`}
                    aria-label={`Go to page ${i + 1}`}
                  />
                ))}
              </div>

              <button 
                onClick={nextPage}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors hover:border-maple-green group"
              >
                <ChevronRight size={24} className="group-hover:text-maple-green transition-colors" />
              </button>
            </div>
          )}
        </div>

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
