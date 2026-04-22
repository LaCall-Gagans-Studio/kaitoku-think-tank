"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { EASING, TRANSITIONS } from "@/lib/animations";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={TRANSITIONS.base}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/50 backdrop-blur-2xl border-b border-white/20 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_4px_30px_rgba(0,0,0,0.05)]"
          : "bg-transparent border-b border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="font-semibold tracking-widest text-sm text-text-primary flex items-center gap-2">
          {/* シンプルなロゴ的な要素 */}
          <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
          KAITOKU
        </div>
        
        <nav className="hidden md:flex items-center gap-10 text-xs font-medium tracking-[0.15em] text-text-primary/70">
          <a href="#manifesto" className="hover:text-primary transition-colors">MANIFESTO</a>
          <a href="#speakers" className="hover:text-primary transition-colors">SPEAKERS</a>
          <a href="#timetable" className="hover:text-primary transition-colors">TIMETABLE</a>
        </nav>
      </div>
    </motion.header>
  );
}
