"use client"

import { faqs } from "@/data/faqs"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-32 relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-sm ${
                openIndex === index 
                  ? "bg-slate-900/80 border-maple-green/50 shadow-lg shadow-maple-green/10" 
                  : "bg-slate-900/40 border-white/10 hover:bg-slate-900/60 hover:border-white/30"
              }`}
            >
              <button
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-maple-green"
                onClick={() => toggleOpen(index)}
              >
                <span className="text-lg font-medium text-white pr-8">{faq.question}</span>
                <span className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors ${openIndex === index ? 'bg-maple-green text-black' : 'bg-white/10 text-slate-300'}`}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-slate-300 font-light leading-relaxed border-t border-white/10 pt-4 mt-2 mx-6">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
