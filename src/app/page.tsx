import React from "react"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Skills } from "@/components/sections/Skills"
import { EngineeringConcepts } from "@/components/sections/EngineeringConcepts"
import { Projects } from "@/components/sections/Projects"
import { Experience } from "@/components/sections/Experience"
import { Certifications } from "@/components/sections/Certifications"
import { Contact } from "@/components/sections/Contact"

export default function Home() {
  return (
    <main className="relative flex flex-col w-full min-h-screen">
      <Hero />
      <About />
      <Skills />
      <EngineeringConcepts />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
    </main>
  )
}