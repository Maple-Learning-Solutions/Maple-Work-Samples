"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface WhyMapleItem {
  title: string;
  desc: string;
  image: string;
}

interface WhyMapleProps {
  subtitle: string;
  items: WhyMapleItem[];
}

export default function WhyMapleAccordion({ subtitle, items }: WhyMapleProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(index); // Always keep one open, or allow closing? "Clicking another item expands it and collapses the previous one." implies one is always open.
  };

  return (
    <section className="py-24 relative z-10 bg-[#030712] border-t border-white/5">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Editorial Heading */}
        <div className="mb-12 md:mb-16 text-center lg:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider mb-4"
          >
            WHY MAPLE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg md:text-xl font-light"
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-20 items-stretch">
          {/* Left Content - Accordions */}
          <div className="w-full md:w-1/2 lg:w-7/12 space-y-4">
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`border transition-all duration-300 relative overflow-hidden ${
                    isOpen
                      ? "bg-slate-900/60 border-maple-green/40 shadow-[0_0_20px_rgba(0,220,130,0.05)]"
                      : "bg-transparent border-white/10 hover:border-white/20"
                  }`}
                >
                  {/* Subtle animated indicator line */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        layoutId="active-indicator"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-maple-green"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </AnimatePresence>

                  <button
                    className="w-full text-left px-6 md:px-8 py-6 md:py-8 flex items-center justify-between focus:outline-none group relative z-10"
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="flex items-center gap-6">
                      <span className={`font-mono text-lg transition-colors duration-300 ${isOpen ? "text-maple-green" : "text-slate-600 group-hover:text-slate-400"}`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className={`text-xl md:text-2xl font-medium tracking-wide transition-colors duration-300 ${isOpen ? "text-white" : "text-slate-300 group-hover:text-white"}`}>
                        {item.title}
                      </span>
                    </div>
                    <span className={`transition-transform duration-500 ${isOpen ? "text-maple-green rotate-180" : "text-slate-500 rotate-0"}`}>
                      <ChevronDown size={24} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden relative z-10"
                      >
                        <div className="px-6 md:px-8 pb-8 pt-0 ml-[3.25rem] md:ml-[3.75rem]">
                          <p className="text-slate-400 font-light leading-relaxed text-base md:text-lg">
                            {item.desc}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 lg:w-5/12 relative min-h-[300px] md:min-h-full rounded-lg overflow-hidden border border-white/10 mt-8 md:mt-0 flex-grow">
            <div className="absolute inset-0 bg-maple-green/5 mix-blend-overlay z-10 pointer-events-none"></div>
            
            <motion.img
              key={openIndex}
              src={items[openIndex]?.image || "/p1.png"}
              alt={items[openIndex]?.title || "Why Maple"}
              initial={{ opacity: 0.5, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "/p1.png";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
