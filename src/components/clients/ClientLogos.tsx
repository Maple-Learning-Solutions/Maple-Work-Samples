"use client"

import { clientLogos } from "@/data/clients"
import { Building2, Briefcase, Globe, Hexagon, Layers, Plus } from "lucide-react"
import { motion } from "framer-motion"

export default function ClientLogos() {
  return (
    <section className="py-12 md:py-16 relative bg-transparent">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-satoshi font-bold text-4xl md:text-5xl text-center text-slate-300 mb-16 tracking-tight"
        >
          Companies we <span className="font-semibold text-white">collaborate</span> with.
        </motion.h2>

        <div className="relative border border-white/10 bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative z-10">
            {clientLogos.map((client, idx) => {
              const icons = [Building2, Briefcase, Globe, Hexagon, Layers]
              const Icon = icons[idx % icons.length]
              
              return (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="logo-box relative flex items-center justify-center p-8 h-32 md:h-40 border-[0.5px] border-slate-200 transition-colors duration-300"
                >
                  {client.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img 
                      src={client.logo} 
                      alt={client.name} 
                      className="max-h-16 md:max-h-24 max-w-[90%] object-contain" 
                    />
                  ) : (
                    <div className="flex items-center gap-2">
                      <Icon className="w-6 h-6 text-slate-400" />
                      <div className="text-sm md:text-lg font-bold text-slate-700 whitespace-nowrap">
                        {client.name}
                      </div>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* Plus icons at intersections - LG (4 cols) */}
          <div className="hidden lg:block absolute inset-0 z-20 pointer-events-none">
            {[1, 2].map(row => (
              [1, 2, 3].map(col => (
                <Plus 
                  key={`lg-${row}-${col}`} 
                  className="absolute text-slate-400 w-5 h-5 -translate-x-1/2 -translate-y-1/2 bg-white/0" 
                  style={{ top: `${row * 33.333333}%`, left: `${col * 25}%`, strokeWidth: 1.5 }} 
                />
              ))
            ))}
          </div>

          {/* Plus icons at intersections - MD (3 cols) */}
          <div className="hidden md:block lg:hidden absolute inset-0 z-20 pointer-events-none">
            {[1, 2, 3].map(row => (
              [1, 2].map(col => (
                <Plus 
                  key={`md-${row}-${col}`} 
                  className="absolute text-slate-400 w-5 h-5 -translate-x-1/2 -translate-y-1/2 bg-white/0" 
                  style={{ top: `${row * 25}%`, left: `${col * 33.333333}%`, strokeWidth: 1.5 }} 
                />
              ))
            ))}
          </div>

          {/* Plus icons at intersections - SM (2 cols) */}
          <div className="block md:hidden absolute inset-0 z-20 pointer-events-none">
            {[1, 2, 3, 4, 5].map(row => (
              <Plus 
                key={`sm-${row}`} 
                className="absolute text-slate-400 w-5 h-5 -translate-x-1/2 -translate-y-1/2 bg-white/0" 
                style={{ top: `${row * 16.666667}%`, left: `50%`, strokeWidth: 1.5 }} 
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* default: 2 cols checkerboard */
        .logo-box:nth-child(4n+1), .logo-box:nth-child(4n+4) { background-color: #fafafa; }
        .logo-box:nth-child(4n+2), .logo-box:nth-child(4n+3) { background-color: #ffffff; }

        /* md: 3 cols checkerboard */
        @media (min-width: 768px) and (max-width: 1023px) {
          .logo-box:nth-child(1n) { background-color: #ffffff; } /* reset */
          .logo-box:nth-child(odd) { background-color: #fafafa; }
          .logo-box:nth-child(even) { background-color: #ffffff; }
        }

        /* lg: 4 cols checkerboard */
        @media (min-width: 1024px) {
          .logo-box:nth-child(1n) { background-color: #ffffff; } /* reset */
          .logo-box:nth-child(8n+1), .logo-box:nth-child(8n+3), 
          .logo-box:nth-child(8n+6), .logo-box:nth-child(8n+8) {
            background-color: #fafafa;
          }
          .logo-box:nth-child(8n+2), .logo-box:nth-child(8n+4), 
          .logo-box:nth-child(8n+5), .logo-box:nth-child(8n+7) {
            background-color: #ffffff;
          }
        }
      `}</style>
    </section>
  )
}
