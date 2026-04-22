# 実装計画: UI/UX オーディット結果のリファクタリング

本計画は、`improvement_point.md` で指摘された4つの柱（The 4 Pillars of Audit）に基づく改善を適用し、LPのクオリティをデザインアワード受賞レベルまで引き上げるための詳細な手順です。

## 修正内容一覧

### 1. アーキテクチャの改善 (コード品質)
- **[NEW]** `src/lib/animations.ts`
  - アニメーション定数を一元管理します。
  - `export const EASING = { apple: [0.16, 1, 0.3, 1], ... }`
  - `export const DURATION = { slow: 1.2, base: 0.8, fast: 0.4 }`

### 2. Vibe (質感と色彩) の改善
- **[MODIFY]** `src/components/ui/FluidBackground.tsx`
  - 単純な `x`, `y` の往復から、複雑な多角形軌跡を描くアニメーションに変更。
  - ノイズのブレンドモードを調整し、テクスチャ感を強調。
- **[MODIFY]** `src/components/ui/Header.tsx` & `src/components/features/Speakers.tsx`
  - グラスモーフィズムにエッジハイライト（`shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]`）を追加し、立体感を表現。

### 3. Motion & Interaction (アニメーション) の改善
- **[MODIFY]** `src/components/features/TimeTable.tsx`
  - `animate-pulse` を廃止。Framer Motion の `animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.8, 0.3] }}` を用いた有機的なGlowアニメーションへ置換。
- **[MODIFY]** `src/components/features/Hero.tsx`
  - スクロールインジケーターに重力感を付与（`scaleY` と `transformOrigin` を動的に変更）。

### 4. Typography & Spacing (文字と余白) の改善
- **[MODIFY]** `src/components/features/Hero.tsx`
  - メインタイトル：「次世代自治共創会議」に `tracking-[0.15em]` を適用。
  - サブタイトル：「第2回」を縮小し、色を Trust Blue (`#7099C7`) に変更。
- **[MODIFY]** `src/components/features/Manifesto.tsx`
  - 巨大な透かし文字「MANIFESTO」を背面に追加し、`useScroll` と `useTransform` を用いてパララックス効果を付与。
  - 英語見出しと本文の間に装飾ライン（`h-[1px]`）を追加。
