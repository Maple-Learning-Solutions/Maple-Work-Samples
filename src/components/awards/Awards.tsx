"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Awards() {
  return (
    <section className="py-24 relative bg-slate-950 overflow-hidden border-t border-white/5">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-maple-green/5 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 max-w-[1000px] relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            YOU DESERVE <span className="text-maple-green">AWARD WINNING</span> SOLUTIONS
          </h2>
          
          <p className="text-slate-400 text-lg leading-relaxed mb-16 max-w-2xl mx-auto">
            Our journey of over two decades has been defined by excellence, allowing organizations to meet their larger goals and learning outcomes year after year.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-10 md:gap-16"
        >
          <Image src="/iso-27001.png" alt="ISO 27001 Certified" width={140} height={140} className="object-contain hover:scale-110 transition-transform duration-300 rounded-full" unoptimized />
          <Image src="/iso-22301.png" alt="ISO 22301 Certified" width={140} height={140} className="object-contain hover:scale-110 transition-transform duration-300 rounded-full" unoptimized />
          <Image src="/iso.webp" alt="ISO Certified" width={140} height={140} className="object-contain hover:scale-110 transition-transform duration-300 rounded-full" unoptimized />
          <Image src="/msme1.webp" alt="MSME Certified" width={140} height={140} className="object-contain hover:scale-110 transition-transform duration-300 rounded-full" unoptimized />
        </motion.div>
      </div>
    </section>
  );
}
