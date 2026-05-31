"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, MapPin, Send, Check, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { portfolioData } from "@/data/portfolioData"

export function Contact() {
  const { personalInfo } = portfolioData
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!form.name || !form.email || !form.subject || !form.message) {
      setErrorMsg("All fields are required.")
      setStatus("error")
      return
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setErrorMsg("Please enter a valid email address.")
      setStatus("error")
      return
    }

    setStatus("loading")
    setErrorMsg("")

    setTimeout(() => {
      setStatus("success")
      setForm({ name: "", email: "", subject: "", message: "" })
    }, 2000)
  }

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
            Let's Start a Conversation
          </motion.h2>
          <motion.div 
            className="w-12 h-1 bg-primary-gold mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct info */}
          <motion.div 
            className="lg:col-span-5 flex flex-col gap-8 h-full"
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
                I'm currently looking for new opportunities in Product-focused engineering. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="flex flex-col gap-4 mt-4">
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

                <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-[#0B1120]/40 group hover:border-primary-gold/30 transition-all">
                  <div className="p-2.5 rounded-lg bg-primary-gold/10 text-soft-gold border border-primary-gold/20 group-hover:scale-110 transition-transform">
                    <MapPin className="size-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-muted-gray uppercase tracking-widest block font-sans">Location</span>
                    <span className="text-sm font-semibold text-white">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-auto pt-8">
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

          {/* Right Column: Contact form */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="rounded-2xl glass-panel p-6 sm:p-8 border border-white/5 bg-[#0B1120]/40 flex flex-col gap-5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-semibold text-white tracking-wide uppercase">Your Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    disabled={status === "loading" || status === "success"}
                    className="bg-[#050816]/60 border-white/10 focus:border-primary-gold/50 transition-all rounded-xl h-11"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-semibold text-white tracking-wide uppercase">Your Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    disabled={status === "loading" || status === "success"}
                    className="bg-[#050816]/60 border-white/10 focus:border-primary-gold/50 transition-all rounded-xl h-11"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 relative z-10">
                <label htmlFor="subject" className="text-xs font-semibold text-white tracking-wide uppercase">Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Inquiry about custom project"
                  disabled={status === "loading" || status === "success"}
                  className="bg-[#050816]/60 border-white/10 focus:border-primary-gold/50 transition-all rounded-xl h-11"
                />
              </div>

              <div className="flex flex-col gap-2 relative z-10">
                <label htmlFor="message" className="text-xs font-semibold text-white tracking-wide uppercase">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message details..."
                  className="min-h-[120px] resize-none bg-[#050816]/60 border-white/10 focus:border-primary-gold/50 transition-all rounded-xl"
                  disabled={status === "loading" || status === "success"}
                />
              </div>

              {/* Feedback messages */}
              <AnimatePresence mode="wait">
                {status === "error" && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-3.5 rounded-xl border border-red-500/20 bg-red-500/5 text-red-400 text-xs flex items-center gap-2 relative z-10"
                  >
                    <AlertCircle className="size-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </motion.div>
                )}

                {status === "success" && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-3.5 rounded-xl border border-primary-gold/20 bg-primary-gold/5 text-primary-gold text-xs flex items-center gap-2 relative z-10"
                  >
                    <Check className="size-4 shrink-0" />
                    <span>Message sent successfully! I will reach back to you shortly.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit button */}
              <Button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={`w-full h-12 font-sans font-bold tracking-wide rounded-xl flex items-center justify-center gap-2 border transition-all duration-500 relative z-10 ${
                  status === "success"
                    ? "bg-primary-gold border-transparent text-luxury-bg scale-[0.98]"
                    : "bg-primary-gold hover:bg-soft-gold border-transparent text-luxury-bg shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                }`}
              >
                {status === "loading" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-luxury-bg border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    <Check className="size-4" />
                    Message Sent
                  </>
                ) : (
                  <>
                    <Send className="size-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
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
