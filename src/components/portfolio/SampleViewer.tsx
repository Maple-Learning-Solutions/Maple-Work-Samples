"use client"

import { WorkSample } from "@/data/samples"
import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Info } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import VideoPlayer from "./VideoPlayer"
import IframeViewer from "./IframeViewer"

interface SampleViewerProps {
  sample: WorkSample | null
  isOpen: boolean
  onClose: () => void
}

export default function SampleViewer({ sample, isOpen, onClose }: SampleViewerProps) {
  const [showInfo, setShowInfo] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden" // Prevent body scroll
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  if (!sample) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 lg:p-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full h-full md:rounded-2xl bg-black border border-white/10 flex flex-col overflow-hidden shadow-2xl z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-slate-900/50 backdrop-blur-md z-20 absolute top-0 left-0 right-0">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-semibold text-white truncate max-w-[200px] sm:max-w-md md:max-w-xl">
                  {sample.title}
                </h3>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-xs font-medium bg-white/10 text-slate-300">
                  {sample.solution}
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowInfo(!showInfo)}
                  className={`p-2 rounded-full transition-colors ${showInfo ? 'bg-white text-black' : 'text-slate-400 hover:text-white hover:bg-white/10'}`}
                  aria-label="Toggle Information"
                >
                  <Info size={20} />
                </button>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close viewer"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 w-full h-full relative pt-[60px] flex">
              {/* Main Viewer */}
              <div className={`flex-1 relative transition-all duration-300 ${showInfo ? 'md:w-3/4' : 'w-full'}`}>
                {sample.type === "video" ? (
                  <VideoPlayer url={sample.url} />
                ) : (
                  <IframeViewer url={sample.url} title={sample.title} />
                )}
              </div>

              {/* Side Info Panel */}
              <AnimatePresence>
                {showInfo && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "320px", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    className="hidden md:block border-l border-white/10 bg-slate-900/80 overflow-y-auto"
                  >
                    <div className="p-6 w-[320px]">
                      <h4 className="text-lg font-semibold text-white mb-2">About this experience</h4>
                      <p className="text-slate-300 text-sm leading-relaxed mb-6">
                        {sample.description}
                      </p>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Solution Type</div>
                          <div className="text-sm font-medium text-white">{sample.solution}</div>
                        </div>
                        {sample.industry && (
                          <div>
                            <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Industry</div>
                            <div className="text-sm font-medium text-white">{sample.industry}</div>
                          </div>
                        )}
                        <div>
                          <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Format</div>
                          <div className="text-sm font-medium text-white capitalize">{sample.type}</div>
                        </div>
                      </div>
                      

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Mobile Info Panel Overlay */}
            <AnimatePresence>
              {showInfo && (
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="absolute inset-x-0 bottom-0 bg-slate-900/95 backdrop-blur-xl border-t border-white/10 p-6 md:hidden z-30 max-h-[50vh] overflow-y-auto rounded-t-2xl"
                >
                  <button 
                    onClick={() => setShowInfo(false)}
                    className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white"
                  >
                    <X size={20} />
                  </button>
                  <h4 className="text-lg font-semibold text-white mb-2 pr-8">About this experience</h4>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {sample.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Solution Type</div>
                      <div className="text-sm font-medium text-white">{sample.solution}</div>
                    </div>
                    {sample.industry && (
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Industry</div>
                        <div className="text-sm font-medium text-white">{sample.industry}</div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
