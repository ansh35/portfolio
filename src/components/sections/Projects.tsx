"use client"

import React from "react"
import { motion, Variants } from "framer-motion"
import { ExternalLink, CheckCircle2, PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { portfolioData } from "@/data/portfolioData"

export function Projects() {
  const projects = portfolioData.projects

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#050816]">
      {/* Decorative background light leak */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span 
            className="text-primary-gold text-xs uppercase tracking-widest font-semibold mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Portfolio
          </motion.span>
          <motion.h2 
            className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Engineering Showcase
          </motion.h2>
          <motion.div 
            className="w-12 h-1 bg-primary-gold mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl glass-panel border border-white/5 bg-[#0B1120]/60 overflow-hidden flex flex-col hover:border-primary-gold/30 hover:bg-primary-gold/5 transition-all duration-500 shadow-2xl"
            >
              {/* Card Header: Category & Image */}
              <div className="relative aspect-video w-full overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000 ease-out brightness-[0.6] group-hover:brightness-[0.8]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-90" />
                
                {/* Category Badge Over Image */}
                <div className="absolute top-6 left-6">
                  <Badge className="bg-primary-gold/20 backdrop-blur-xl border border-primary-gold/30 text-primary-gold text-[10px] uppercase font-bold tracking-[0.2em] px-3 py-1 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                    {project.category}
                  </Badge>
                </div>

                {/* Tech Stack Overlay on Image (Bottom) */}
                <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                   {project.tech.map((t) => (
                     <Badge key={t} variant="secondary" className="bg-black/60 backdrop-blur-md border border-white/10 text-white/90 text-[9px] uppercase font-bold tracking-wider px-2 py-0.5">
                       {t}
                     </Badge>
                   ))}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 md:p-10 flex flex-col flex-grow gap-8">
                {/* Title & Description */}
                <div className="flex flex-col gap-3">
                  <h3 className="font-heading text-3xl font-bold text-white tracking-tight group-hover:text-gold-glow group-hover:text-primary-gold transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-gray leading-relaxed italic border-l-2 border-primary-gold/30 pl-4 py-1">
                    {project.description}
                  </p>
                </div>

                {/* Problem & Solution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-primary-gold/70">The Problem</span>
                    <p className="text-[12px] text-muted-gray leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-soft-gold">The Solution</span>
                    <p className="text-[12px] text-white/80 leading-relaxed font-medium">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Contribution & Features */}
                <div className="flex flex-col gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-primary-gold">My Contribution</span>
                    <p className="text-[13px] text-muted-gray leading-relaxed">
                      {project.contribution}
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-primary-gold">Key Features</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="size-3.5 text-primary-gold shrink-0" />
                          <span className="text-[11px] text-white/70 font-medium tracking-wide">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-auto flex items-center gap-4">
                  <Button variant="outline" className="flex-1 rounded-2xl border-white/10 hover:border-primary-gold/40 hover:bg-primary-gold/5 text-muted-gray hover:text-white transition-all duration-300 h-12" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="size-4 mr-2" /> Source Code
                    </a>
                  </Button>
                  {(project.liveUrl || project.demoUrl) && (
                    <Button className="flex-[1.2] rounded-2xl bg-primary-gold hover:bg-soft-gold text-luxury-bg font-bold shadow-[0_10px_20px_rgba(212,175,55,0.1)] group/btn transition-all duration-300 h-12" asChild>
                      <a href={project.liveUrl || project.demoUrl} target="_blank" rel="noopener noreferrer">
                        {project.liveUrl ? (
                          <><ExternalLink className="size-4 mr-2 group-hover/btn:translate-x-0.5 transition-transform" /> Live Project</>
                        ) : (
                          <><PlayCircle className="size-4 mr-2" /> View Demo</>
                        )}
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Hover Accent Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-gold/20 via-transparent to-soft-gold/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
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
