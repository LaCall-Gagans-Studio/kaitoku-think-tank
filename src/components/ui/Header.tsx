"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TRANSITIONS } from "@/lib/animations";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#manifesto", label: "MANIFESTO" },
  { href: "#speakers", label: "SPEAKERS" },
  { href: "#timetable", label: "TIME TABLE" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // menuOpenの最新値をrefで保持（クロージャ問題の回避）
  const menuOpenRef = useRef(menuOpen);

  // refの更新はエフェクト内で行う（レンダー中のref書き換えはReact 19で禁止）
  useEffect(() => {
    menuOpenRef.current = menuOpen;
  });

  // ✅ FIX 1: useCallbackでハンドラをメモ化し、依存配列から menuOpen を除去
  // ✅ FIX 2: { passive: true } オプションでモバイルのスクロールブロッキングを解除
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
    // refを使って最新のmenuOpen状態を参照（stale closureを防ぐ）
    if (menuOpenRef.current) {
      setMenuOpen(false);
    }
  }, []); // 依存配列を空にして、リスナーの二重登録を完全に防止

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]); // handleScrollはメモ化されているので再登録されない

  // メニューが開いているときにbodyスクロールをロック
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={TRANSITIONS.base}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/60 backdrop-blur-2xl border-b border-white/20 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_4px_30px_rgba(0,0,0,0.05)]"
            : "bg-transparent border-b border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* ロゴ */}
          <a
            href="#"
            className="font-semibold tracking-widest text-sm text-text-primary flex items-center gap-2 shrink-0"
          >
            <span className="w-2 h-2 rounded-full bg-primary inline-block" />
            KAITOKU
          </a>

          {/* PC ナビゲーション */}
          <nav className="hidden md:flex items-center gap-10 text-xs font-medium tracking-[0.15em] text-text-primary/70">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* PC CTA ボタン */}
          <span className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-xs font-medium tracking-widest text-primary border border-primary/30 rounded-full opacity-60 cursor-not-allowed">
            プレエントリー（7/3公開予定）
          </span>

          {/* スマホ ハンバーガーボタン */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
            className="md:hidden relative z-[60] p-2 text-text-primary"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* スマホ フルスクリーンメニュー */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-12 md:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-2xl font-light tracking-[0.2em] text-text-primary hover:text-primary transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="px-8 py-4 text-sm font-medium tracking-widest text-primary border border-primary/30 rounded-full opacity-60 cursor-not-allowed text-center"
            >
              プレエントリーは<br className="sm:hidden" />7/3公開予定
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
