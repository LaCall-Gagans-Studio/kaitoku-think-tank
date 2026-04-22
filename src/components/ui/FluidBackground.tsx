"use client";

import { motion } from "framer-motion";

export function FluidBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-base-bg">
      <div className="absolute inset-0 blur-[120px] opacity-70">
        <motion.div
          animate={{
            x: ["0%", "15%", "-5%", "10%", "0%"],
            y: ["0%", "-10%", "15%", "-5%", "0%"],
            scale: [1, 1.15, 0.9, 1.05, 1],
          }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
          }}
          className="absolute -top-1/4 -left-1/4 w-3/4 h-3/4 rounded-full bg-primary/40 mix-blend-multiply"
        />
        <motion.div
          animate={{
            x: ["0%", "-15%", "10%", "-5%", "0%"],
            y: ["0%", "15%", "-10%", "10%", "0%"],
            scale: [1, 0.9, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
          className="absolute -bottom-1/4 -right-1/4 w-3/4 h-3/4 rounded-full bg-accent/30 mix-blend-multiply"
        />
        <motion.div
          animate={{
            x: ["0%", "20%", "-15%", "10%", "0%"],
            y: ["0%", "5%", "-20%", "15%", "0%"],
            scale: [1, 1.25, 0.85, 1.1, 1],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          className="absolute top-1/4 right-1/4 w-1/2 h-1/2 rounded-full bg-primary/20 mix-blend-multiply"
        />
      </div>
      {/* 
        和紙や磨りガラスのような微細なザラつき（テクスチャ感）を強調 
        opacityを0.03から0.08へ、mix-blend-overlayを追加してより深く馴染ませる
      */}
      <div 
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>
    </div>
  );
}
