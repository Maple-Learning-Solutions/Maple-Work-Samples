"use client"

import { testimonials } from "@/data/testimonials"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 relative z-10 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900/50 border border-white/10 p-10 rounded-2xl flex flex-col h-full hover:border-maple-green/30 transition-colors duration-300"
            >
              <Quote className="text-maple-green/40 w-10 h-10 mb-6" />
              
              <p className="text-lg text-slate-300 leading-relaxed mb-10 flex-grow font-light whitespace-pre-line">
                &quot;{testimonial.quote}&quot;
              </p>
              
              <div className="mt-auto border-t border-white/10 pt-6 flex items-center gap-4">
                {testimonial.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border border-white/10" />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-maple-green/20 text-maple-green flex items-center justify-center font-bold text-lg border border-maple-green/30">
                    {testimonial.name.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="font-semibold text-white mb-1">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">{testimonial.designation}</div>
                  <div className="text-sm text-maple-green font-medium">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
