"use client";

import { motion } from "framer-motion";
import { TRANSITIONS } from "@/lib/animations";

const getPlaceholder = (id: number) =>
  `https://images.unsplash.com/photo-${id}?w=500&h=500&fit=crop&q=80`;

interface Speaker {
  name: string;
  title: string;
  image: string;
  profile: string;
}

const speakersData = {
  tier1: [
    {
      name: "鈴木 寛",
      title: "東大公共政策大学院教授",
      image: "/speakers/suzukan.webp",
      profile:
        "文部科学副大臣等を歴任。教育・医療・科学技術イノベーション等の政策立案に尽力し、社会創発のエコシステム構築を目指す。",
    },
    {
      name: "湯崎 英彦",
      title: "前広島県知事",
      image: "/speakers/yuzaki.webp",
      profile:
        "広島県知事として「欲張りなライフスタイル」の実現を掲げ、県民のウェルビーイング向上と持続可能な地域社会づくりを牽引。",
    },
    {
      name: "森田 浩司",
      title: "奈良県三宅町長",
      image: "/speakers/morita.webp",
      profile:
        "全国で2番目に若い首長として三宅町を牽引。対話を通じた「自分らしくいられるまち」の実現に向け、先進的な自治体経営を実践。",
    },
  ] satisfies Speaker[],
  tier2: [
    {
      name: "荒川 裕貴",
      title: "東京大学特任助教",
      image: "/speakers/arakawa.webp",
      profile:
        "「地域人材のパス」をテーマに、次世代を担う専門人材の育成と地域への定着メカニズムを研究。",
    },
    {
      name: "村上 敬亮",
      title: "東京大学特任教授",
      image: "/speakers/murakami.webp",
      profile:
        "「AIと行政の最前線」をテーマに、最新テクノロジーを用いた公共サービスのアップデートを提言。",
    },
    {
      name: "小玉 祥平",
      title: "三豊市教育センター長",
      image: "/speakers/kodama.webp",
      profile:
        "「放課後共創基金」を立ち上げ、行政と民間の協働による新しい教育支援モデルを構築。",
    },
    {
      name: "田島 楓",
      title: "暮らしの交通株式会社",
      image: "/speakers/tajima.webp",
      profile:
        "「まちの移動をつくりだす」をミッションに、過疎地域における持続可能なモビリティサービスを展開。",
    },
    {
      name: "横山 裕一",
      title: "瀬戸内ReFraming代表",
      image: "/speakers/yokoyama.webp",
      profile:
        "「Basic Infra Villege」構想を通じ、限界集落におけるインフラの自立と共助のコミュニティ形成を推進。",
    },
  ] satisfies Speaker[],
  tier3: [
    { name: "中山 昌生", title: "懐徳総合研究所 代表取締役", role: "主催者" },
    { name: "松原 直輝", title: "懐徳総合研究所 主席研究員", role: "主催者" },
  ],
};

export function Speakers() {
  return (
    <section
      id="speakers"
      className="relative py-24 sm:py-32 px-6 sm:px-8 w-full"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* セクションヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={TRANSITIONS.base}
          className="text-center mb-16 sm:mb-24"
        >
          <p className="text-xs font-medium tracking-[0.4em] text-primary mb-4">
            KEYNOTE SPEAKERS & PANELISTS
          </p>
          <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-light text-text-primary tracking-wider">
            登壇者
          </h2>
          <div className="w-10 h-[1px] bg-primary mx-auto mt-6" />
        </motion.div>

        {/* Tier 1: 基調講演（3名）— 1列 → md:3列 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-16 sm:mb-24">
          {speakersData.tier1.map((speaker, i) => (
            <SpeakerCard
              key={speaker.name}
              speaker={speaker}
              index={i}
              size="large"
            />
          ))}
        </div>

        {/* Tier 2: パネリスト（5名）— 1列 → sm:2列 → lg:3列 */}
        <div className="mb-16 sm:mb-24">
          <p className="text-xs font-medium tracking-[0.4em] text-primary text-center mb-10 sm:mb-12">
            GUEST SPEAKERS
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {speakersData.tier2.map((speaker, i) => (
              <SpeakerCard
                key={speaker.name}
                speaker={speaker}
                index={i}
                size="medium"
              />
            ))}
          </div>
        </div>

        {/* Tier 3: 主催者 */}
        <div>
          <p className="text-xs font-medium tracking-[0.4em] text-primary text-center mb-8 sm:mb-12">
            ORGANIZERS
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6">
            {speakersData.tier3.map((speaker, i) => (
              <motion.div
                key={speaker.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ ...TRANSITIONS.base, delay: i * 0.1 }}
                className="flex flex-col items-center px-8 py-5 bg-white/40 backdrop-blur-md border border-white/20 rounded-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] w-full sm:w-auto"
              >
                <span className="text-xs text-primary/70 mb-1.5 tracking-widest">
                  {speaker.role}
                </span>
                <span className="text-lg text-text-primary tracking-wider font-normal">
                  {speaker.name}
                </span>
                <span className="text-xs text-text-primary/55 mt-1">
                  {speaker.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SpeakerCard({
  speaker,
  index,
  size,
}: {
  speaker: Speaker;
  index: number;
  size: "large" | "medium";
}) {
  const isLarge = size === "large";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ ...TRANSITIONS.base, delay: index * 0.08 }}
      className="h-full"
    >
      {/* グラスモーフィズムカード — ホバーで微妙に浮き上がる */}
      <div className="group relative bg-white/40 backdrop-blur-xl border border-white/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_8px_32px_rgba(0,0,0,0.05)] p-6 sm:p-8 flex flex-col items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_16px_48px_rgba(112,153,199,0.15)] h-full">
        {/* IVS-Style 四隅装飾 */}
        <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-primary/40" />
        <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-primary/40" />
        <div className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-primary/40" />
        <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-primary/40" />

        {/* 写真 — フルカラー（grayscale完全廃止） */}
        <div
          className={`relative rounded-full overflow-hidden mb-5 flex-shrink-0 ring-2 ring-white/60 ${isLarge ? "w-32 h-32 sm:w-40 sm:h-40" : "w-24 h-24 sm:w-28 sm:h-28"}`}
        >
          <img
            src={speaker.image}
            alt={speaker.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-108"
          />
        </div>

        {/* 情報 — 常時表示（ホバー非依存） */}
        <div className="text-center flex flex-col flex-grow w-full">
          <h3
            className={`font-normal text-text-primary tracking-widest mb-1 ${isLarge ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"}`}
          >
            {speaker.name}
          </h3>
          <p className="text-sm font-light text-primary tracking-wide mb-4">
            {speaker.title}
          </p>
          <div className="w-8 h-[1px] bg-primary/25 mx-auto mb-4" />
          {/* プロフィール文 — 常時表示（スマホで隠れない） */}
          <p className="text-sm leading-relaxed text-text-primary/65 font-light">
            {speaker.profile}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
