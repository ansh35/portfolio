"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

import { portfolioData } from "@/data/portfolioData"

export function Navbar() {
  const { personalInfo } = portfolioData
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Simple active section detection
      const sections = navItems.map(item => item.href.substring(1))
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const element = document.getElementById(targetId)
    if (element) {
      const offset = 80 // navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-luxury-bg/75 backdrop-blur-md border-b border-primary-gold/15 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "py-6 bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="group flex items-center gap-1.5 font-heading text-xl font-bold tracking-widest text-white">
          <span className="text-primary-gold group-hover:text-soft-gold transition-colors duration-300">ANSH KHARE</span>
          <span className="w-1.5 h-1.5 bg-primary-gold rounded-full group-hover:scale-125 transition-transform duration-300 text-gold-glow"></span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1)
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-sm tracking-widest uppercase transition-all duration-300 relative py-1 hover:text-soft-gold ${
                      isActive ? "text-primary-gold font-semibold" : "text-muted-gray"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.span
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-gold text-gold-glow"
                        layoutId="activeNavIndicator"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* CTA (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm" className="border-primary-gold/20 text-soft-gold hover:border-primary-gold/60 hover:bg-primary-gold/10 font-sans tracking-wide" asChild>
            <a href="#contact">
              Let's Talk <ArrowRight className="size-4 ml-1" />
            </a>
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon-sm" className="text-white hover:text-primary-gold">
                <Menu className="size-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-75 border-l border-primary-gold/15 bg-luxury-bg/95 backdrop-blur-xl p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-12">
                  <a href="#hero" className="font-heading text-xl font-bold tracking-widest text-white">
                    <span className="text-primary-gold">ANSH</span>
                    <span className="inline-block w-1.5 h-1.5 bg-primary-gold rounded-full ml-1"></span>
                  </a>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon-sm" className="text-muted-gray hover:text-white">
                      <X className="size-6" />
                    </Button>
                  </SheetClose>
                </div>
                
                <nav className="flex flex-col gap-6">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.href.substring(1)
                    return (
                      <SheetClose asChild key={item.name}>
                        <a
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.href)}
                          className={`text-lg tracking-widest uppercase transition-colors py-2 block border-b border-white/5 ${
                            isActive ? "text-primary-gold font-bold" : "text-muted-gray hover:text-white"
                          }`}
                        >
                          {item.name}
                        </a>
                      </SheetClose>
                    )
                  })}
                </nav>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 justify-center">
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-white/10 hover:border-primary-gold/30 hover:text-soft-gold text-muted-gray transition-colors">
                    <Github className="size-5" />
                  </a>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-white/10 hover:border-primary-gold/30 hover:text-soft-gold text-muted-gray transition-colors">
                    <Linkedin className="size-5" />
                  </a>
                  <a href={`mailto:${personalInfo.email}`} className="p-2 rounded-full border border-white/10 hover:border-primary-gold/30 hover:text-soft-gold text-muted-gray transition-colors">
                    <Mail className="size-5" />
                  </a>
                </div>
                <p className="text-xs text-muted-gray text-center font-sans">
                  © 2026 Ansh Khare. Luxury Developer Portfolio.
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}

function Github({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function Linkedin({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" rx="1" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
