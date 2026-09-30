"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-2xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Maple Learning Solutions Logo" width={140} height={40} className="object-contain" priority />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10 text-[15px] font-medium text-slate-300">
          <Link href="#work" className="hover:text-white transition-colors">Work</Link>
          <Link href="#industries" className="hover:text-white transition-colors">Industries</Link>
          <Link href="#testimonials" className="hover:text-white transition-colors">Testimonials</Link>
          <Link href="#faq" className="hover:text-white transition-colors">FAQs</Link>
          <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
        </nav>

        <div className="hidden lg:block">
          <Link
            href="https://www.maplelearningsolutions.com/contact"
            className="px-6 py-2.5 rounded-full text-sm font-medium border border-white/10 hover:bg-white/10 hover:border-white/20 text-white transition-all duration-300"
          >
            Start a Conversation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-slate-300 hover:text-white p-2 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#050505]/95 backdrop-blur-3xl border-b border-white/10 p-6 flex flex-col gap-6 shadow-2xl pb-10">
          <Link href="#work" className="text-lg font-medium text-slate-300" onClick={() => setMobileMenuOpen(false)}>Work</Link>
          <Link href="#industries" className="text-lg font-medium text-slate-300" onClick={() => setMobileMenuOpen(false)}>Industries</Link>
          <Link href="#testimonials" className="text-lg font-medium text-slate-300" onClick={() => setMobileMenuOpen(false)}>Testimonials</Link>
          <Link href="#faq" className="text-lg font-medium text-slate-300" onClick={() => setMobileMenuOpen(false)}>FAQs</Link>
          <Link href="#contact" className="text-lg font-medium text-slate-300" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          <Link
            href="#contact"
            className="mt-4 px-6 py-3.5 text-center rounded-full bg-white text-black font-semibold shadow-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            Start a Conversation
          </Link>
        </div>
      )}
    </header>
  )
}
