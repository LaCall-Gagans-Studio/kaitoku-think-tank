"use client";

import { motion, type Variants } from "framer-motion";
import { TRANSITIONS } from "@/lib/animations";
import { ReactNode } from "react";
import {
  Users, UserPlus, HeartPulse, GraduationCap,
  Bot, Baby, Bus, Home, MessageSquare, Megaphone,
} from "lucide-react";

/* ──────────── 型定義 ──────────── */
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

/* ──────────── データ ──────────── */
const timetableData: SessionItem[] = [
  { time: "13:00", title: "所長挨拶", highlight: false },
  {
    time: "13:05",
    title: "基調対談",
    highlight: true,
    subtitle: "鈴木寛 × 湯崎英彦 × 森田浩司",
    desc: "ウェルビーイングを生み出すための好循環のつくりかた 〜共創と自治の可能性を探る〜",
    icon: <Users size={18} />,
  },
  {
    time: "13:45",
    title: "第1部：自治体における人材の確保と活用",
    highlight: true,
    icon: <UserPlus size={18} />,
    details: [
      { time: "13:45", text: "地域人材のパス", speaker: "荒川裕貴（東京大学特任助教）", icon: <UserPlus size={16} /> },
      { time: "14:00", text: "専門人材の確保・挑戦・課題" },
      { time: "", text: "医療人材の確保", speaker: "津南町", icon: <HeartPulse size={16} />, sub: true },
      { time: "", text: "教育人材の確保", speaker: "須崎市", icon: <GraduationCap size={16} />, sub: true },
      { time: "14:55", text: "自由対談", speaker: "若手町村長会、中央省庁職員、鈴木寛教授", icon: <MessageSquare size={16} /> },
    ],
  },
  {
    time: "15:20",
    title: "特別トークショー「AIと行政の最前線」",
    highlight: false,
    desc: "最先端のAI技術が行政サービスをどう変えるか。パブリックテクノロジーと村上敬亮東大特任教授が、具体的な事例とともに議論します。",
    icon: <Bot size={18} />,
  },
  {
    time: "15:50",
    title: "第2部：共助からの地域活性化を考える",
    highlight: true,
    icon: <Home size={18} />,
    details: [
      { time: "15:50", text: "事例研究" },
      { time: "", text: "放課後共創基金", speaker: "小玉祥平（三豊市教育センター長）", icon: <Baby size={16} />, sub: true, desc: "行政と民間の協働による新しい教育支援モデルの構築" },
      { time: "", text: "まちの移動をつくりだす", speaker: "田島楓（暮らしの交通）", icon: <Bus size={16} />, sub: true, desc: "過疎地域における持続可能なモビリティサービスの展開" },
      { time: "", text: "Basic Infra Villege", speaker: "横山裕一（瀬戸内ReFraming代表）", icon: <Home size={16} />, sub: true, desc: "限界集落におけるインフラの自立と共助コミュニティの形成" },
      { time: "16:40", text: "パネルディスカッション", speaker: "村上敬亮 × 小玉祥平 × JR西日本", desc: "「これからの地域経営のあり方と基礎自治体」", icon: <Users size={16} /> },
      { time: "17:20", text: "自由対談", speaker: "若手町村長会、省庁職員、鈴木寛教授", icon: <MessageSquare size={16} /> },
    ],
  },
  { time: "17:40", title: "懐徳総合研究所からのお知らせ", highlight: false, subtitle: "中山昌生・松原直輝", icon: <Megaphone size={18} /> },
  { time: "17:55", title: "閉会挨拶", highlight: false },
];

/* ──────────── アニメーション ──────────── */
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

/* ──────────── コンポーネント ──────────── */
export function TimeTable() {
  return (
    <section id="timetable" className="relative py-32 px-6 w-full">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={TRANSITIONS.base}
          className="text-center mb-24"
        >
          <h2 className="text-3xl tracking-[0.2em] font-light text-text-primary">
            TIME TABLE
          </h2>
          <p className="mt-4 text-sm text-text-primary/50 tracking-widest">2026.10.03 SAT — 東京大学 山上会館</p>
          <div className="w-12 h-[1px] bg-primary mx-auto mt-6" />
        </motion.div>

        {/* タイムライン本体 */}
        <div className="relative">
          {/* 垂直ライン */}
          <div className="absolute left-[60px] md:left-[80px] top-0 bottom-0 w-[2px] bg-primary/15" />

          <div className="flex flex-col gap-6">
            {timetableData.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-30px" }}
                transition={{ ...TRANSITIONS.base, delay: index * 0.05 }}
                className="flex items-start gap-6 md:gap-8"
              >
                {/* 左: 時間 */}
                <div className="w-[52px] md:w-[68px] shrink-0 pt-5 text-right">
                  <span className="text-sm md:text-base font-mono font-medium tracking-wider text-primary">
                    {item.time}
                  </span>
                </div>

                {/* ノード（丸） */}
                <div className="relative shrink-0 flex items-start pt-5">
                  {item.highlight ? (
                    <>
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
                        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
                        className="absolute -inset-1 bg-accent/40 rounded-full blur-[4px]"
                      />
                      <div className="relative w-3.5 h-3.5 bg-accent rounded-full shadow-[0_0_12px_rgba(247,180,84,0.8)] z-10" />
                    </>
                  ) : (
                    <div className="w-3.5 h-3.5 bg-text-primary/15 rounded-full border-2 border-white z-10" />
                  )}
                </div>

                {/* 右: セッションカード */}
                <div className={`flex-grow min-w-0 pb-2 ${item.highlight ? '' : ''}`}>
                  <div className={`bg-white/40 backdrop-blur-sm border border-white/20 rounded-xl p-5 md:p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_4px_16px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_8px_24px_rgba(0,0,0,0.06)] ${item.highlight ? 'border-l-2 border-l-accent/50' : ''}`}>
                    <div className="flex items-center gap-3 mb-2">
                      {item.icon && (
                        <span className={item.highlight ? "text-accent" : "text-text-primary/40"}>
                          {item.icon}
                        </span>
                      )}
                      <h3 className={`text-lg md:text-xl font-normal tracking-wide break-keep ${item.highlight ? "text-text-primary" : "text-text-primary/70"}`}>
                        {item.title}
                      </h3>
                    </div>

                    {item.subtitle && (
                      <p className="text-sm font-medium text-text-primary/60 mt-1 break-keep">
                        {item.subtitle}
                      </p>
                    )}

                    {item.desc && (
                      <p className="text-sm font-light text-text-primary/55 leading-relaxed mt-3 break-keep">
                        {item.desc}
                      </p>
                    )}

                    {/* 詳細セッションリスト */}
                    {item.details && (
                      <div className="mt-5 flex flex-col gap-3 border-t border-primary/10 pt-5">
                        {item.details.map((detail, dIdx) => (
                          <div key={dIdx} className={`flex items-start gap-3 ${detail.sub ? "ml-6" : ""}`}>
                            {detail.icon && (
                              <span className="text-primary/50 mt-0.5 shrink-0">{detail.icon}</span>
                            )}
                            <div className="flex flex-col min-w-0">
                              <div className="flex items-baseline gap-2 flex-wrap">
                                {detail.time && (
                                  <span className="text-xs font-mono text-primary/50 shrink-0">{detail.time}</span>
                                )}
                                <span className="text-sm font-medium text-text-primary/80 break-keep">{detail.text}</span>
                              </div>
                              {detail.desc && (
                                <span className="text-xs font-light text-text-primary/50 mt-0.5 break-keep">{detail.desc}</span>
                              )}
                              {detail.speaker && (
                                <span className="text-xs text-primary/70 mt-1 flex items-center gap-1.5 break-keep">
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
