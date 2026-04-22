# 厳格なプロジェクト要件：第2回 次世代自治共創会議 LP構築

## 🔴 AI Agentへの絶対命令（Absolute Constraints）

1. **勝手な進行の禁止:** 以下のPhaseは**必ず1つずつ実行**すること。1つのPhaseの実装が完了したら、必ずユーザーの確認と承認（「次へ進んで」の合図）を待つこと。
2. **プレースホルダーの禁止:** 提供された企画書データのテキストを1文字も漏らさず使用すること。Lorem Ipsumや「ダミーテキスト」は使用不可。
3. **モノリス化の禁止:** `page.tsx` にすべてを記述せず、必ず `components/features/` や `components/ui/` にファイルを分割すること。
4. **安易なTailwindの禁止:** 影やグラデーションにデフォルトの `shadow-md` などは使わない。後述する「Vibe & Mathematics」の定義に必ず従うこと。

---

## 🎨 Vibe & Mathematics (質感の数値的定義)

このLPのクオリティは以下のCSS/Motionの「数値」に依存する。この定義をすべてのコンポーネントに厳格に適用すること。

- **Theme Palette:**
  - Base Background: `#FFFFFF` (純白) と `#F8FAFC` (極薄の青みグレー) のみを使用。
  - Primary (Trust Blue): `#7099C7`
  - Accent (Energy Orange): `#F7B454`
  - Text Primary: `#0F172A` (Slate 900)
- **Glassmorphism (ヘッダー・カード):**
  - 背景色: `bg-white/40` または `bg-white/60`
  - ブラー効果: `backdrop-blur-xl` または `backdrop-blur-2xl`
  - ボーダー: `border border-white/20`
- **Framer Motion Easing (トランジションの滑らかさ):**
  - リニアな動きは禁止。すべての出現アニメーションには `transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}` (Appleライクなカスタムイージング) を適用すること。
- **IVS-Style Corner Borders (四隅の装飾UI):**
  - ボタンや重要なカードコンポーネントの四隅には、擬似要素(`::before`, `::after`)または絶対配置の `div` を用いて、1pxの `#7099C7` の線でカギ括弧（ ⌜ ⌝ ⌞ ⌟ ）のようなエッジ装飾を必ず実装すること。

---

## 🏗️ 実装フェーズ（Step-by-Step Execution）

### Phase 1: 空間・背景・レイアウトシェルの構築（ここで停止すること）

**目的:** 圧倒的な広がりと透明感を持つ土台の作成。

- Next.js (App Router) 環境の初期化（未完了の場合）。
- 画面全体を覆う、ゆっくりと動く流体グラデーション背景（Fluid Gradient）を `components/ui/FluidBackground.tsx` として実装。色は `#FFFFFF`, `#7099C7`, `#F7B454` を使用し、WebGLまたは複雑なCSS Mesh Gradientで実装。
- 画面の左右両端に固定配置される、極細フォントの縦書き英語テキスト（例: `NEXT GEN AUTONOMY`）を配置。

### Phase 2: ヘッダーとHeroセクション（ここで停止すること）

**目的:** ファーストビューで参加者を圧倒する。

- スクロールで追従するグラスモーフィズム仕様のHeaderを実装。
- `components/features/Hero.tsx` を実装。
- 中央に「第2回 次世代自治共創会議」の巨大な文字を配置。Framer Motionで、文字が1文字ずつ下から滑らかに現れる（staggerChildren）エフェクトを実装。
- Heroの下部に、四隅に装飾（Corner Borders）を施した「参加登録」ボタンを配置。ホバー時に `#F7B454` の淡い光（Glow）が背景に広がるエフェクトを追加。

### Phase 3: Manifesto & Speakers（ここで停止すること）

**目的:** 提供された企画書データ（背景・目的）と登壇者の権威性の提示。(第2回次世代自治共創会議\_260420（案内版）)

- `components/features/Manifesto.tsx` を実装。スクロール連動（`whileInView`）でテキストがフェードアップ。
- `components/features/Speakers.tsx` を実装。
- 鈴木寛、湯崎英彦、森田浩司の3名をハイライト。カードにはグラスモーフィズムと四隅装飾を適用。ホバー時、カード自体は `scale-105`、画像はモノクロからカラーに変化し、かつ背後に `#7099C7` の光を落とすこと。

### Phase 4: Time Table & Data（ここで停止すること）

**目的:** 複雑なプログラムと実績のスタイリッシュな表現。

- 企画書のタイムテーブルを、垂直のライン（`border-l-2 border-slate-200`）に沿って展開するデザインで実装。
- 基調対談、第1部、第2部のセクションごとに `#F7B454` のアクセントカラーでタイムラインのノード（丸）を光らせる。
- フッター手前に、前年度実績（対面143人、オンライン430人）を、画面に入った瞬間に0からカウントアップするアニメーション（Framer Motionの `useSpring` または `useMotionValue` 等を使用）で実装。

---

**※Agentへ：このドキュメントを読み込んだら、「Phase 1から実行して良いか」をユーザーに確認すること。**
