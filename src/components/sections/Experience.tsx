"use client"

import React from "react"
import { motion, Variants } from "framer-motion"
import { Calendar, Star, FileCheck } from "lucide-react"
import { portfolioData } from "@/data/portfolioData"

export function Experience() {
  const experiences = portfolioData.experience

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#050816]">
      {/* Background spotlights */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[300px] bg-primary-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.span 
            className="text-primary-gold text-xs uppercase tracking-widest font-semibold mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Journey
          </motion.span>
          <motion.h2 
            className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Work Experience
          </motion.h2>
          <motion.div 
            className="w-12 h-1 bg-primary-gold mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company + exp.role}
                variants={itemVariants}
                className="relative pl-8 md:pl-0"
              >
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-gold via-primary-gold/20 to-transparent md:-translate-x-1/2 hidden md:block" />
                
                {/* Timeline Dot */}
                <div className="absolute left-[-4px] md:left-1/2 top-0 w-2 h-2 rounded-full bg-primary-gold shadow-[0_0_10px_rgba(212,175,55,0.8)] md:-translate-x-1/2 z-10" />

                <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                   <div className="w-full md:w-1/2">
                      <div className="group relative p-8 rounded-2xl glass-panel border border-white/5 bg-[#0B1120]/40 hover:border-primary-gold/30 hover:bg-primary-gold/5 transition-all duration-500 overflow-hidden">
                         <div className="absolute inset-0 bg-gradient-to-tr from-primary-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                         
                         <div className="flex flex-col gap-4 relative z-10">
                            <div className="flex justify-between items-start">
                               <div>
                                  <h3 className="font-heading text-2xl font-bold text-white group-hover:text-primary-gold transition-colors">{exp.role}</h3>
                                  <p className="text-soft-gold font-medium">{exp.company}</p>
                                </div>
                               <span className="text-[10px] font-mono text-muted-gray uppercase tracking-widest">{exp.duration}</span>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 mt-2">
                               {exp.highlights.map((h) => (
                                 <span key={h} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-muted-gray text-[10px] font-bold uppercase tracking-tighter group-hover:text-soft-gold group-hover:border-primary-gold/20 transition-all">
                                   √ {h}
                                 </span>
                               ))}
                            </div>
                            
                            <div className="flex items-center gap-4 mt-2">
                                <div className="px-3 py-1 w-fit rounded-md bg-primary-gold/10 border border-primary-gold/20 text-primary-gold text-[10px] font-bold uppercase">
                                   {exp.type}
                                </div>
                                {(exp.certificateUrl || (exp.company.includes("Haldiram") && portfolioData.certificateFolderUrl)) && (
                                   <a 
                                      href={exp.certificateUrl || portfolioData.certificateFolderUrl} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-1.5 text-[10px] font-bold text-soft-gold hover:text-primary-gold transition-colors uppercase tracking-wider group/link"
                                   >
                                      <FileCheck className="size-3.5 group-hover/link:animate-pulse" />
                                      View Certificate{exp.certificateUrl ? "" : "s"}
                                   </a>
                                )}
                             </div>
                         </div>
                      </div>
                   </div>
                   <div className="hidden md:block w-1/2" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
