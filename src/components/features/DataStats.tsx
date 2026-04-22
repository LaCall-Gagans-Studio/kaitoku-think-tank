"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { TRANSITIONS, EASING } from "@/lib/animations";

/**
 * ✅ FIX: textContent の直接書き換えを廃止。
 *
 * 旧実装の問題:
 *   onUpdate() で nodeRef.current.textContent = value を毎フレーム実行
 *   → DOMの textContent 変更は Style Recalc を発生させる
 *
 * 新実装:
 *   useMotionValue + useTransform でカウント値を管理し、
 *   Framer Motion の内部で変更を処理させる。
 *   motion.span の children として渡すことで、Framer Motion が
 *   最適な方法（WAAPI / compositor経由）でDOMを更新する。
 */
function Counter({ from, to }: { from: number; to: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(from);

  useEffect(() => {
    if (!inView) return;

    const controls = animate(motionValue, to, {
      duration: 2.5,
      ease: EASING.apple,
    });

    return () => controls.stop();
  }, [inView, motionValue, to]);

  // useTransform で整数に丸める（フレームごとの再計算をFramer Motionに委ねる）
  const rounded = useTransform(motionValue, (v) => Math.round(v));

  return <motion.span ref={nodeRef}>{rounded}</motion.span>;
}

export function DataStats() {
  return (
    <section className="relative py-32 px-6 w-full bg-white/30 backdrop-blur-md border-y border-white/20 flex flex-col items-center">
      <div className="max-w-4xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={TRANSITIONS.base}
          className="mb-16"
        >
          <h2 className="text-sm tracking-[0.3em] text-primary mb-4 font-medium">PREVIOUS ACHIEVEMENTS</h2>
          <p className="text-xl font-light text-text-primary/80">第1回フォーラム 実績（2025年5月31日）</p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32 mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...TRANSITIONS.base, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="text-5xl md:text-7xl font-light text-text-primary tracking-tighter mb-4 flex items-baseline">
              <Counter from={0} to={143} />
              <span className="text-xl md:text-2xl ml-2 text-text-primary/50 font-normal">人</span>
            </div>
            <p className="text-sm tracking-widest text-primary font-medium">対面参加</p>
          </motion.div>

          {/* Divider */}
          <div className="w-16 h-[1px] md:w-[1px] md:h-24 bg-primary/20" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...TRANSITIONS.base, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <div className="text-5xl md:text-7xl font-light text-text-primary tracking-tighter mb-4 flex items-baseline">
              <Counter from={0} to={430} />
              <span className="text-xl md:text-2xl ml-2 text-text-primary/50 font-normal">人</span>
            </div>
            <p className="text-sm tracking-widest text-primary font-medium">オンライン参加</p>
          </motion.div>
        </div>

        {/* 昨年度の様子への誘導 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ ...TRANSITIONS.base, delay: 0.6 }}
        >
          <a
            href="https://www.kaitoku.org/suzuden0531/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border border-primary/40 rounded-full text-primary hover:bg-primary/5 transition-all duration-300 tracking-widest text-sm hover:-translate-y-1 shadow-sm"
          >
            昨年度の様子はこちら
          </a>
        </motion.div>
      </div>
    </section>
  );
}
