"use client"

import React from "react"
import { motion } from "framer-motion"

const concepts = [
  "MVC Architecture",
  "Object-Oriented Programming (OOP)",
  "CRUD Operations",
  "REST API Design",
  "JWT Authentication",
  "Authentication & Authorization",
  "API Integration",
  "State Management",
  "Git Workflow",
  "Agile Scrum"
]

export function EngineeringConcepts() {
  return (
    <section id="engineering-concepts" className="py-24 relative overflow-hidden bg-[#050816]">
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
            Fundamentals
          </motion.span>
          <motion.h2 
            className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Engineering Concepts
          </motion.h2>
          <motion.div 
            className="w-12 h-1 bg-primary-gold mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        {/* Concepts Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {concepts.map((concept, index) => (
            <motion.div
              key={concept}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="relative px-6 py-4 rounded-2xl glass-panel border border-white/5 bg-[#0B1120]/40 overflow-hidden hover:border-primary-gold/40 hover:bg-primary-gold/5 transition-all duration-300">
                {/* Gold Glow Effect */}
                <div className="absolute inset-0 bg-primary-gold opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300" />
                <span className="relative z-10 font-sans text-sm md:text-base font-semibold text-muted-gray group-hover:text-white group-hover:text-gold-glow transition-colors duration-300 tracking-wide text-center block">
                  {concept}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
