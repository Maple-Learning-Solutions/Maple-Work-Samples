"use client"

import { categories } from "@/data/samples"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { useRef } from "react"

interface SampleFiltersProps {
  activeCategory: string
  setActiveCategory: (category: string) => void
}

export default function SampleFilters({ activeCategory, setActiveCategory }: SampleFiltersProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' })
    }
  }

  return (
    <div className="relative mb-12 flex items-center">
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto hide-scrollbar gap-2 py-2 pr-12 w-full snap-x"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`relative px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors snap-start ${
              activeCategory === category
                ? "text-black"
                : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"
            }`}
          >
            {activeCategory === category && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-maple-green rounded-full shadow-[0_0_15px_rgba(0,220,130,0.3)]"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        ))}
      </div>
      
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent pointer-events-none flex items-center justify-end pr-2">
      </div>
      <button 
        onClick={scrollRight}
        className="absolute right-0 bg-black/80 backdrop-blur border border-white/10 rounded-full p-2 text-white hover:text-maple-green hover:border-maple-green transition-colors"
        aria-label="Scroll categories right"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  )
}
