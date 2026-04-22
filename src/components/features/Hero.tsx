"use client";

import { motion } from "framer-motion";
import { CornerButton } from "../ui/CornerButton";
import { TRANSITIONS } from "@/lib/animations";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const charVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: TRANSITIONS.slow,
    },
  };

  const buttonVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { ...TRANSITIONS.slow, delay: 1.5 },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 w-full overflow-hidden">
      
      {/* 抽象的な「共創」を象徴する幾何学オーブ (Abstract Orbs) — z-0で背面に */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <motion.div
          animate={{
            x: ["-10vw", "15vw", "-5vw", "-10vw"],
            y: ["10vh", "-10vh", "5vh", "10vh"],
            rotate: [0, 90, 180, 360],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] border-[1px] border-primary/30 rounded-full"
        />
        <motion.div
          animate={{
            x: ["10vw", "-15vw", "5vw", "10vw"],
            y: ["-10vh", "15vh", "-5vh", "-10vh"],
            rotate: [360, 180, 90, 0],
          }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] border-[1px] border-accent/30 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20vw] h-[20vw] bg-primary/10 rounded-full blur-3xl"
        />
      </div>

      {/* メインコンテンツ — z-20で確実に前面 */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-20 flex flex-col items-center justify-center w-full max-w-6xl"
      >
        <div className="mb-20 px-2 sm:px-4 w-full text-center">
          <h1 className="flex flex-col items-center gap-y-4 md:gap-y-6">
            {/* 「第2回」 — サブタイトル */}
            <motion.span
              variants={charVariants}
              className="text-[clamp(1rem,3vw,1.875rem)] font-light tracking-[0.2em] text-primary inline-block whitespace-nowrap break-keep"
            >
              第2回
            </motion.span>
            {/* 「次世代自治共創会議」 — メインタイトル（文節保護） */}
            <motion.span
              variants={charVariants}
              className="text-[clamp(2rem,7vw,6rem)] font-light tracking-[0.1em] sm:tracking-[0.15em] text-text-primary leading-tight inline-block whitespace-nowrap break-keep"
            >
              次世代自治共創会議
            </motion.span>
          </h1>

          {/* サブコピー */}
          <motion.p 
            variants={charVariants}
            className="mt-8 text-base md:text-lg font-light text-text-primary/50 tracking-widest break-keep"
          >
            <span className="inline-block">2026年10月3日（土）</span>
            <span className="inline-block mx-2 text-primary/30">|</span>
            <span className="inline-block">東京大学本郷キャンパス山上会館</span>
          </motion.p>
        </div>

        <motion.div variants={buttonVariants}>
          <CornerButton>プレエントリー</CornerButton>
        </motion.div>
      </motion.div>

      {/* スクロールインジケーター — z-20 */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
      >
        <span className="text-[10px] tracking-[0.3em] text-text-primary/40 font-medium">SCROLL</span>
        <div className="w-[1px] h-16 bg-text-primary/10 relative overflow-hidden">
          <motion.div 
            animate={{ 
              scaleY: [0, 1, 0],
              transformOrigin: ["top", "top", "bottom"] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }}
            className="absolute inset-0 bg-primary origin-top"
          />
        </div>
      </motion.div>
    </section>
  );
}
