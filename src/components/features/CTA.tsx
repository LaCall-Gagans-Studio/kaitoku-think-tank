"use client";

import { motion } from "framer-motion";
import { CornerButton } from "../ui/CornerButton";
import { TRANSITIONS, fadeUpVariants } from "@/lib/animations";

export function CTA() {
  return (
    <section
      id="cta"
      className="relative py-24 sm:py-40 px-6 sm:px-8 w-full flex flex-col items-center overflow-hidden"
    >
      {/* アクセントカラーの暖かみのある背景 */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.05] to-transparent pointer-events-none" />

      {/* 大型CTAカード */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: { opacity: 0, scale: 0.96, y: 20 },
          show: { opacity: 1, scale: 1, y: 0, transition: TRANSITIONS.slow },
        }}
        className="relative w-full max-w-3xl sm:max-w-4xl bg-white/55 backdrop-blur-2xl border border-accent/20 rounded-2xl sm:rounded-3xl p-10 sm:p-16 md:p-20 flex flex-col items-center text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_20px_60px_rgba(247,180,84,0.08)] overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.06] via-transparent to-primary/[0.04] pointer-events-none rounded-2xl sm:rounded-3xl" />

        {/* ラベル */}
        <p className="text-xs font-medium tracking-[0.4em] text-accent mb-6 z-10">
          JOIN US
        </p>

        <h2 className="text-[clamp(1.875rem,5vw,3.5rem)] font-light tracking-wide text-text-primary mb-6 z-10 leading-snug">
          自治の未来へ。
        </h2>
        <p className="text-[clamp(0.9375rem,2vw,1.125rem)] font-light text-wrap text-text-primary/65 mb-10 sm:mb-12 max-w-lg z-10 leading-loose">
          次世代自治共創会議に参加し、持続可能な地域社会への歩みを、共に始める。
        </p>

        <div className="z-10">
          <CornerButton>プレエントリーはこちら</CornerButton>
        </div>
      </motion.div>

      {/* 主催・共催情報グリッド */}
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="w-full max-w-4xl mt-20 sm:mt-32"
      >
        <div className="border-t border-primary/10 pt-12 sm:pt-16 grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-16">
          {/* 主催 */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[10px] font-medium text-primary tracking-[0.4em] uppercase">
              主催
            </h3>
            <div className="flex flex-col gap-3">
              <p className="text-base sm:text-lg font-light text-text-primary/70 leading-snug">
                東京大学鈴木寛研究室
              </p>
              <p className="text-base sm:text-lg font-light text-text-primary/70 leading-snug">
                東京大学公共政策大学院
                <br className="sm:hidden" />
                社会連携講座
              </p>
            </div>
          </div>

          {/* 共催 */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[10px] font-medium text-primary tracking-[0.4em] uppercase">
              共催
            </h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {[
                "懐徳会",
                "株式会社懐徳総合研究所",
                "株式会社パブリックテクノロジーズ",
                "若手町村長会",
              ].map((org) => (
                <p
                  key={org}
                  className="text-sm sm:text-base font-light text-text-primary/55 leading-snug"
                >
                  {org}
                </p>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
