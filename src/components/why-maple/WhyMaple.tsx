"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Lightbulb, Settings, MessageSquare, Target, Users, Rocket, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    id: "proven",
    title: "Proven Results",
    description: "Trusted by global brands\nfor impactful learning outcomes.",
    icon: Star,
    color: "#ec4899", // pink
    angle: 0, 
    offset: { x: 30, y: -10 }
  },
  {
    id: "innovative",
    title: "Innovative & Engaging",
    description: "Modern learning experiences that drive real behavior change.",
    icon: Lightbulb,
    color: "#06b6d4", // cyan
    angle: 40,
    offset: { x: 50, y: 30 }
  },
  {
    id: "end-to-end",
    title: "End-to-End Support",
    description: "From strategy to deployment, we're with you at every step.",
    icon: Settings,
    color: "#8b5cf6", // purple
    angle: 90,
    offset: { x: 0, y: 60 }
  },
  {
    id: "rapid",
    title: "Rapid Response",
    description: "Get prompt support and clear communication, always.",
    icon: MessageSquare,
    color: "#14b8a6", // teal
    angle: 140,
    offset: { x: -100, y: 40 }
  },
  {
    id: "custom",
    title: "Custom Solutions",
    description: "Tailored eLearning experiences for your specific goals.",
    icon: Target,
    color: "#3b82f6", // blue
    angle: 180,
    offset: { x: -190, y: 30 }
  },
  {
    id: "expertise",
    title: "Expertise You Can Trust",
    description: "A team of eLearning professionals with deep domain experience.",
    icon: Users,
    color: "#6366f1", // indigo
    angle: 220,
    offset: { x: -100, y: -60 }
  },
  {
    id: "on-time",
    title: "On-Time Delivery",
    description: "We deliver projects with speed, quality and precision.",
    icon: Rocket,
    color: "#10b981", // emerald
    angle: 270,
    offset: { x: 0, y: -60 }
  },
  {
    id: "flexible",
    title: "Flexible & Scalable",
    description: "Solutions that adapt to your unique needs and future growth.",
    icon: Shield,
    color: "#d946ef", // fuchsia
    angle: 320,
    offset: { x: 50, y: -50 }
  },
];

// Generate 60 points along the ellipse perimeter for the revolving glow effect
const orbitKeyframes = Array.from({ length: 60 }).map((_, i) => {
  const angle = (i / 60) * Math.PI * 2;
  return {
    left: `${50 + 50 * Math.cos(angle)}%`,
    top: `${50 + 50 * Math.sin(angle)}%`,
  };
});
const lefts = orbitKeyframes.map(k => k.left);
const tops = orbitKeyframes.map(k => k.top);
const times = orbitKeyframes.map((_, i) => i / 59);

// Second revolving orb starts halfway around (180 degrees)
const lefts2 = [...lefts.slice(30), ...lefts.slice(0, 30)];
const tops2 = [...tops.slice(30), ...tops.slice(0, 30)];

export default function WhyMaple() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden border-t border-white/5">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-900/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Mobile View: Clean, structured grid layout */}
        <div className="lg:hidden flex flex-col space-y-12">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl tracking-[0.2em] font-light text-slate-300 uppercase mb-3">
              Why Maple Learning Solutions
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              IS YOUR <span className="text-maple-green">IDEAL PARTNER</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div 
                key={f.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors"
              >
                <div 
                  className="flex-shrink-0 w-12 h-12 rounded-full border bg-slate-900/80 flex items-center justify-center shadow-lg" 
                  style={{ color: f.color, borderColor: `${f.color}80` }}
                >
                  <f.icon size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-[15px] mb-1">{f.title}</h4>
                  <p className="text-slate-400 text-[13px] leading-relaxed">{f.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop View: Premium Orbital Layout */}
        <div className="hidden lg:block relative w-full max-w-[1200px] mx-auto aspect-[16/9] my-12">
          
          {/* Center Logo & Title */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-lg pointer-events-none z-0"
          >
             <div className="flex justify-center mb-5">
               <img src="/logo.png" alt="Maple Logo" className="h-16 w-auto object-contain" />
             </div>
             <h3 className="text-lg tracking-[0.2em] text-slate-300 uppercase font-light mb-3">
               Why Maple Learning Solutions
             </h3>
             <h2 className="text-4xl font-bold text-white tracking-tight">
               IS YOUR <span className="text-maple-green">IDEAL PARTNER</span>
             </h2>
          </motion.div>

          {/* The Orbit Path */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="absolute top-1/2 left-1/2 w-[70%] h-[60%] -translate-x-1/2 -translate-y-1/2 rotate-[10deg] rounded-[50%] border border-dashed border-slate-500/90 shadow-[0_0_80px_rgba(255,255,255,0.02)_inset]"
          >
            {/* Revolving Glow 1 (Maple Green) */}
            <motion.div
              animate={{ left: lefts, top: tops }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear", times }}
              className="absolute w-40 h-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-maple-green/20 blur-[50px] z-0 pointer-events-none"
            />
            <motion.div
              animate={{ left: lefts, top: tops }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear", times }}
              className="absolute w-6 h-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-maple-green/40 blur-[10px] z-0 pointer-events-none"
            />
            
            {/* Revolving Glow 2 (Blue) */}
            <motion.div
              animate={{ left: lefts2, top: tops2 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear", times }}
              className="absolute w-40 h-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[50px] z-0 pointer-events-none"
            />
            <motion.div
              animate={{ left: lefts2, top: tops2 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear", times }}
              className="absolute w-6 h-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/40 blur-[10px] z-0 pointer-events-none"
            />

            {features.map((f, i) => {
              // Convert angle to radians for orbit placement
              const angleRad = (f.angle * Math.PI) / 180;
              const left = 50 + 50 * Math.cos(angleRad);
              const top = 50 + 50 * Math.sin(angleRad);

              return (
                <motion.div 
                  key={f.id}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                  className="absolute w-2.5 h-2.5 rounded-full -translate-x-1/2 -translate-y-1/2 z-10"
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    backgroundColor: f.color,
                    boxShadow: `0 0 16px 2px ${f.color}`
                  }}
                >
                  {/* Un-rotate content so the text and lines remain upright */}
                  <div className="absolute top-1/2 left-1/2" style={{ transform: 'rotate(-10deg)' }}>
                    
                    {/* SVG Connecting line */}
                    <svg className="absolute overflow-visible pointer-events-none" style={{ left: 0, top: 0 }}>
                      <line 
                        x1="0" y1="0" 
                        x2={f.offset.x} y2={f.offset.y} 
                        stroke={f.color} strokeWidth="1.5" opacity="0.4" 
                        strokeDasharray="4 2" 
                      />
                    </svg>

                    {/* Wrapper to handle static centering offset without breaking Framer transform */}
                    <div 
                      className="absolute"
                      style={{
                        left: f.offset.x,
                        top: f.offset.y,
                        marginLeft: '-24px',
                        marginTop: '-24px',
                      }}
                    >
                      <motion.div 
                        initial={{ opacity: 0, x: f.offset.x > 0 ? -15 : 15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 + i * 0.1, duration: 0.6 }}
                        className="flex items-start w-[300px] group cursor-default"
                      >
                        <div 
                          className="flex-shrink-0 w-12 h-12 rounded-full border bg-slate-900/90 backdrop-blur-md flex items-center justify-center relative z-10 transition-transform duration-300 group-hover:scale-110" 
                          style={{ color: f.color, borderColor: `${f.color}80`, boxShadow: `0 0 20px -5px ${f.color}` }}
                        >
                          <f.icon size={20} />
                        </div>
                        {/* A very subtle dark background behind text ensures it remains readable against the orbit line */}
                        <div className="pl-4 pt-1 pb-2 relative z-20 rounded-r-lg bg-slate-950/20">
                          <h4 
                            className="text-white font-semibold text-[15px] mb-1 drop-shadow-md group-hover:text-white transition-colors" 
                            style={{ textShadow: `0 0 10px ${f.color}40` }}
                          >
                            {f.title}
                          </h4>
                          <p className="text-slate-400 text-[13px] leading-relaxed drop-shadow-md group-hover:text-slate-300 transition-colors">
                            {f.description}
                          </p>
                        </div>
                      </motion.div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
