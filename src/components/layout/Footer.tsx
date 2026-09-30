import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="mb-6 block w-fit">
              <Image src="/logo.png" alt="Maple Learning Solutions Logo" width={140} height={40} className="object-contain" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Transforming complex learning requirements into engaging digital experiences. We build the future of corporate training and learning technology.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Solutions</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="#work" className="hover:text-maple-green transition-colors">Custom eLearning</Link></li>
              <li><Link href="#work" className="hover:text-maple-green transition-colors">Immersive Learning (VR/AR)</Link></li>
              <li><Link href="#work" className="hover:text-maple-green transition-colors">LMS Integration</Link></li>
              <li><Link href="#work" className="hover:text-maple-green transition-colors">Gamification</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="https://www.maplelearningsolutions.com/about-us" target="_blank" rel="noopener noreferrer" className="hover:text-maple-green transition-colors">About Us</a></li>
              <li><a href="https://www.maplelearningsolutions.com/our-work" target="_blank" rel="noopener noreferrer" className="hover:text-maple-green transition-colors">Our Work</a></li>
              <li><a href="https://www.maplelearningsolutions.com/contact" target="_blank" rel="noopener noreferrer" className="hover:text-maple-green transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="mailto:info@maplelearningsolutions.com" className="hover:text-maple-green transition-colors">info@maplelearningsolutions.com</a></li>
              <li><a href="tel:+971507359579" className="hover:text-maple-green transition-colors">+ 971 50 735 9579</a></li>
              <li className="pt-2">
                <a href="https://www.maplelearningsolutions.com/contact" target="_blank" rel="noopener noreferrer" className="text-maple-green font-medium hover:underline">
                  Schedule a Consultation &rarr;
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Maple Learning Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
