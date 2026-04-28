"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeUpVariants, TRANSITIONS } from "@/lib/animations";

export function Manifesto() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const watermarkY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const purposeY = useTransform(scrollYProgress, [0, 1], ["40px", "-40px"]);
  const purposeScale = useTransform(scrollYProgress, [0, 0.5], [0.96, 1]);
  const visionY = useTransform(scrollYProgress, [0.3, 1], ["40px", "-40px"]);
  const visionScale = useTransform(scrollYProgress, [0.3, 0.8], [0.96, 1]);

  return (
    <section
      ref={containerRef}
      id="manifesto"
      className="relative min-h-screen flex flex-col items-center justify-center px-8 sm:px-16 py-32 sm:py-48 md:py-56 w-full overflow-hidden"
    >
      {/* 透かし文字 */}
      <motion.div
        style={{ y: watermarkY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black tracking-tighter text-slate-100/25 whitespace-nowrap -z-10 pointer-events-none select-none"
      >
        MANIFESTO
      </motion.div>

      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col gap-24 sm:gap-40">
        {/* PURPOSE ブロック */}
        <motion.div
          style={{ y: purposeY, scale: purposeScale }}
          className="flex flex-col items-start"
        >
          <div className="flex flex-col mb-8 sm:mb-12">
            <h2 className="text-xs font-medium tracking-[0.4em] text-primary uppercase">
              Purpose
            </h2>
            <div className="w-12 h-[1px] bg-primary/30 mt-4" />
          </div>
          <h3 className="text-[clamp(1.875rem,5vw,3.5rem)] font-light text-text-primary tracking-wide leading-snug mb-8 sm:mb-10">
            自治の未来を創る、
            <br />
            <span className="text-primary font-normal">共助の力</span>。
          </h3>
          <p className="text-[clamp(1rem,2.5vw,1.375rem)] leading-relaxed font-light text-text-primary/75 tracking-wide max-w-3xl">
            補助金や一過性の施策に依存しない、
            <br />
            真に持続可能な地方創生のあり方とは何か。
            <br />
            本会議では、小規模自治体が直面する
            <br />
            「専門人材の確保」という喫緊の課題に対し、
            <br />
            住民同士の「共助」を基軸とした
            <br />
            地域活性化の先進事例を解き明かします。
          </p>
        </motion.div>

        {/* BACKGROUND & VISION ブロック */}
        <motion.div
          style={{ y: visionY, scale: visionScale }}
          className="flex flex-col items-start"
        >
          <div className="flex flex-col mb-8 sm:mb-12">
            <h2 className="text-xs font-medium tracking-[0.4em] text-primary uppercase">
              Background & Vision
            </h2>
            <div className="w-12 h-[1px] bg-primary/30 mt-4" />
          </div>
          <h3 className="text-[clamp(1.875rem,5vw,3.5rem)] font-light text-text-primary tracking-wide leading-snug mb-8 sm:mb-10">
            毎年の<span className="text-accent font-normal">補助金頼み</span>
            からの脱却。
          </h3>
          <div className="flex flex-col gap-6 text-[clamp(1rem,2.2vw,1.25rem)] leading-loose font-light text-text-primary/70 max-w-3xl">
            <p>
              「資金があっても人がいない」
              <br />
              「当座の事業は回っても、持続しない」——
              <br />
              まち・ひと・しごと創生法の制定から約10年。
              <br />
              私たちが直面しているのは、地方創生のリアルと、
              <br />
              その持続可能性を問う厳しい現実です。
            </p>
            <p>
              第2回 次世代自治共創会議（すずかん田園フォーラム）では、
              <br />
              地域自治に不可欠な人材のエコシステムと、
              <br />
              住民主体のイノベーションに焦点を当てます。
              <br />
              先駆者たちの知見を交わし、 これからの地方自治・地域経営の
              <br />
              新たなパラダイムを共創します。
              <br />
            </p>
          </div>

          {/* 前回の様子の写真 (Dummy Data) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full rounded-2xl overflow-hidden mt-16 sm:mt-24 shadow-[0_20px_60px_rgba(112,153,199,0.15)] group"
          >
            <div className="absolute inset-0 bg-primary/10 z-10 pointer-events-none mix-blend-overlay transition-opacity duration-700 group-hover:opacity-0" />
            <img 
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop" 
              alt="第1回 次世代自治共創会議の様子" 
              className="w-full h-auto aspect-video sm:aspect-[21/9] object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            />
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20">
              <span className="text-white/90 text-[10px] sm:text-xs font-medium tracking-widest bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
                第1回 次世代自治共創会議の様子
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
