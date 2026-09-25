"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Send, ArrowUpRight, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { portfolioData } from "@/data/portfolioData"

export function Contact() {
  const { personalInfo } = portfolioData
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const subject = encodeURIComponent("Project Collaboration / Opportunity Inquiry")
  const body = encodeURIComponent(
    `Hi ${personalInfo.name},\n\nI came across your portfolio and would love to connect regarding an opportunity / project.\n\nBest regards,`
  )
  const mailtoUrl = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#050816]">
      {/* Background spotlights */}
      <div className="absolute bottom-[-10%] left-[10%] w-[500px] h-[500px] bg-primary-gold/5 rounded-full blur-[140px] pointer-events-none" />

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
            Get In Touch
          </motion.span>
          <motion.h2
            className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Let&apos;s Start a Conversation
          </motion.h2>
          <motion.div
            className="w-12 h-1 bg-primary-gold mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          {/* Left Column: Direct info */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-between gap-8 h-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col gap-6">
              <h3 className="font-heading text-2xl font-bold text-white tracking-wide">
                Available for Opportunities
              </h3>
              <p className="font-sans text-sm text-muted-gray leading-relaxed">
                I&apos;m currently looking for new opportunities in Product-focused engineering. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
              </p>

              <div className="flex flex-col gap-4 mt-2">
                <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-[#0B1120]/40 group hover:border-primary-gold/30 transition-all">
                  <div className="p-2.5 rounded-lg bg-primary-gold/10 text-soft-gold border border-primary-gold/20 group-hover:scale-110 transition-transform">
                    <Mail className="size-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-muted-gray uppercase tracking-widest block font-sans">Drop a Line</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-white hover:text-soft-gold transition-colors font-mono">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-8">
              <span className="text-xs uppercase tracking-widest font-semibold text-muted-gray">Social Channels</span>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" className="border-white/10 hover:border-primary-gold/30 hover:bg-primary-gold/5 text-muted-gray hover:text-soft-gold flex-1 rounded-xl" asChild>
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                    <Github className="size-4 mr-2" /> GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="border-white/10 hover:border-primary-gold/30 hover:bg-primary-gold/5 text-muted-gray hover:text-soft-gold flex-1 rounded-xl" asChild>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="size-4 mr-2" /> LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Direct Connect CTA Card */}
          <motion.div
            className="lg:col-span-7 h-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-2xl glass-panel p-6 sm:p-8 md:p-10 border border-white/5 bg-[#0B1120]/40 flex flex-col justify-between relative overflow-hidden group shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-primary-gold/25 transition-all duration-500 h-full">
              {/* Ambient gold hover glow & radial spotlights */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-gold/10 rounded-full blur-3xl group-hover:bg-primary-gold/20 transition-all duration-700 pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary-gold/5 rounded-full blur-3xl group-hover:bg-primary-gold/15 transition-all duration-700 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col gap-6">
                {/* Gold-accented badge & Availability status */}
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-gold/10 border border-primary-gold/25 text-soft-gold text-xs font-mono font-medium tracking-wide">
                    <Send className="size-3.5 text-primary-gold" />
                    <span>DIRECT CONNECT</span>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-muted-gray">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[11px] font-sans">Open for Opportunities</span>
                  </div>
                </div>

                {/* Headline & Invitation Message */}
                <div className="flex flex-col gap-3">
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                    Let&apos;s Build Something Together
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-muted-gray leading-relaxed">
                    Whether you are recruiting for engineering roles, looking to collaborate on high-impact products, or exploring scalable AI architectures, my inbox is open. Let&apos;s talk and make it happen.
                  </p>
                </div>

                {/* Direct Email Address Display Box with Quick Copy */}
                <div className="p-4 rounded-xl border border-white/5 bg-[#050816]/60 flex items-center justify-between gap-3 group/box hover:border-primary-gold/20 transition-all">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 rounded-lg bg-primary-gold/10 text-primary-gold border border-primary-gold/20 shrink-0">
                      <Mail className="size-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] text-muted-gray uppercase tracking-widest block font-sans">Email Address</span>
                      <span className="text-sm font-semibold text-white font-mono truncate block select-all">
                        {personalInfo.email}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-white/10 hover:border-primary-gold/40 bg-white/5 hover:bg-primary-gold/10 text-xs text-muted-gray hover:text-soft-gold transition-all cursor-pointer font-sans shrink-0"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check className="size-3.5 text-primary-gold" />
                        <span className="text-soft-gold font-medium">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="size-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Action Buttons: Primary Gold CTA & Secondary Copy CTA */}
              <div className="relative z-10 flex flex-col sm:flex-row gap-3 pt-6 mt-6 border-t border-white/5">
                <a
                  href={mailtoUrl}
                  className="flex-1 h-12 font-sans font-bold text-sm tracking-wide rounded-xl flex items-center justify-center gap-2 bg-primary-gold hover:bg-soft-gold text-luxury-bg shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:shadow-[0_0_30px_rgba(212,175,55,0.35)] transition-all duration-300 group/btn"
                >
                  <Send className="size-4" />
                  <span>Send Direct Email</span>
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>

                <Button
                  type="button"
                  variant="outline"
                  onClick={handleCopyEmail}
                  className="h-12 border-white/10 hover:border-primary-gold/30 hover:bg-primary-gold/5 text-muted-gray hover:text-soft-gold transition-all rounded-xl px-5 font-sans"
                >
                  {copied ? (
                    <>
                      <Check className="size-4 text-primary-gold mr-1.5" />
                      <span>Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-4 mr-1.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
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
