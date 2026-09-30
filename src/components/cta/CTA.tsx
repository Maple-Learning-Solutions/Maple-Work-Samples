"use client"

import { motion } from "framer-motion"

export default function CTA() {
  return (
    <section id="contact" className="py-32 relative bg-transparent overflow-hidden">
      {/* Background aurora effect specifically for CTA */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-maple-green rounded-full filter blur-[150px] opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-3xl p-12 md:p-20 shadow-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Have a Learning Challenge? <br />
              <span className="text-maple-green">Let&apos;s Build the Experience.</span>
            </h2>
            
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-light">
              Talk to Maple about creating engaging digital learning experiences tailored to your learners and business goals.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="https://www.maplelearningsolutions.com/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-maple-green text-black font-semibold hover:bg-white hover:text-black transition-colors duration-300 shadow-[0_0_20px_rgba(0,220,130,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
              >
                Talk to Our Learning Experts
              </a>
              <a
                href="#work"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:border-white/40 hover:bg-white/5 transition-all duration-300"
              >
                Explore More Work
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
