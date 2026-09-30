"use client"

import { motion, useInView, animate } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 10, suffix: "+", label: "Years\nExperience" },
  { value: 500, suffix: "+", label: "Learning\nExperiences" },
  { value: 50, suffix: "+", label: "Global\nClients" },
  { value: 15, suffix: "+", label: "Industries\nServed" },
]

function StatItem({ stat, index }: { stat: typeof stats[0], index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, stat.value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (val) => setCount(Math.floor(val)),
      })
      return controls.stop
    }
  }, [isInView, stat.value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col items-center text-center"
    >
      <div className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tighter">
        {count}
        <span className="text-maple-green">{stat.suffix}</span>
      </div>
      <div className="text-slate-400 font-medium whitespace-pre-line text-sm uppercase tracking-widest">
        {stat.label}
      </div>
    </motion.div>
  )
}

export default function Statistics() {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) return null

  return (
    <section className="py-12 md:py-16 relative bg-transparent border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
