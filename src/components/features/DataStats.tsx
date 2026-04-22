"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { TRANSITIONS, EASING } from "@/lib/animations";

function Counter({ from, to }: { from: number; to: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration: 2.5,
        ease: EASING.apple,
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value).toString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, inView]);

  return <span ref={nodeRef}>{from}</span>;
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

          {/* Divider for mobile / desktop */}
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
