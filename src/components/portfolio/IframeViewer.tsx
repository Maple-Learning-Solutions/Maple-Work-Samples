"use client"

import { useState } from "react"
import { Loader2, ExternalLink } from "lucide-react"

interface IframeViewerProps {
  url: string
  title: string
  thumbnail?: string
  description?: string
  openInNewTab?: boolean
}

export default function IframeViewer({ url, title, thumbnail, description, openInNewTab }: IframeViewerProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Direct open in new tab screen for external-only embeds
  if (openInNewTab) {
    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden bg-slate-950 text-center select-none">
        {thumbnail && (
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20 filter blur-md scale-105 pointer-events-none"
            style={{ backgroundImage: `url(${thumbnail})` }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/90 pointer-events-none" />

        <div className="relative z-10 max-w-lg flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl bg-maple-green/10 border border-maple-green/20 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,220,130,0.2)]">
            <ExternalLink size={28} className="text-maple-green" />
          </div>

          <span className="text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-white/10 text-slate-300 border border-white/10 mb-4">
            Interactive 360° Experience
          </span>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            {title}
          </h3>

          <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 max-w-md">
            {description || "This interactive experience opens in a dedicated window to support full 360° controls and VR immersion."}
          </p>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-maple-green text-slate-950 font-semibold text-base shadow-[0_0_25px_rgba(0,220,130,0.35)] hover:shadow-[0_0_35px_rgba(0,220,130,0.55)] hover:scale-105 transition-all duration-300"
          >
            <span>Open Experience in New Tab</span>
            <ExternalLink size={18} />
          </a>

          <span className="text-xs text-slate-500 mt-4">
            Opens directly in a new browser tab
          </span>
        </div>
      </div>
    )
  }

  // Use a heuristic to check if it's a placeholder
  const isPlaceholder = url.includes("REPLACE_WITH_")

  if (isPlaceholder) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-center p-8">
        <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-6 border border-slate-700">
          <ExternalLink size={24} className="text-slate-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Interactive Experience</h3>
        <p className="text-slate-400 max-w-md mb-8">
          This is a placeholder for a rich interactive web experience, Storyline module, or custom web application.
        </p>
        <div className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 font-mono text-sm break-all max-w-full">
          URL: {url}
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-full bg-slate-950">
      {isLoading && !hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Loader2 size={40} className="text-maple-green animate-spin mb-4" />
          <p className="text-slate-400 font-medium tracking-wide">Loading Experience...</p>
        </div>
      )}
      
      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-slate-900">
          <p className="text-xl text-white mb-4">This experience cannot be loaded in the viewer.</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-maple-green text-slate-950 font-semibold text-sm hover:bg-maple-green/90 transition-colors"
          >
            Open in New Tab <ExternalLink size={16} />
          </a>
        </div>
      ) : (
        <iframe
          src={url}
          title={title}
          className={`w-full h-full border-0 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setIsLoading(false)}
          onError={() => setHasError(true)}
          allowFullScreen
          allow="xr-spatial-tracking; vr; accelerometer; gyroscope; autoplay"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        />
      )}
    </div>
  )
}
