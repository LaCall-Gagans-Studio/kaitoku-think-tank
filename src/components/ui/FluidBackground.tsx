"use client";

import { motion } from "framer-motion";

export function FluidBackground() {
  return (
    /*
     * ✅ FIX: contain:strict で、この要素の描画を完全にブラウザの
     *   合成レイヤーに隔離し、ページ全体のStyle Recalcを防ぐ。
     *   will-change:transform で GPU合成スレッドに昇格させる。
     *   blur-[80px] に下げてGPU負荷を軽減（120px → 80px）。
     */
    <div
      className="fixed inset-0 -z-10 overflow-hidden bg-base-bg"
      style={{ contain: "strict" }}
    >
      <div
        className="absolute inset-0 blur-[80px] opacity-60"
        style={{ willChange: "transform" }}
      >
        {/* Primary orb — translate3d を使って合成スレッドに強制昇格 */}
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
          style={{ willChange: "transform" }}
          className="absolute -top-1/4 -left-1/4 w-3/4 h-3/4 rounded-full bg-primary/35 mix-blend-multiply"
        />

        {/* Accent orb */}
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
          style={{ willChange: "transform" }}
          className="absolute -bottom-1/4 -right-1/4 w-3/4 h-3/4 rounded-full bg-accent/25 mix-blend-multiply"
        />

        {/* Tertiary orb — 最も小さく軽量 */}
        <motion.div
          animate={{
            x: ["0%", "20%", "-15%", "10%", "0%"],
            y: ["0%", "5%", "-20%", "15%", "0%"],
            scale: [1, 1.2, 0.85, 1.1, 1],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ willChange: "transform" }}
          className="absolute top-1/4 right-1/4 w-1/2 h-1/2 rounded-full bg-primary/15 mix-blend-multiply"
        />
      </div>

      {/* ノイズテクスチャ — pointer-events:none + contain:content で描画コストを最小化 */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
        style={{
          contain: "content",
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />
    </div>
  );
}
