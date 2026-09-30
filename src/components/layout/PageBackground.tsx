"use client"
/* eslint-disable react-hooks/set-state-in-effect, react-hooks/purity */
import React from "react"
import { motion } from "framer-motion"

export interface PageBackgroundProps {
  children?: React.ReactNode
  starCount?: number
  gradientColors?: [string, string]
  pulseDuration?: number
}

const PageBackground: React.FC<PageBackgroundProps> = ({
  children,
  starCount = 20,
  gradientColors = [
    "var(--aurora-color1, rgba(0,220,130,0.15))",
    "var(--aurora-color2, rgba(0,180,100,0.15))",
  ],
  pulseDuration = 10,
}) => {
  const [colorA, colorB] = gradientColors
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="relative min-h-screen bg-[#050912] text-slate-50 overflow-hidden">
      {/* Fixed background layer */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        {/* Pulsing radial gradients */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, ${colorA} 0%, transparent 60%),
              radial-gradient(circle at 80% 70%, ${colorB} 0%, transparent 60%)
            `,
            backgroundSize: "100% 100%",
            animation: `pulse ${pulseDuration}s infinite alternate`,
          }}
        />

        {/* Blurred color blobs */}
        <motion.div
          className="absolute inset-0 mix-blend-screen pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute -top-1/4 -left-1/4 w-[60vw] h-[60vh] bg-[#00dc82] rounded-full filter blur-3xl opacity-20"
            animate={{
              x: [-20, 20, -20],
              y: [-10, 10, -10],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-1/4 -right-1/4 w-[60vw] h-[60vh] bg-teal-500 rounded-full filter blur-3xl opacity-20"
            animate={{
              x: [20, -20, 20],
              y: [10, -10, 10],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Twinkling stars */}
        {isMounted && Array.from({ length: starCount }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full"
            initial={{
              x: `${Math.random() * 100}vw`,
              y: `${Math.random() * 100}vh`,
              opacity: 0,
            }}
            animate={{
              opacity: [0, Math.random() * 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Foreground content */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  )
}

export default PageBackground
