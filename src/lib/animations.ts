// アニメーション定数の一元管理

import { Transition, Variants } from "framer-motion";

/**
 * Appleライクな滑らかで高級感のあるイージング
 */
export const EASING = {
  apple: [0.16, 1, 0.3, 1] as const,
  smooth: [0.25, 1, 0.5, 1] as const,
};

/**
 * トランジション設定のプリセット
 */
export const TRANSITIONS = {
  // 基本的なフェードイン等の動き
  base: { duration: 0.8, ease: EASING.apple } as Transition,
  // もっとゆっくりとした動き（Hero等）
  slow: { duration: 1.2, ease: EASING.apple } as Transition,
  // ホバーや細かいインタラクション
  fast: { duration: 0.4, ease: EASING.smooth } as Transition,
};

/**
 * 汎用的なフェードアップバリアント
 */
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: TRANSITIONS.base,
  },
};
