"use client"

import React from "react"
import { motion, Variants } from "framer-motion"
import { Award, Compass, Heart, Shield } from "lucide-react"
import { portfolioData } from "@/data/portfolioData"

export function About() {
  const { personalInfo, aboutCards } = portfolioData
  const { bio } = personalInfo

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const revealVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="about" className="py-24 relative overflow-hidden">
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
            Capabilities
          </motion.span>
          <motion.h2 
            className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Digital Architecture & AI
          </motion.h2>
          <motion.div 
            className="w-12 h-1 bg-primary-gold mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Biography */}
          <motion.div 
            className="lg:col-span-12 xl:col-span-5 flex flex-col gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={revealVariants} className="flex flex-col gap-6">
              <h3 className="font-heading text-3xl font-bold text-white tracking-wide">
                Engineering <span className="text-primary-gold text-gold-glow">Excellence</span>
              </h3>
              <p className="font-sans text-lg text-muted-gray leading-relaxed max-w-2xl">
                {bio}
              </p>
              <div className="flex flex-wrap gap-4 mt-2">
                 {["Scalable Web Apps", "AI Integration", "Backend APIs", "Modern Frontend"].map((tag) => (
                   <span key={tag} className="px-4 py-2 rounded-full border border-primary-gold/20 bg-primary-gold/5 text-soft-gold text-xs font-semibold tracking-wider uppercase">
                     {tag}
                   </span>
                 ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Experience Cards */}
          <motion.div 
            className="lg:col-span-12 xl:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {aboutCards.map((card, index) => (
              <motion.div
                key={card.title}
                variants={revealVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative h-full rounded-2xl glass-panel p-8 border border-white/5 bg-[#0B1120]/40 overflow-hidden hover:border-primary-gold/30 hover:bg-primary-gold/5 transition-all duration-500"
              >
                 {/* Glowing gradient back */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                 
                 <div className="relative z-10">
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-gold/10 text-primary-gold border border-primary-gold/20">
                       <span className="font-heading font-black text-xl">{index + 1}</span>
                    </div>
                    <h4 className="font-heading text-xl font-bold text-white mb-4 group-hover:text-primary-gold transition-colors">{card.title}</h4>
                    <div className="flex flex-wrap gap-2">
                       {card.tech.map((t) => (
                         <span key={t} className="text-xs font-mono text-muted-gray group-hover:text-soft-gold transition-colors">
                           • {t}
                         </span>
                       ))}
                    </div>
                 </div>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}

