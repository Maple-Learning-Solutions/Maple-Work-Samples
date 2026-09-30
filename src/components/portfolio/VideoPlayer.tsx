"use client"

import { useState, useRef } from "react"
import { Play, Pause, Maximize, Volume2, VolumeX } from "lucide-react"

interface VideoPlayerProps {
  url: string
}

export default function VideoPlayer({ url }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isMuted, setIsMuted] = useState(false)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100
      setProgress(progress)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        videoRef.current.requestFullscreen()
      }
    }
  }

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect()
      const pos = (e.clientX - rect.left) / rect.width
      videoRef.current.currentTime = pos * videoRef.current.duration
    }
  }

  // Prevent right click on video
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  return (
    <div className="relative w-full h-full bg-black group flex flex-col justify-center">
      <video
        ref={videoRef}
        src={url}
        className="w-full h-full object-contain"
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        onClick={togglePlay}
        onContextMenu={handleContextMenu}
        preload="metadata"
        controlsList="nodownload"
        disablePictureInPicture
      />
      
      {/* Custom Controls Container */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Progress Bar */}
        <div 
          className="w-full h-1.5 bg-white/20 rounded-full mb-4 cursor-pointer relative overflow-hidden group/progress"
          onClick={handleProgressBarClick}
        >
          <div 
            className="absolute top-0 left-0 bottom-0 bg-maple-green rounded-full shadow-[0_0_10px_rgba(0,220,130,0.5)]"
            style={{ width: `${progress}%` }}
          />
          <div 
            className="absolute top-1/2 -mt-2 bg-white w-4 h-4 rounded-full opacity-0 group-hover/progress:opacity-100 shadow-md"
            style={{ left: `calc(${progress}% - 8px)` }}
          />
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={togglePlay} className="text-white hover:text-maple-green transition-colors">
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
            <button onClick={toggleMute} className="text-white hover:text-maple-green transition-colors">
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
          </div>
          
          <button onClick={toggleFullscreen} className="text-white hover:text-maple-green transition-colors">
            <Maximize size={20} />
          </button>
        </div>
      </div>
      
      {/* Center Play Button Overlay */}
      {!isPlaying && (
        <button 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-maple-green/90 rounded-full flex items-center justify-center text-black shadow-[0_0_30px_rgba(0,220,130,0.4)] hover:scale-110 transition-transform"
          onClick={togglePlay}
        >
          <Play size={32} className="ml-1" />
        </button>
      )}
    </div>
  )
}
