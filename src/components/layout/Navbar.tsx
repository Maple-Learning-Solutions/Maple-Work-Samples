"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

type NavLink = {
  name: string
  href: string
  description?: string
  hasSubmenu?: boolean
  subItems?: NavLink[]
}

type NavItemType = {
  name: string
  href?: string
  type?: "mega" | "dropdown"
  description?: string
  menuItems?: NavLink[]
  items?: NavLink[]
}

const navigation: NavItemType[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "360° Learning Consulting",
    type: "mega",
    menuItems: [
      {
        name: "Custom Content Development",
        href: "#",
        hasSubmenu: true,
        subItems: [
          { name: "Gamification", href: "/360-learning-consulting/gamification" },
          { name: "AR/VR Training", href: "/360-learning-consulting/ar-vr-training" },
          { name: "Simulation", href: "/360-learning-consulting/simulation" },
          { name: "ILT", href: "/360-learning-consulting/ilt" },
          { name: "VILT", href: "/360-learning-consulting/vilt" },
          { name: "Microlearning", href: "/360-learning-consulting/microlearning" },
          { name: "Blended Learning", href: "/360-learning-consulting/blended-learning" },
          { name: "eLearning Development", href: "/360-learning-consulting/elearning-development" },
          { name: "Video Learning", href: "/360-learning-consulting/video-learning" },
          { name: "IT Training", href: "/360-learning-consulting/it-training" },
          { name: "Immersive Learning", href: "/360-learning-consulting/immersive-learning" },
          
        ]
      },
      { name: "Performance Management & Evaluation", href: "/360-learning-consulting/performance-management" },
      { name: "Organizational Development", href: "/360-learning-consulting/organizational-development" },
      { name: "Learning Strategy & Consulting", href: "/360-learning-consulting/learning-strategy" },
      { name: "Learning Analytics & Data Insights", href: "/360-learning-consulting/learning-analytics" },
      { name: "Employee onboarding & Engagement", href: "/360-learning-consulting/employee-onboarding" },
      { name: "Leadership Development", href: "/360-learning-consulting/leadership-development" },
      { name: "Compliance Training", href: "/360-learning-consulting/compliance-training" },
      { name: "Systems and Process Training", href: "/360-learning-consulting/systems-process-training" },
      { name: "Sales Enablement Training", href: "/360-learning-consulting/sales-enablement" },
      { name: "Learning Delivery & Evaluation", href: "/360-learning-consulting/learning-delivery" },
    ]
  },
  {
    name: "Talent Services",
    type: "dropdown",
    items: [
      { name: "Talent Services Overview", href: "/talent-services" },
      { name: "Staff Augmentation", href: "/talent-services/staff-augmentation" },
      { name: "Managed Learning Solutions", href: "/talent-services/managed-learning-solutions" },
      { name: "Learning Administration", href: "/talent-services/learning-administration" },
    ]
  },
  {
    name: "AI Training",
    type: "dropdown",
    items: [
      { name: "AI Training Overview", href: "/ai-training", description: "Learn about our approach to AI enablement." },
      { name: "AI Foundations", href: "/ai-training/foundations", description: "Build practical AI literacy and application skills." },
      { name: "AI for Sales & Leadership", href: "/ai-training/sales-leadership", description: "Apply AI to sales, decision-making and leadership workflows." },
    ]
  },
  {
    name: "LearnTech",
    type: "dropdown",
    items: [
      { name: "LearnTech Overview", href: "/learntech" },
      { name: "SaaS", href: "/learntech/saas" },
      { name: "Cloud", href: "/learntech/cloud" },
    ]
  }
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  
  // State for the mega menu's right pane
  const [activeMegaSubmenu, setActiveMegaSubmenu] = useState<string | null>(null)
  
  const pathname = usePathname()
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu and scroll to top (hero section) on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setActiveDropdown(null)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [pathname])

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Handle escape key to close dropdowns
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDropdown(null)
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(name)
  }

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  const toggleMobileDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050505]/85 backdrop-blur-xl border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
          : "bg-transparent py-5 lg:py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center relative z-50"
          onClick={() => {
            setActiveDropdown(null)
            setMobileMenuOpen(false)
          }}
        >
          <Image 
            src="/logo.png" 
            alt="Maple Learning Solutions Logo" 
            width={130} 
            height={36} 
            className="object-contain" 
            priority 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navigation.map((item) => (
            <div 
              key={item.name} 
              className="relative"
              onMouseEnter={() => item.type ? handleMouseEnter(item.name) : undefined}
              onMouseLeave={() => item.type ? handleMouseLeave() : undefined}
            >
              {item.type ? (
                <button
                  onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                  className={`flex items-center gap-1.5 px-3 xl:px-4 py-2.5 rounded-full text-[14px] xl:text-[15px] font-medium transition-colors duration-200 ${
                    activeDropdown === item.name 
                      ? "text-white bg-white/5" 
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                  aria-expanded={activeDropdown === item.name}
                  aria-haspopup="true"
                >
                  {item.name}
                  <ChevronDown 
                    size={14} 
                    className={`transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180 text-white" : "opacity-70"}`} 
                  />
                </button>
              ) : (
                <Link
                  href={item.href || "#"}
                  className="px-3 xl:px-4 py-2.5 rounded-full text-[14px] xl:text-[15px] font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors duration-200 block"
                >
                  {item.name}
                </Link>
              )}

              {/* Mega Menu Dropdown */}
              {item.type === "mega" && (
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-0 top-full pt-4 w-max cursor-default"
                    >
                      <div 
                        className="bg-[#1f1f1f]/95 backdrop-blur-2xl border border-white/10 rounded-lg shadow-2xl p-8 flex transition-all duration-300 overflow-hidden"
                        onMouseLeave={() => setActiveMegaSubmenu(null)}
                      >
                        {/* Left Column: Menu Items */}
                        <div className={`flex flex-col gap-5 min-w-[350px] transition-all duration-300 ${activeMegaSubmenu ? 'border-r border-white/5 pr-12' : ''}`}>
                          {item.menuItems?.map((menuItem) => (
                            <div 
                              key={menuItem.name} 
                              className="flex items-center justify-between group"
                              onMouseEnter={() => setActiveMegaSubmenu(menuItem.hasSubmenu ? menuItem.name : null)}
                            >
                              <Link 
                                href={menuItem.href}
                                className={`text-[15px] font-semibold transition-all duration-200 ${
                                  menuItem.hasSubmenu && activeMegaSubmenu === menuItem.name
                                    ? "text-white underline underline-offset-4 decoration-white"
                                    : "text-slate-200 hover:text-white"
                                }`}
                                onClick={() => setActiveDropdown(null)}
                              >
                                {menuItem.name}
                              </Link>
                              {menuItem.hasSubmenu && (
                                <ChevronDown 
                                  size={16} 
                                  className={`transition-colors duration-200 ${
                                    activeMegaSubmenu === menuItem.name ? "text-white" : "text-slate-500 group-hover:text-white"
                                  }`} 
                                />
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Right Column: Sub-items */}
                        {activeMegaSubmenu && (
                          <div className="flex flex-col gap-5 min-w-[350px] pl-12 animate-in fade-in duration-300">
                            {item.menuItems?.find(m => m.name === activeMegaSubmenu)?.subItems?.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="text-[15px] font-semibold text-slate-200 hover:text-[#38bdf8] transition-colors duration-200"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}

              {/* Standard Dropdown */}
              {item.type === "dropdown" && (
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-0 top-full pt-4 min-w-[280px] w-max cursor-default"
                    >
                      <div className="bg-[#1f1f1f]/95 backdrop-blur-2xl border border-white/10 rounded-lg shadow-2xl p-3 flex flex-col gap-1">
                        {item.items?.map((link, idx) => (
                          <Link 
                            key={idx} 
                            href={link.href}
                            className="group p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 flex flex-col gap-1"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span className="text-[15px] font-semibold text-slate-200 group-hover:text-white transition-colors">
                              {link.name}
                            </span>
                            {link.description && (
                              <span className="text-xs text-slate-400 leading-relaxed font-normal">
                                {link.description}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/contact"
            className="px-6 py-2.5 rounded-full text-[14px] font-medium border border-white/10 bg-white/5 hover:bg-white text-white hover:text-slate-900 transition-all duration-300 shadow-[0_0_15px_rgba(0,220,130,0.1)] hover:shadow-[0_0_20px_rgba(0,220,130,0.3)]"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden relative z-50 text-slate-300 hover:text-white p-2 transition-colors focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait">
            {mobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X size={26} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={26} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Navigation Full Screen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-[70px] bg-[#050505] z-40 lg:hidden overflow-y-auto pb-24 border-t border-white/5"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-2">
              {navigation.map((item, idx) => (
                <div key={idx} className="border-b border-white/5 last:border-0 pb-2 mb-2 last:pb-0 last:mb-0">
                  {item.type ? (
                    <div className="flex flex-col">
                      <button
                        onClick={() => toggleMobileDropdown(item.name)}
                        className="flex items-center justify-between py-4 text-left focus:outline-none"
                      >
                        <span className={`text-lg font-medium transition-colors ${activeDropdown === item.name ? "text-maple-green" : "text-white"}`}>
                          {item.name}
                        </span>
                        <motion.div
                          animate={{ rotate: activeDropdown === item.name ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-slate-400"
                        >
                          <ChevronRight size={20} />
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-4 flex flex-col gap-4">
                              {item.type === "mega" && item.menuItems?.map((menuItem, mIdx) => (
                                <div key={mIdx} className="flex flex-col gap-2 mb-2">
                                  <Link 
                                    href={menuItem.href}
                                    className="text-[16px] font-semibold text-white block py-1"
                                  >
                                    {menuItem.name}
                                  </Link>
                                  {menuItem.hasSubmenu && menuItem.subItems && (
                                    <ul className="flex flex-col gap-3 pl-4 border-l border-white/10 mt-1">
                                      {menuItem.subItems.map((subLink, subIdx) => (
                                        <li key={subIdx}>
                                          <Link 
                                            href={subLink.href}
                                            className="text-[15px] text-slate-300 block hover:text-white"
                                          >
                                            {subLink.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              ))}
                              
                              {item.type === "dropdown" && item.items?.map((link, lIdx) => (
                                <Link 
                                  key={lIdx}
                                  href={link.href}
                                  className="text-[15px] font-semibold text-slate-200 block py-2 hover:text-white"
                                >
                                  {link.name}
                                  {link.description && (
                                    <span className="block text-xs font-normal text-slate-500 mt-1">
                                      {link.description}
                                    </span>
                                  )}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      className="block py-4 text-lg font-medium text-white"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <Link
                  href="/contact"
                  className="w-full block text-center px-6 py-4 rounded-xl text-base font-semibold bg-white text-black hover:bg-slate-200 transition-colors shadow-lg"
                >
                  Let's Talk
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
