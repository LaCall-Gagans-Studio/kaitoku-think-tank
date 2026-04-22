"use client";

import { motion, type Variants } from "framer-motion";
import { TRANSITIONS } from "@/lib/animations";
import { ReactNode } from "react";
import {
  Users, UserPlus, HeartPulse, GraduationCap,
  Bot, Baby, Bus, Home, MessageSquare, Megaphone,
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
    icon: <Users size={18} />,
  },
  {
    time: "13:45",
    title: "第1部：自治体における人材の確保と活用",
    highlight: true,
    icon: <UserPlus size={18} />,
    details: [
      { time: "13:45", text: "地域人材のパス", speaker: "荒川裕貴（東京大学特任助教）", icon: <UserPlus size={15} /> },
      { time: "14:00", text: "専門人材の確保・挑戦・課題" },
      { time: "", text: "医療人材の確保", speaker: "津南町", icon: <HeartPulse size={15} />, sub: true, },
      { time: "", text: "教育人材の確保", speaker: "須崎市", icon: <GraduationCap size={15} />, sub: true, },
      { time: "14:55", text: "自由対談", speaker: "若手町村長会、中央省庁職員、鈴木寛教授", icon: <MessageSquare size={15} /> },
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
      { time: "", text: "放課後共創基金", speaker: "小玉祥平（三豊市教育センター長）", icon: <Baby size={15} />, sub: true, desc: "行政と民間の協働による教育支援モデルの構築" },
      { time: "", text: "まちの移動をつくりだす", speaker: "田島楓（暮らしの交通）", icon: <Bus size={15} />, sub: true, desc: "過疎地域における持続可能なモビリティサービス" },
      { time: "", text: "Basic Infra Villege", speaker: "横山裕一（瀬戸内ReFraming代表）", icon: <Home size={15} />, sub: true, desc: "限界集落におけるインフラ自立と共助コミュニティの形成" },
      { time: "16:40", text: "パネルディスカッション", speaker: "村上敬亮 × 小玉祥平 × JR西日本", desc: "「これからの地域経営のあり方と基礎自治体」", icon: <Users size={15} /> },
      { time: "17:20", text: "自由対談", speaker: "若手町村長会、省庁職員、鈴木寛教授", icon: <MessageSquare size={15} /> },
    ],
  },
  { time: "17:40", title: "懐徳総合研究所からのお知らせ", highlight: false, subtitle: "中山昌生・松原直輝", icon: <Megaphone size={18} /> },
  { time: "17:55", title: "閉会挨拶", highlight: false },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function TimeTable() {
  return (
    <section id="timetable" className="relative py-24 sm:py-32 px-6 sm:px-8 w-full bg-slate-50/20">
      <div className="max-w-4xl mx-auto w-full">
        {/* ヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={TRANSITIONS.base}
          className="text-center mb-16 sm:mb-24"
        >
          <p className="text-xs font-medium tracking-[0.4em] text-primary mb-4">PROGRAM</p>
          <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-light text-text-primary tracking-wider">
            TIME TABLE
          </h2>
          <p className="mt-3 text-sm text-text-primary/45 tracking-widest">2026.10.03 SAT</p>
          <div className="w-10 h-[1px] bg-primary mx-auto mt-6" />
        </motion.div>

        {/* タイムライン */}
        <div className="relative">
          {/* 垂直ライン（左に固定） */}
          <div className="absolute left-[52px] sm:left-[68px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/5 via-primary/20 to-primary/5" />

          <div className="flex flex-col gap-5 sm:gap-6">
            {timetableData.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-20px" }}
                transition={{ ...TRANSITIONS.base, delay: index * 0.04 }}
                className="flex items-start gap-4 sm:gap-6"
              >
                {/* 左: 時間 */}
                <div className="w-[44px] sm:w-[60px] shrink-0 pt-[18px] sm:pt-5 text-right">
                  <span className="text-xs sm:text-sm font-mono font-medium tracking-wider text-primary">
                    {item.time}
                  </span>
                </div>

                {/* ノード */}
                <div className="relative shrink-0 flex items-start pt-[18px] sm:pt-5">
                  {item.highlight ? (
                    <>
                      <motion.div
                        animate={{ scale: [1, 1.6, 1], opacity: [0.25, 0.7, 0.25] }}
                        transition={{ duration: 3.5, ease: "easeInOut", repeat: Infinity }}
                        className="absolute -inset-1.5 bg-accent/35 rounded-full blur-[3px]"
                      />
                      <div className="relative w-3 h-3 sm:w-3.5 sm:h-3.5 bg-accent rounded-full shadow-[0_0_12px_rgba(247,180,84,0.8)] z-10" />
                    </>
                  ) : (
                    <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 bg-text-primary/12 rounded-full border-2 border-white z-10" />
                  )}
                </div>

                {/* セッションカード */}
                <div className="flex-grow min-w-0">
                  <div
                    className={`bg-white/45 backdrop-blur-sm border rounded-xl p-4 sm:p-5 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(112,153,199,0.12)] shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_2px_8px_rgba(0,0,0,0.03)] ${
                      item.highlight
                        ? "border-l-[3px] border-l-accent/50 border-white/20"
                        : "border-white/20"
                    }`}
                  >
                    {/* タイトル行 */}
                    <div className="flex items-start sm:items-center gap-2.5 mb-1">
                      {item.icon && (
                        <span className={`shrink-0 mt-0.5 sm:mt-0 ${item.highlight ? "text-accent" : "text-text-primary/35"}`}>
                          {item.icon}
                        </span>
                      )}
                      <h3 className={`text-base sm:text-lg font-normal leading-snug ${item.highlight ? "text-text-primary" : "text-text-primary/65"}`}>
                        {item.title}
                      </h3>
                    </div>

                    {item.subtitle && (
                      <p className="text-sm font-medium text-text-primary/55 mt-1.5 ml-7">
                        {item.subtitle}
                      </p>
                    )}

                    {item.desc && (
                      <p className="text-sm font-light text-text-primary/50 leading-relaxed mt-2.5 ml-7">
                        {item.desc}
                      </p>
                    )}

                    {/* 詳細リスト */}
                    {item.details && (
                      <div className="mt-4 ml-7 flex flex-col gap-3 border-t border-primary/8 pt-4">
                        {item.details.map((detail, dIdx) => (
                          <div key={dIdx} className={`flex items-start gap-2.5 ${detail.sub ? "ml-4" : ""}`}>
                            {detail.icon && (
                              <span className="text-primary/45 mt-0.5 shrink-0">{detail.icon}</span>
                            )}
                            <div className="flex flex-col min-w-0 gap-0.5">
                              <div className="flex items-baseline gap-2 flex-wrap">
                                {detail.time && (
                                  <span className="text-[11px] font-mono text-primary/45 shrink-0">{detail.time}</span>
                                )}
                                <span className="text-sm font-medium text-text-primary/75">{detail.text}</span>
                              </div>
                              {detail.desc && (
                                <span className="text-xs font-light text-text-primary/45 leading-relaxed">{detail.desc}</span>
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
