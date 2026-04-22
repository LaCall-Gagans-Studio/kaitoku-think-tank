"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeUpVariants } from "@/lib/animations";

export function Manifesto() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax effect for the watermark and content blocks
  const watermarkY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const purposeY = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"]);
  const purposeScale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const visionY = useTransform(scrollYProgress, [0.3, 1], ["50px", "-50px"]);
  const visionScale = useTransform(scrollYProgress, [0.3, 0.8], [0.95, 1]);

  return (
    <section ref={containerRef} id="manifesto" className="relative min-h-screen flex flex-col items-center justify-center px-6 py-40 md:py-56 w-full overflow-hidden">
      
      {/* 巨大な透かし文字 (Parallax Watermark) */}
      <motion.div 
        style={{ y: watermarkY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black tracking-tighter text-slate-100/30 whitespace-nowrap -z-10 pointer-events-none select-none"
      >
        MANIFESTO
      </motion.div>

      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col gap-40">
        <motion.div 
          style={{ y: purposeY, scale: purposeScale }}
          className="flex flex-col items-start"
        >
          <div className="flex flex-col mb-12">
            <h2 className="text-sm tracking-[0.4em] text-primary font-medium">PURPOSE</h2>
            <div className="w-16 h-[1px] bg-primary/30 mt-4" />
          </div>
          <h3 className="text-3xl md:text-5xl font-light text-text-primary tracking-wide leading-snug mb-10 break-keep">
            自治の未来を創る、<br className="md:hidden" /><span className="text-primary font-normal">共助の力</span>。
          </h3>
          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-light text-text-primary/80 tracking-wide break-keep">
            補助金や一過性の施策に依存しない、真に持続可能な地方創生のあり方とは何か。<br className="hidden lg:block" />
            本会議では、小規模自治体が直面する「専門人材の確保」という喫緊の課題に対し、<br className="hidden lg:block" />
            住民同士の「共助」を基軸とした地域活性化の先進事例を解き明かします。
          </p>
        </motion.div>

        <motion.div
          style={{ y: visionY, scale: visionScale }}
          className="flex flex-col items-start"
        >
          <div className="flex flex-col mb-12">
            <h2 className="text-sm tracking-[0.4em] text-primary font-medium">BACKGROUND & VISION</h2>
            <div className="w-16 h-[1px] bg-primary/30 mt-4" />
          </div>
          <h3 className="text-3xl md:text-5xl font-light text-text-primary tracking-wide leading-snug mb-10 break-keep">
            毎年の<span className="text-accent font-normal">補助金頼み</span>からの脱却。
          </h3>
          <div className="flex flex-col gap-8 text-lg md:text-xl lg:text-2xl leading-loose font-light text-text-primary/80 break-keep">
            <p>
              「資金があっても人がいない」「当座の事業は回っても、持続しない」<br />
              まち・ひと・しごと創生法の制定から約10年。私たちが直面しているのは、<br className="hidden lg:block" />
              地方創生のリアルと、その持続可能性を問う厳しい現実です。
            </p>
            <p>
              第2回 次世代自治共創会議（すずかん田園フォーラム）では、<br className="hidden lg:block" />
              地域自治に不可欠な人材のエコシステムと、住民主体のイノベーションに焦点を当てます。<br />
              先駆者たちの知見を交わし、これからの地方自治・地域経営の新たなパラダイムを共創します。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
