"use client";

import { motion } from "framer-motion";
import { CornerButton } from "../ui/CornerButton";
import { TRANSITIONS, fadeUpVariants } from "@/lib/animations";

export function CTA() {
  return (
    <section className="relative py-40 px-6 w-full flex flex-col items-center overflow-hidden">
      {/* 背景にアクセントカラーの暖かみのあるグラデーション */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.04] to-transparent pointer-events-none" />

      {/* 巨大なCTAセクション */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0, scale: 0.95 },
          show: { opacity: 1, scale: 1, transition: TRANSITIONS.slow },
        }}
        className="relative w-full max-w-4xl bg-white/50 backdrop-blur-2xl border border-accent/20 rounded-3xl p-12 md:p-20 flex flex-col items-center text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_20px_60px_rgba(247,180,84,0.08)] overflow-hidden"
      >
        {/* 内側のアクセントグラデーション */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.06] via-transparent to-primary/[0.04] pointer-events-none rounded-3xl" />

        <h2 className="text-3xl md:text-5xl font-light tracking-widest text-text-primary mb-8 z-10 break-keep">
          自治の未来へ。
        </h2>
        <p className="text-lg md:text-xl font-light text-text-primary/70 mb-12 max-w-2xl z-10 break-keep leading-relaxed">
          <span className="inline-block">次世代自治共創会議</span>
          <span className="inline-block">（すずかん田園フォーラム）に参加し、</span>
          <span className="inline-block">持続可能な地域社会への歩みを</span>
          <span className="inline-block">共に始めましょう。</span>
        </p>

        <div className="z-10">
          <CornerButton>プレエントリーはこちら</CornerButton>
        </div>
      </motion.div>

      {/* 主催・共催情報 — ロゴライクなタイポグラフィのグリッド */}
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="w-full max-w-5xl mt-32"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex flex-col items-center md:items-start gap-6">
            <h3 className="text-xs text-primary font-medium tracking-[0.4em] uppercase">
              主催
            </h3>
            <div className="flex flex-col gap-4 text-center md:text-left">
              <p className="text-base md:text-lg font-light text-text-primary/70 tracking-wider break-keep">
                東京大学鈴木寛研究室
              </p>
              <p className="text-base md:text-lg font-light text-text-primary/70 tracking-wider break-keep">
                東京大学公共政策大学院<br className="sm:hidden" />社会連携講座
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start gap-6">
            <h3 className="text-xs text-primary font-medium tracking-[0.4em] uppercase">
              共催
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-center md:text-left">
              <p className="text-sm md:text-base font-light text-text-primary/60 tracking-wider break-keep">
                懐徳会
              </p>
              <p className="text-sm md:text-base font-light text-text-primary/60 tracking-wider break-keep">
                株式会社懐徳総合研究所
              </p>
              <p className="text-sm md:text-base font-light text-text-primary/60 tracking-wider break-keep">
                株式会社パブリックテクノロジーズ
              </p>
              <p className="text-sm md:text-base font-light text-text-primary/60 tracking-wider break-keep">
                若手町村長会
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
