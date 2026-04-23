"use client";

import { motion, type Variants } from "framer-motion";
import { TRANSITIONS } from "@/lib/animations";
import { ReactNode } from "react";
import {
  Users,
  UserPlus,
  HeartPulse,
  GraduationCap,
  Bot,
  Baby,
  Bus,
  Home,
  MessageSquare,
  Megaphone,
} from "lucide-react";

interface SessionDetail {
  time: string;
  text: string;
  speaker?: string;
  desc?: string;
  icon?: ReactNode;
  sub?: boolean;
}

interface SessionItem {
  time: string;
  title: string;
  highlight: boolean;
  subtitle?: string;
  desc?: string;
  icon?: ReactNode;
  details?: SessionDetail[];
}

const timetableData: SessionItem[] = [
  { time: "13:00", title: "所長挨拶", highlight: false },
  {
    time: "13:05",
    title: "基調対談",
    highlight: true,
    subtitle: "鈴木寛 × 湯崎英彦 × 森田浩司",
    desc: "「ウェルビーイングを生み出すための好循環のつくりかた 〜共創と自治の可能性を探る〜」",
    icon: <Users size={16} />,
  },
  {
    time: "13:45",
    title: "第1部：自治体における人材の確保と活用",
    highlight: true,
    icon: <UserPlus size={16} />,
    details: [
      {
        time: "13:45",
        text: "地域人材のパス",
        speaker: "荒川裕貴（東京大学特任助教）",
        icon: <UserPlus size={14} />,
      },
      { time: "14:00", text: "専門人材の確保・挑戦・課題" },
      {
        time: "",
        text: "医療人材の確保",
        speaker: "津南町",
        icon: <HeartPulse size={14} />,
        sub: true,
      },
      {
        time: "",
        text: "教育人材の確保",
        speaker: "須崎市",
        icon: <GraduationCap size={14} />,
        sub: true,
      },
      {
        time: "14:55",
        text: "自由対談",
        speaker: "若手町村長会、中央省庁職員、鈴木寛教授",
        icon: <MessageSquare size={14} />,
      },
    ],
  },
  {
    time: "15:20",
    title: "特別トークショー「AIと行政の最前線」",
    highlight: false,
    desc: "最先端のAI技術が行政サービスをどう変えるか。パブリックテクノロジーと村上敬亮東大特任教授が、具体的な事例とともに議論します。",
    icon: <Bot size={16} />,
  },
  {
    time: "15:50",
    title: "第2部：共助からの地域活性化を考える",
    highlight: true,
    icon: <Home size={16} />,
    details: [
      { time: "15:50", text: "事例研究" },
      {
        time: "",
        text: "放課後共創基金",
        speaker: "小玉祥平（三豊市教育センター長）",
        icon: <Baby size={14} />,
        sub: true,
        desc: "行政と民間の協働による教育支援モデルの構築",
      },
      {
        time: "",
        text: "まちの移動をつくりだす",
        speaker: "田島楓（暮らしの交通）",
        icon: <Bus size={14} />,
        sub: true,
        desc: "過疎地域における持続可能なモビリティサービス",
      },
      {
        time: "",
        text: "Basic Infra Villege",
        speaker: "横山裕一（瀬戸内ReFraming代表）",
        icon: <Home size={14} />,
        sub: true,
        desc: "限界集落におけるインフラ自立と共助コミュニティの形成",
      },
      {
        time: "16:40",
        text: "パネルディスカッション",
        speaker: "村上敬亮 × 小玉祥平 × JR西日本",
        desc: "「これからの地域経営のあり方と基礎自治体」",
        icon: <Users size={14} />,
      },
      {
        time: "17:20",
        text: "自由対談",
        speaker: "若手町村長会、省庁職員、鈴木寛教授",
        icon: <MessageSquare size={14} />,
      },
    ],
  },
  {
    time: "17:40",
    title: "懐徳総合研究所からのお知らせ",
    highlight: false,
    subtitle: "中山昌生・松原直輝",
    icon: <Megaphone size={16} />,
  },
  { time: "17:55", title: "閉会挨拶", highlight: false },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

// ライン・ノードの寸法を定数として一元管理
// ノードの外径: 12px (w-3) → 中心オフセット = 6px
// 時間列の幅 + gap でノードの中心X座標を計算
// スマホ: 時間幅なし、PC: 時間幅56px + gap16px = 72px → ライン left=72+6=78px
// → シンプルに時間列をスマホではカード上に移す構造に変更して解決

export function TimeTable() {
  return (
    <section
      id="timetable"
      className="relative py-24 sm:py-32 px-6 sm:px-8 w-full bg-slate-50/20"
    >
      {/* ──── 会場案内 ──── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={TRANSITIONS.base}
        className="mb-16 sm:mb-24"
      >
        {/* カード */}
        <div className="relative bg-white/50 backdrop-blur-md border border-white/25 rounded-2xl p-8 sm:p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_4px_24px_rgba(0,0,0,0.04)]">
          {/* 四隅装飾 */}
          <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-primary/30" />
          <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-primary/30" />
          <div className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-primary/30" />
          <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-primary/30" />

          <p className="text-[10px] font-medium tracking-[0.4em] text-primary uppercase mb-6">
            Venue & Schedule
          </p>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
            {/* 日時 */}
            <div className="flex flex-col gap-1.5">
              <p className="text-xs text-text-primary/45 tracking-widest">
                DATE & TIME
              </p>
              <p className="text-lg sm:text-xl font-light text-text-primary leading-snug">
                2026年10月3日（土）
              </p>
              <p className="text-base font-light text-text-primary/70">
                13:00 〜 18:00
              </p>
            </div>

            <div className="w-full sm:w-[1px] h-[1px] sm:h-auto bg-primary/10" />

            {/* 会場 */}
            <div className="flex flex-col gap-1.5 flex-grow">
              <p className="text-xs text-text-primary/45 tracking-widest">
                VENUE
              </p>
              <p className="text-lg sm:text-xl font-light text-text-primary leading-snug">
                東京大学本郷キャンパス
                <br className="sm:hidden" /> 山上会館
              </p>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/8 px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  オンライン配信あり
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  18時〜 交流会（同会場）
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="max-w-4xl mx-auto w-full">
        {/* ヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={TRANSITIONS.base}
          className="text-center mb-16 sm:mb-24"
        >
          <p className="text-xs font-medium tracking-[0.4em] text-primary mb-4">
            PROGRAM
          </p>
          <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-light text-text-primary tracking-wider">
            TIME TABLE
          </h2>
          <p className="mt-3 text-sm text-text-primary/45 tracking-widest">
            2026.10.03 SAT
          </p>
          <div className="w-10 h-[1px] bg-primary mx-auto mt-6" />
        </motion.div>

        {/* タイムライン本体 */}
        <div className="relative">
          {/*
           * 垂直ライン:
           * スマホ: ノードのみ左端に配置するため left=6px（ノード w-3=12px の中心）
           * PC: w-14(3.5rem) + gap-6(1.5rem) + node中心(w-3.5/2=0.4375rem) = 5.4375rem
           *   (ベースフォント 18px を考慮しremベースで指定することでpx変動に肧強になる)
           */}
          <div className="absolute left-[6px] sm:left-[5.4375rem] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/5 via-primary/20 to-primary/5" />

          <div className="flex flex-col gap-5 sm:gap-6">
            {timetableData.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-20px" }}
                transition={{ ...TRANSITIONS.base, delay: index * 0.04 }}
              >
                {/* ────────────── スマホレイアウト ────────────── */}
                {/* ノード + カード（時間はカード内上部に表示） */}
                <div className="flex items-start gap-4 sm:hidden">
                  {/* ノード（ライン上、left=6px 中心に合わせる） */}
                  <div className="relative shrink-0 flex items-start pt-4">
                    {item.highlight ? (
                      <>
                        <motion.div
                          animate={{
                            scale: [1, 1.6, 1],
                            opacity: [0.25, 0.7, 0.25],
                          }}
                          transition={{
                            duration: 3.5,
                            ease: "easeInOut",
                            repeat: Infinity,
                          }}
                          className="absolute -inset-1.5 bg-accent/35 rounded-full blur-[3px]"
                        />
                        <div className="relative w-3 h-3 bg-accent rounded-full shadow-[0_0_10px_rgba(247,180,84,0.8)] z-10" />
                      </>
                    ) : (
                      <div className="w-3 h-3 bg-text-primary/15 rounded-full border-2 border-white z-10" />
                    )}
                  </div>

                  {/* カード（時間をバッジとしてカード内上部に） */}
                  <div className="flex-grow min-w-0">
                    <SessionCard item={item} showTimeBadge />
                  </div>
                </div>

                {/* ────────────── PC レイアウト ────────────── */}
                {/* 時間列 + ノード + カード（横並び） */}
                <div className="hidden sm:flex items-start gap-6">
                  {/* 左: 時間（w-14 = 56px 固定） */}
                  <div className="w-14 shrink-0 pt-5 text-right">
                    <span className="text-sm font-mono font-medium tracking-wider text-primary">
                      {item.time}
                    </span>
                  </div>

                  {/* ノード（gap=24px、ノード w-3.5=14px → 中心=86px） */}
                  <div className="relative shrink-0 flex items-start pt-[22px]">
                    {item.highlight ? (
                      <>
                        <motion.div
                          animate={{
                            scale: [1, 1.6, 1],
                            opacity: [0.25, 0.7, 0.25],
                          }}
                          transition={{
                            duration: 3.5,
                            ease: "easeInOut",
                            repeat: Infinity,
                          }}
                          className="absolute -inset-1.5 bg-accent/35 rounded-full blur-[3px]"
                        />
                        <div className="relative w-3.5 h-3.5 bg-accent rounded-full shadow-[0_0_12px_rgba(247,180,84,0.8)] z-10" />
                      </>
                    ) : (
                      <div className="w-3.5 h-3.5 bg-text-primary/12 rounded-full border-2 border-white z-10" />
                    )}
                  </div>

                  {/* カード */}
                  <div className="flex-grow min-w-0">
                    <SessionCard item={item} showTimeBadge={false} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** セッションカードの中身を共通化 */
function SessionCard({
  item,
  showTimeBadge,
}: {
  item: SessionItem;
  showTimeBadge: boolean;
}) {
  return (
    <div
      className={`bg-white/45 backdrop-blur-sm border rounded-xl p-4 sm:p-5 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(112,153,199,0.12)] shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_2px_8px_rgba(0,0,0,0.03)] ${
        item.highlight
          ? "border-l-[3px] border-l-accent/50 border-white/20"
          : "border-white/20"
      }`}
    >
      {/* スマホ時: 時間をバッジ表示 */}
      {showTimeBadge && item.time && (
        <span className="inline-block text-[11px] font-mono font-medium tracking-wider text-primary bg-primary/8 px-2 py-0.5 rounded mb-2">
          {item.time}
        </span>
      )}

      {/* タイトル行: アイコン + h3
         「：」で分割できるタイトル（第1部：〜など）はラベルと教強タイトルを改行で分離する */}
      <div className="flex items-start gap-2 mb-1 min-w-0">
        {item.icon && (
          <span
            className={`shrink-0 flex items-center mt-0.5 ${item.highlight ? "text-accent" : "text-text-primary/35"}`}
            style={{ lineHeight: 0 }}
          >
            {item.icon}
          </span>
        )}
        <h3 className="min-w-0 font-normal leading-snug break-all sm:break-keep">
          <SplitTitle title={item.title} highlight={item.highlight} />
        </h3>
      </div>

      {item.subtitle && (
        <p className="text-sm font-medium text-text-primary/55 mt-1.5 ml-6">
          {item.subtitle}
        </p>
      )}

      {item.desc && (
        <p className="text-sm font-light text-text-primary/50 leading-relaxed mt-2 ml-6">
          {item.desc}
        </p>
      )}

      {/* 詳細リスト */}
      {item.details && (
        <div className="mt-4 ml-6 flex flex-col gap-3 border-t border-primary/8 pt-4">
          {item.details.map((detail, dIdx) => (
            <div
              key={dIdx}
              className={`flex items-start gap-2 ${detail.sub ? "ml-4" : ""}`}
            >
              {detail.icon && (
                <span
                  className="text-primary/45 shrink-0 flex items-center mt-0.5"
                  style={{ lineHeight: 0 }}
                >
                  {detail.icon}
                </span>
              )}
              <div className="flex flex-col min-w-0 gap-0.5">
                <div className="flex items-baseline gap-2 flex-wrap">
                  {detail.time && (
                    <span className="text-[11px] font-mono text-primary/45 shrink-0 text-wrap">
                      {detail.time}
                    </span>
                  )}
                  <span className="text-sm font-medium text-text-primary/75">
                    {detail.text}
                  </span>
                </div>
                {detail.desc && (
                  <span className="text-xs font-light text-text-primary/45 leading-relaxed">
                    {detail.desc}
                  </span>
                )}
                {detail.speaker && (
                  <span className="text-xs text-primary/60 flex items-center gap-1.5">
                    <span className="w-1 h-1 bg-accent rounded-full shrink-0" />
                    {detail.speaker}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * タイトルを「：」で分割し、前半をラベル（小・淡）、後半を強調タイトル（大・濃）で表示。
 * 「：」がない場合は通常のテキストとして表示。
 */
function SplitTitle({
  title,
  highlight,
}: {
  title: string;
  highlight: boolean;
}) {
  const colonIdx = title.indexOf("：");

  if (colonIdx === -1) {
    // 「：」なし → そのまま表示
    return (
      <span
        className={`text-base ${highlight ? "text-text-primary" : "text-text-primary/65"}`}
      >
        {title}
      </span>
    );
  }

  const label = title.slice(0, colonIdx); // 例: "第1部"
  const mainTitle = title.slice(colonIdx + 1); // 例: "自治体における人材の確保と活用"

  return (
    <span className="flex flex-col gap-0.5">
      {/* ラベル部分（第1部・第2部など）: 小さく・淡く */}
      <span className="text-xs font-medium tracking-widest text-primary/60 uppercase">
        {label}
      </span>
      {/* メインタイトル: やや大きく・濃く・ウェイトを少し上げて強調 */}
      <span
        className={`text-base sm:text-lg font-medium leading-snug ${highlight ? "text-text-primary" : "text-text-primary/70"}`}
      >
        {mainTitle}
      </span>
    </span>
  );
}
