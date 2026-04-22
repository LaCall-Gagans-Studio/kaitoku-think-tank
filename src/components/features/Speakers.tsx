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
      title: "東大公共政策大学院教授、元文部科学副大臣",
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
      image: getPlaceholder(1522075469751),
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
      className="relative py-32 px-6 w-full bg-slate-50/30"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={TRANSITIONS.base}
          className="text-center mb-24"
        >
          <h2 className="text-3xl tracking-[0.2em] font-light text-text-primary break-keep">
            KEYNOTE SPEAKERS & PANELISTS
          </h2>
          <div className="w-12 h-[1px] bg-primary mx-auto mt-6" />
        </motion.div>

        {/* Tier 1: 基調講演 (3名) — 大カード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-24">
          {speakersData.tier1.map((speaker, i) => (
            <SpeakerCard
              key={speaker.name}
              speaker={speaker}
              index={i}
              size="large"
            />
          ))}
        </div>

        {/* Tier 2: パネリスト・登壇者 (5名) — 中カード */}
        <div className="mb-24">
          <h3 className="text-sm tracking-widest text-primary font-medium text-center mb-12">
            GUEST SPEAKERS
          </h3>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
            {speakersData.tier2.map((speaker, i) => (
              <div
                key={speaker.name}
                className="w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.333%-3rem)]"
              >
                <SpeakerCard speaker={speaker} index={i} size="medium" />
              </div>
            ))}
          </div>
        </div>

        {/* Tier 3: 主催者 (2名) */}
        <div>
          <h3 className="text-sm tracking-widest text-primary font-medium text-center mb-12">
            ORGANIZERS
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {speakersData.tier3.map((speaker, i) => (
              <motion.div
                key={speaker.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ ...TRANSITIONS.base, delay: i * 0.1 }}
                className="flex flex-col items-center px-8 py-6 bg-white/40 backdrop-blur-md border border-white/20 rounded-lg shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_4px_16px_rgba(0,0,0,0.04)]"
              >
                <span className="text-xs text-primary/70 mb-2">
                  {speaker.role}
                </span>
                <span className="text-lg text-text-primary tracking-wider">
                  {speaker.name}
                </span>
                <span className="text-xs text-text-primary/60 mt-1">
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
      viewport={{ once: true, margin: "-50px" }}
      transition={{ ...TRANSITIONS.base, delay: index * 0.1 }}
      className="relative h-full"
    >
      <div className="group relative w-full h-full">
        {/* ホバー時の背後の光 (Trust Blue) */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 blur-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-full opacity-0 group-hover:opacity-100 -z-10 translate-y-4 scale-90 group-hover:scale-100" />

        {/* グラスモーフィズムカード — プロフィール常時表示 */}
        <div
          className={`relative bg-white/40 backdrop-blur-xl border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_8px_32px_rgba(0,0,0,0.05)] flex flex-col items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2 h-full ${isLarge ? "p-8" : "p-6"}`}
        >
          {/* IVS-Style 4 Corner borders */}
          <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-primary opacity-50" />
          <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-primary opacity-50" />
          <div className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-primary opacity-50" />
          <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-primary opacity-50" />

          {/* 画像コンテナ — フルカラー常時表示 */}
          <div
            className={`relative rounded-full overflow-hidden mb-6 flex-shrink-0 ${isLarge ? "w-40 h-40" : "w-28 h-28"}`}
          >
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
            />
          </div>

          {/* テキスト情報 — プロフィール常時表示 */}
          <div className="text-center flex flex-col flex-grow">
            <h3
              className={`${isLarge ? "text-2xl" : "text-xl"} font-normal text-text-primary tracking-widest mb-1`}
            >
              {speaker.name}
            </h3>
            <p className="text-sm font-light text-primary tracking-wider mb-4">
              {speaker.title}
            </p>
            <div className="w-8 h-[1px] bg-primary/30 mx-auto mb-4" />
            <p className="text-base leading-relaxed text-text-primary/70 font-light text-wrap">
              {speaker.profile}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
