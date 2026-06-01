"use client"

import React from "react"
import { motion, Variants } from "framer-motion"
import { Award, CheckCircle2, ExternalLink } from "lucide-react"
import { portfolioData } from "@/data/portfolioData"

export function Certifications() {
  const certifications = portfolioData.certifications

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

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#050816]">
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
            Credentials
          </motion.span>
          <motion.h2 
            className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Certifications
          </motion.h2>
          <motion.div 
            className="w-12 h-1 bg-primary-gold mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="group relative rounded-2xl glass-panel p-6 border border-white/5 bg-[#0B1120]/40 overflow-hidden hover:border-primary-gold/30 hover:bg-primary-gold/5 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-gold/10 text-primary-gold rounded-xl border border-primary-gold/20 shrink-0">
                    <Award className="size-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-primary-gold transition-colors">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-muted-gray">
                      <span className="font-semibold text-soft-gold">{cert.issuer}</span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="size-3 text-green-500/70" />
                        Verified
                      </span>
                    </div>
                  </div>
                </div>

                {cert.certificateUrl && (
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[10px] font-bold text-soft-gold hover:text-primary-gold transition-colors uppercase tracking-wider w-fit"
                  >
                    <ExternalLink className="size-3.5" />
                    View Certificate
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
