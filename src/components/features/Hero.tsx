"use client";

import { motion } from "framer-motion";
import { CornerButton } from "../ui/CornerButton";
import { TRANSITIONS } from "@/lib/animations";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.3 },
    },
  };

  const itemVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: TRANSITIONS.slow,
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden min-h-screen w-full opacity-30">
        <img
          src="/hero_bg.webp"
          alt="hero-background"
          className="h-full w-full"
        />
      </div>

      {/* 背景の幾何学オーブ — z-0（テキストより必ず後面）*/}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: ["-10vw", "15vw", "-5vw", "-10vw"],
            y: ["10vh", "-10vh", "5vh", "10vh"],
            rotate: [0, 360],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] border border-primary/15 rounded-full"
        />
        <motion.div
          animate={{
            x: ["10vw", "-15vw", "5vw", "10vw"],
            y: ["-10vh", "15vh", "-5vh", "-10vh"],
            rotate: [360, 0],
          }}
          transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] border border-accent/15 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] bg-primary/10 rounded-full blur-3xl"
        />
      </div>

      {/* メインコンテンツ — z-20 で必ず前面 */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-20 flex flex-col items-center justify-center w-full max-w-6xl text-center"
      >
        {/* 上部ラベル */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-block text-xs sm:text-sm font-medium tracking-[0.4em] text-primary border border-primary/20 px-6 py-2 rounded-full bg-white/30 backdrop-blur-sm">
            2026.10.03 SAT — 東京大学 山上会館
          </span>
        </motion.div>

        {/* メインタイトル */}
        <motion.div variants={itemVariants} className="mb-6">
          <p className="text-[clamp(0.875rem,2.5vw,1.25rem)] font-light tracking-[0.3em] text-primary mb-4">
            第2回
          </p>
          <h1 className="text-[clamp(2.25rem,8vw,7rem)] font-light leading-[1.1] tracking-[0.08em] sm:tracking-[0.12em] text-text-primary">
            次世代自治
            <wbr />
            共創会議
          </h1>
        </motion.div>

        {/* サブコピー */}
        <motion.p
          variants={itemVariants}
          className="text-[clamp(0.875rem,1.8vw,1.125rem)] font-medium text-text-primary/75 tracking-wider leading-relaxed mb-14 max-w-xl"
        >
          補助金に依らない、真の地方創生へ。
          <br />
          専門人材×共助×テクノロジーが交差する場。
        </motion.p>

        {/* CTA ボタン */}
        <motion.div variants={itemVariants}>
          <CornerButton>プレエントリー</CornerButton>
        </motion.div>
      </motion.div>

      {/* スクロールインジケーター */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
      >
        <span className="text-[10px] tracking-[0.35em] text-text-primary/35 font-medium uppercase">
          Scroll
        </span>
        <div className="w-[1px] h-14 bg-text-primary/10 relative overflow-hidden">
          <motion.div
            animate={{
              scaleY: [0, 1, 0],
              transformOrigin: ["top", "top", "bottom"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.5, 1],
            }}
            className="absolute inset-0 bg-primary origin-top"
          />
        </div>
      </motion.div>
    </section>
  );
}
