"use client"

import { useState } from "react"
import { Loader2, ExternalLink } from "lucide-react"

interface IframeViewerProps {
  url: string
  title: string
}

export default function IframeViewer({ url, title }: IframeViewerProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

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

        </div>
      ) : (
        <iframe
          src={url}
          title={title}
          className={`w-full h-full border-0 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setIsLoading(false)}
          onError={() => setHasError(true)}
          allowFullScreen
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        />
      )}
    </div>
  )
}
