"use client"

import React from "react"
import { motion, Variants } from "framer-motion"
import { Layers, Server, Cpu, Wrench, Globe } from "lucide-react"
import { portfolioData } from "@/data/portfolioData"

export function Skills() {
  const { skillCategories } = portfolioData

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const categoryIcons: Record<string, any> = {
    "Frontend": Layers,
    "Backend": Server,
    "Database": Cpu,
    "AI & Automation": Cpu,
    "Deployment": Globe,
    "Tools": Wrench
  }

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#050816]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03),transparent_70%)] pointer-events-none" />

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
            Stack
          </motion.span>
          <motion.h2 
            className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Technical Arsenal
          </motion.h2>
          <motion.div 
            className="w-12 h-1 bg-primary-gold mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        {/* Bento Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category) => {
            const IconComponent = categoryIcons[category.title] || Wrench
            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="group relative rounded-2xl glass-panel p-6 border border-white/5 bg-[#0B1120]/40 overflow-hidden hover:border-primary-gold/20 hover:bg-primary-gold/5 transition-all duration-300"
              >
                {/* Visual accent */}
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                   <IconComponent className="size-12 text-primary-gold" />
                </div>

                <div className="relative z-10">
                   <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-primary-gold/10 text-primary-gold rounded-lg border border-primary-gold/20 group-hover:scale-110 transition-transform duration-300">
                         <IconComponent className="size-5" />
                      </div>
                      <h3 className="font-heading text-xl font-bold text-white tracking-wide">
                        {category.title}
                      </h3>
                   </div>

                   <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span 
                          key={skill} 
                          className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-muted-gray text-xs font-medium hover:text-white hover:border-primary-gold/30 hover:bg-primary-gold/10 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                   </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

