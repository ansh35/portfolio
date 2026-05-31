"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { portfolioData } from "@/data/portfolioData"

export function Hero() {
  const { bio, roles } = portfolioData.personalInfo
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [roles.length])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.getElementById("projects")
    if (element) {
      const offset = 80
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background ambient spotlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-primary-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left: Intro Content */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start gap-4 text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Main Heading */}
          <motion.h1 variants={itemVariants} className="font-heading text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Building <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-gold via-soft-gold to-white text-gold-glow">
              Intelligent Web Experiences.
            </span>
          </motion.h1>

          {/* Dynamic Role Text Cycler */}
          <motion.div variants={itemVariants} className="flex flex-col gap-2">
            <div className="h-10 sm:h-12 flex items-center font-heading text-xl sm:text-2xl text-soft-gold font-medium tracking-wide">
              <span className="text-muted-gray mr-2 font-sans text-lg font-normal uppercase tracking-widest">I am a</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-gold-glow border-b border-primary-gold/30 pb-0.5"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-muted-gray font-sans text-lg sm:text-xl tracking-wide italic"
            >
              From Idea To Deployment.
            </motion.div>
          </motion.div>

          {/* Bio text */}
          <motion.p variants={itemVariants} className="font-sans text-base sm:text-lg text-muted-gray leading-relaxed max-w-xl">
            {bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-4">
            <Button size="lg" className="w-full sm:w-auto bg-primary-gold hover:bg-soft-gold text-luxury-bg font-sans font-bold tracking-wider rounded-lg border border-transparent shadow-[0_0_20px_rgba(212,175,55,0.15)] group transition-all duration-300" asChild>
              <a href="#projects" onClick={handleScrollToProjects}>
                View Projects 
                <ArrowRight className="size-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary-gold/20 text-soft-gold hover:border-primary-gold/60 hover:bg-primary-gold/5 font-sans tracking-wider rounded-lg group transition-all duration-300" asChild>
              <a href="https://drive.google.com/file/d/1x-qOHcHC-2wErBIUtI7pKew-lNP7H-B9/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Download Resume
                <Download className="size-4 ml-1.5 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Right: Tech Orbit Redesign */}
        <motion.div
          className="lg:col-span-5 flex justify-center items-center relative w-full aspect-square"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center">
            {/* Orbit Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Inner Ring */}
              <motion.div 
                className="absolute w-[220px] h-[220px] rounded-full border border-primary-gold/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              {/* Outer Ring */}
              <motion.div 
                className="absolute w-[360px] h-[360px] rounded-full border border-soft-gold/10 border-dashed"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Tech Pills Mapper */}
            {/* Inner Ring Items */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[
                { name: "React.js", category: "Frontend Framework", level: "Advanced", angle: 0, ring: 110 },
                { name: "Next.js", category: "Full Stack Framework", level: "Advanced", angle: 90, ring: 110 },
                { name: "TypeScript", category: "Programming Language", level: "Advanced", angle: 180, ring: 110 },
                { name: "Node.js", category: "Backend Runtime", level: "Advanced", angle: 270, ring: 110 },
              ].map((tech) => (
                <TechOrbitPill key={tech.name} tech={tech} ringRotation={360} duration={25} />
              ))}
              
              {/* Outer Ring Items */}
              {[
                { name: "MongoDB", category: "Database", level: "Intermediate", angle: 45, ring: 180 },
                { name: "FastAPI", category: "Backend Framework", level: "Intermediate", angle: 135, ring: 180 },
                { name: "LangChain", category: "AI Framework", level: "Intermediate", angle: 225, ring: 180 },
                { name: "Express.js", category: "Backend Framework", level: "Advanced", angle: 315, ring: 180 },
              ].map((tech) => (
                <TechOrbitPill key={tech.name} tech={tech} ringRotation={-360} duration={40} />
              ))}
            </div>

            {/* Glowing Center Core */}
            <motion.div 
              className="relative z-20 w-28 h-28 rounded-full bg-gradient-to-tr from-primary-gold/40 to-soft-gold/40 backdrop-blur-xl flex items-center justify-center p-[2px] shadow-[0_0_50px_rgba(212,175,55,0.3)] ring-1 ring-primary-gold/20"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-full h-full rounded-full bg-luxury-bg/90 flex flex-col items-center justify-center">
                <span className="font-heading font-black text-3xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary-gold to-white">AK</span>
                <span className="text-[9px] font-sans font-bold tracking-[0.2em] text-soft-gold/80 mt-1 uppercase">Ansh Khare</span>
              </div>
            </motion.div>

            {/* Background Glow */}
            <div className="absolute w-[300px] h-[300px] bg-primary-gold/5 rounded-full blur-[100px] -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function TechOrbitPill({ tech, ringRotation, duration }: { 
  tech: { name: string, category: string, level: string, angle: number, ring: number },
  ringRotation: number,
  duration: number 
}) {
  const [isHovered, setIsHovered] = React.useState(false)

  // Calculate position based on angle and ring radius
  const x = Math.cos((tech.angle * Math.PI) / 180) * tech.ring
  const y = Math.sin((tech.angle * Math.PI) / 180) * tech.ring

  return (
    <motion.div
      className="absolute z-10"
      initial={{ x, y }}
      animate={{ 
        rotate: ringRotation,
      }}
      transition={{ 
        duration: duration, 
        repeat: Infinity, 
        ease: "linear" 
      }}
      style={{ 
        transformOrigin: `${-x}px ${-y}px`,
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
      }}
    >
      {/* Reverse rotation to keep text upright */}
      <motion.div
        animate={{ rotate: -ringRotation }}
        transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="px-3 py-1.5 rounded-full glass-panel border border-primary-gold/20 bg-luxury-bg/40 backdrop-blur-md cursor-default pointer-events-auto flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.1)] group hover:border-primary-gold/50 transition-colors"
        >
          <span className="text-[10px] font-bold tracking-wider text-white whitespace-nowrap group-hover:text-primary-gold transition-colors">
            {tech.name}
          </span>
          <div className="absolute inset-0 rounded-full bg-primary-gold/5 opacity-0 group-hover:opacity-100 transition-opacity blur-md" />
        </motion.div>

        {/* Premium Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: -5, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 pointer-events-none"
            >
              <div className="px-3 py-2 rounded-xl bg-luxury-bg border border-primary-gold/30 shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(212,175,55,0.1)] min-w-[140px] backdrop-blur-xl">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-soft-gold uppercase tracking-widest font-bold border-b border-primary-gold/20 pb-1 mb-1">
                    {tech.name}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[9px] text-muted-gray uppercase tracking-tighter">Category</span>
                    <span className="text-[11px] text-white font-medium">{tech.category}</span>
                  </div>
                  <div className="flex flex-col mt-0.5">
                    <span className="text-[9px] text-muted-gray uppercase tracking-tighter">Level</span>
                    <span className="text-[11px] text-primary-gold font-bold">{tech.level}</span>
                  </div>
                </div>
                {/* Tooltip Arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-primary-gold/30" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
