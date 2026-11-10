"use client"

import { WorkSample } from "@/data/samples"
import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Info } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import VideoPlayer from "./VideoPlayer"
import IframeViewer from "./IframeViewer"

interface SampleViewerProps {
  sample: WorkSample | null
  isOpen: boolean
  onClose: () => void
}

export default function SampleViewer({ sample, isOpen, onClose }: SampleViewerProps) {
  const [showInfo, setShowInfo] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [cachedSample, setCachedSample] = useState<WorkSample | null>(sample)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (sample) setCachedSample(sample)
  }, [sample])

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

  const activeSample = sample || cachedSample

  if (!activeSample || !mounted) return null

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex flex-col bg-black">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-black/95 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="relative w-full h-full bg-black flex flex-col overflow-hidden z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10 bg-slate-900/90 backdrop-blur-md z-20 shrink-0">
              <div className="flex items-center gap-3 min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-white truncate max-w-[200px] sm:max-w-md md:max-w-xl">
                  {activeSample.title}
                </h3>
                <span className="hidden sm:inline-block px-2.5 py-0.5 rounded text-xs font-medium bg-white/10 text-slate-300 shrink-0">
                  {activeSample.solution}
                </span>
              </div>
              
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={activeSample.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Open in new tab"
                  title="Open in new tab"
                >
                  <ExternalLink size={20} />
                </a>
                <button
                  onClick={() => setShowInfo(!showInfo)}
                  className={`p-2 rounded-full transition-colors ${showInfo ? 'bg-white text-black' : 'text-slate-400 hover:text-white hover:bg-white/10'}`}
                  aria-label="Toggle Information"
                  title="Toggle Information"
                >
                  <Info size={20} />
                </button>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close viewer"
                  title="Close viewer"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 w-full h-full relative flex overflow-hidden">
              {/* Main Viewer */}
              <div className={`flex-1 relative transition-all duration-300 ${showInfo ? 'md:w-3/4' : 'w-full'} h-full`}>
                {activeSample.type === "video" ? (
                  <VideoPlayer url={activeSample.url} />
                ) : (
                  <IframeViewer 
                    url={activeSample.url} 
                    title={activeSample.title}
                    thumbnail={activeSample.thumbnail}
                    description={activeSample.description}
                    openInNewTab={activeSample.openInNewTab}
                  />
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
                        {activeSample.description}
                      </p>
                      
                      <div className="space-y-4 mb-6">
                        <div>
                          <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Solution Type</div>
                          <div className="text-sm font-medium text-white">{activeSample.solution}</div>
                        </div>
                        {activeSample.industry && (
                          <div>
                            <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Industry</div>
                            <div className="text-sm font-medium text-white">{activeSample.industry}</div>
                          </div>
                        )}
                        <div>
                          <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Format</div>
                          <div className="text-sm font-medium text-white capitalize">{activeSample.type}</div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-white/10">
                        <a
                          href={activeSample.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-maple-green text-slate-950 font-semibold text-sm hover:bg-maple-green/90 transition-colors shadow-md"
                        >
                          <span>Open in New Tab</span>
                          <ExternalLink size={16} />
                        </a>
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
                    {activeSample.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Solution Type</div>
                      <div className="text-sm font-medium text-white">{activeSample.solution}</div>
                    </div>
                    {activeSample.industry && (
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Industry</div>
                        <div className="text-sm font-medium text-white">{activeSample.industry}</div>
                      </div>
                    )}
                  </div>

                  <a
                    href={activeSample.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-maple-green text-slate-950 font-semibold text-sm hover:bg-maple-green/90 transition-colors shadow-md"
                  >
                    <span>Open in New Tab</span>
                    <ExternalLink size={16} />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  )
}
