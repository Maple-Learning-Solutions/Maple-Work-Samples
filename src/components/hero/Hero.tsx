import { ArrowRight, MessageCircle } from "lucide-react"
import { CosmicParallaxBg } from "@/components/ui/parallax-cosmic-background"

export default function Hero() {
  return (
    <CosmicParallaxBg className="min-h-[100dvh] pt-20 flex flex-col justify-center bg-transparent">
      <div className="container mx-auto px-6 flex flex-col justify-center items-center text-center relative z-10 py-10 md:py-20">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-maple-green"></span>
          <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-slate-400 uppercase">
            Maple Learning Solutions
          </span>
        </div>

        {/* Headline */}
        <h1 
          className="font-bold tracking-tight text-white mb-8 leading-[1.05]"
          style={{ 
            fontSize: "clamp(2.5rem, 5vw + 1rem, 4.75rem)", 
            maxWidth: "1100px",
            textWrap: "balance" 
          }}
        >
          Explore Our Digital Learning Experiences
        </h1>

        {/* Subheadline */}
        <p 
          className="text-lg md:text-[22px] text-slate-400 mb-12 font-light leading-[1.6]"
          style={{ maxWidth: "700px" }}
        >
          Discover how Maple transforms complex learning requirements into engaging digital experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none mb-14">
          <a
            href="#work"
            className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-maple-green text-black font-semibold text-[15px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,220,130,0.3)] hover:brightness-110"
          >
            Explore Our Work
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://www.maplelearningsolutions.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-medium text-[15px] transition-all duration-300 hover:-translate-y-0.5 hover:border-maple-green/50 hover:bg-white/5"
          >
            Talk to Our Team
            <MessageCircle size={18} className="text-slate-300 group-hover:text-maple-green transition-colors" />
          </a>
        </div>

        {/* Supporting Line */}
        <div className="text-sm font-medium text-slate-500 tracking-wide opacity-80">
          eLearning • AI Learning • LMS • Immersive Learning
        </div>

      </div>
    </CosmicParallaxBg>
  )
}
