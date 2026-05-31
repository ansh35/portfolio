"use client"

import React from "react"
import { motion } from "framer-motion"

const STAR_PARTICLES = [
  { size: 1.6, top: 22, left: 28, delay: 0, duration: 3.5 },
  { size: 1, top: 35, left: 47, delay: 0.7, duration: 4.5 },
  { size: 2.4, top: 48, left: 66, delay: 1.4, duration: 5.5 },
  { size: 1.8, top: 61, left: 85, delay: 2.1, duration: 6.5 },
  { size: 1.2, top: 74, left: 14, delay: 2.8, duration: 7.5 },
  { size: 2.6, top: 87, left: 33, delay: 3.5, duration: 3.5 },
  { size: 2, top: 10, left: 52, delay: 0, duration: 4.5 },
  { size: 1.4, top: 23, left: 71, delay: 0.7, duration: 5.5 },
  { size: 2.8, top: 36, left: 90, delay: 1.4, duration: 6.5 },
  { size: 2.2, top: 49, left: 19, delay: 2.1, duration: 7.5 },
  { size: 1.6, top: 62, left: 38, delay: 2.8, duration: 3.5 },
  { size: 1, top: 75, left: 57, delay: 3.5, duration: 4.5 },
  { size: 2.4, top: 88, left: 76, delay: 0, duration: 5.5 },
  { size: 1.8, top: 11, left: 5, delay: 0.7, duration: 6.5 },
  { size: 1.2, top: 24, left: 24, delay: 1.4, duration: 7.5 },
  { size: 2.6, top: 37, left: 43, delay: 2.1, duration: 3.5 },
  { size: 2, top: 50, left: 62, delay: 2.8, duration: 4.5 },
  { size: 1.4, top: 63, left: 81, delay: 3.5, duration: 5.5 },
  { size: 2.8, top: 76, left: 10, delay: 0, duration: 6.5 },
  { size: 2.2, top: 89, left: 29, delay: 0.7, duration: 7.5 },
  { size: 1.6, top: 12, left: 48, delay: 1.4, duration: 3.5 },
  { size: 1, top: 25, left: 67, delay: 2.1, duration: 4.5 },
  { size: 2.4, top: 38, left: 86, delay: 2.8, duration: 5.5 },
  { size: 1.8, top: 51, left: 15, delay: 3.5, duration: 6.5 },
  { size: 1.2, top: 64, left: 34, delay: 0, duration: 7.5 },
  { size: 2.6, top: 77, left: 53, delay: 0.7, duration: 3.5 },
  { size: 2, top: 90, left: 72, delay: 1.4, duration: 4.5 },
  { size: 1.4, top: 13, left: 91, delay: 2.1, duration: 5.5 },
  { size: 2.8, top: 26, left: 20, delay: 2.8, duration: 6.5 },
  { size: 2.2, top: 39, left: 39, delay: 3.5, duration: 7.5 },
]

export function BackgroundGlow() {
  const stars = STAR_PARTICLES

  return (
    <div className="fixed inset-0 -z-50 w-full h-full bg-[#050816] overflow-hidden pointer-events-none">
      {/* Cinematic Glowing Background blobs */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-primary-gold/10 to-transparent blur-[120px]"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tl from-soft-gold/5 to-transparent blur-[140px]"
        animate={{
          x: [0, -40, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-[40%] right-[10%] w-[35%] h-[35%] rounded-full bg-gradient-to-tr from-primary-gold/5 to-transparent blur-[100px]"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Subtle Star Particles */}
      <div className="absolute inset-0 opacity-30">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: star.size,
              height: star.size,
              top: `${star.top}%`,
              left: `${star.left}%`,
              boxShadow: star.size > 2 ? "0 0 8px #F5D061" : "none",
            }}
            animate={{
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  )
}
