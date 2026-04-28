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

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: TRANSITIONS.slow,
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-[18vh] sm:pt-[22vh] px-6 sm:px-8 w-full overflow-hidden text-text-primary">
      {/* 背景画像セクション - 明るく、彩度を落として目立たなくする */}
      <div className="absolute inset-0 -z-10 bg-white">
        <img
          src="/hero_bg.webp"
          className="h-full w-full object-cover opacity-50"
        />
        {/* グラデーションのレイヤー */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/20 to-white" />
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
          className="absolute top-1/4 left-1/4 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] border border-primary/10 rounded-full"
        />
        <motion.div
          animate={{
            x: ["10vw", "-15vw", "5vw", "10vw"],
            y: ["-10vh", "15vh", "-5vh", "-10vh"],
            rotate: [360, 0],
          }}
          transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] border border-accent/10 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] bg-primary/5 rounded-full blur-3xl"
        />
      </div>

      {/* メインコンテンツ — z-20 で必ず前面 */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-20 flex flex-col items-center w-full max-w-6xl text-center"
      >
        {/* 上部ラベル */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-block text-xs sm:text-sm font-medium tracking-[0.4em] text-primary border border-primary/20 px-6 py-2 rounded-full bg-white/50 backdrop-blur-sm">
            2026.10.03 SAT <span className="hidden sm:inline">—</span>
            <br className="sm:hidden" />
            東京大学 山上会館
          </span>
        </motion.div>

        {/* メインタイトル */}
        <motion.div variants={itemVariants} className="mb-6">
          <p className="text-[clamp(0.875rem,2.5vw,1.25rem)] font-medium tracking-[0.3em] text-primary mb-4">
            第2回
          </p>
          <h1 className="text-[clamp(2.25rem,8vw,7rem)] font-light leading-[1.15] tracking-[0.08em] sm:tracking-[0.12em]">
            <span className="inline-block">次世代</span>
            <wbr />
            <span className="inline-block px-[0.04em]">自治共創会議</span>
          </h1>
        </motion.div>

        {/* サブコピー */}
        <motion.p
          variants={itemVariants}
          className="text-[clamp(0.875rem,1.8vw,1.125rem)] font-medium text-text-primary/70 tracking-wider leading-relaxed mb-12 max-w-xl"
        >
          次世代の地方自治は、ここから。
          <br />
          専門人材×共助×テクノロジーが交差する場。
        </motion.p>

        {/* CTA ボタン - 重なり防止のため下部に余白を確保 */}
        <motion.div variants={itemVariants} className="pb-32 sm:pb-40">
          <CornerButton disabled className="opacity-80 cursor-not-allowed">
            プレエントリー（7/3公開予定）
          </CornerButton>
        </motion.div>
      </motion.div>

      {/* スクロールインジケーター — pointer-events-noneでクリックを阻害しない */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-30 pointer-events-none"
      >
        <span className="text-[10px] tracking-[0.35em] text-text-primary/30 font-medium uppercase">
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
            className="absolute inset-0 bg-primary/40 origin-top"
          />
        </div>
      </motion.div>
    </section>
  );
}
