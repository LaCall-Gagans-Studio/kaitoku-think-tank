"use client";

import { motion } from "framer-motion";
import { TRANSITIONS } from "@/lib/animations";

interface SessionDetail {
  time?: string;
  text: string;
  desc?: string;
  speakers?: string;
  sub?: boolean;
}

interface SessionItem {
  time: string;
  title: string;
  kind: "break" | "session" | "part";
  theme?: string;
  subtitle?: string;
  details?: SessionDetail[];
  hidden?: boolean;
}

const timetableData: SessionItem[] = [
  { time: "13:00", title: "所長挨拶", kind: "break" },
  {
    time: "13:05",
    title: "基調対談",
    kind: "session",
    theme:
      "ウェルビーイングを生み出すための好循環のつくりかた 〜共創と自治の可能性を探る〜",
    subtitle: "鈴木 寛 × 湯崎 英彦 × 森田 浩司",
  },
  {
    time: "13:45",
    title: "第1部",
    kind: "part",
    theme: "自治体における人材の確保と活用",
    details: [
      {
        time: "13:45",
        text: "冒頭セッション・プレゼン",
        desc: "「慢性的人材不足時代の自治体人材活用」",
        speakers: "荒川 裕貴（東京大学特任助教）",
      },
      {
        time: "13:50",
        text: "事例トーク",
        desc: "「複数拠点で働く地域人材の可能性を探る」",
      },
      {
        time: "",
        text: "医療人材（新潟県津南町）",
        desc: "「多様な挑戦機会で医療人材をひきつける」",
        speakers: "千手 孝太郎（津南町立病院医師）",
        sub: true,
      },
      {
        time: "",
        text: "教育人材（高知県須崎市）",
        desc: "「人が人をよぶ循環をつくる」",
        speakers: "押田 貴久（須崎市教育長）× 細田 眞由美（須崎市教育政策プロデューサー）",
        sub: true,
      },
      {
        time: "",
        text: "地域活性化人材（西会津町・萩市）",
        desc: "「共同で人材を調達する」",
        speakers: "東京大学公共政策大学院社会連携講座 自治体研究会",
        sub: true,
      },
      {
        time: "14:55",
        text: "自由トーク",
        speakers:
          "小林 伸行（真鶴町長）ほか全国若手町村長会会員首長 × 鈴木 寛",
      },
    ],
  },
  {
    time: "15:20",
    title: "特別トークショー",
    kind: "session",
    theme: "AIと行政の最前線",
    subtitle: "パブリックテクノロジーズ × 村上 敬亮",
  },
  {
    time: "15:50",
    title: "第2部",
    kind: "part",
    theme: "共助からの地域活性化を考える",
    details: [
      {
        time: "15:50",
        text: "冒頭セッショントーク",
        desc: "「戦略的な資金を使うには？ —地方における生きたお金の使い方をするための障壁を考える—」",
        speakers: "藤沢 久美 × 村上 敬亮",
      },
      {
        time: "16:10",
        text: "事例トーク",
        desc: "「三豊で何が起きたのか —資金循環と観光客増加の秘訣を語る—」",
      },
      {
        time: "",
        text: "放課後共創基金",
        speakers: "小玉 祥平（三豊市教育センター長）／PwC",
        sub: true,
      },
      {
        time: "",
        text: "まちの移動をつくりだす",
        speakers: "田島 楓（暮らしの交通株式会社）",
        sub: true,
      },
      {
        time: "",
        text: "Basic Infra Villege",
        speakers: "横山 裕一（瀬戸内ReFraming代表）",
        sub: true,
      },
      {
        time: "17:05",
        text: "解決トーク",
        desc: "「生きたお金の使い方を地域・自治体で実現するには？」",
        speakers:
          "森田 浩司・氷室 健太郎 ほか全国若手町村長会会員首長 × 藤沢 久美 × 村上 敬亮 × 鈴木 寛",
      },
    ],
  },
  {
    time: "17:40",
    title: "懐徳総合研究所からのお知らせ",
    kind: "session",
    subtitle: "中山 昌生・松原 直輝（後援団体の紹介／懐徳総合研究所の1年）",
  },
  { time: "17:55", title: "閉会挨拶", kind: "break" },
  { time: "18:00", title: "交歓会", kind: "break", hidden: true },
];

export function TimeTable() {
  return (
    <section
      id="timetable"
      className="relative py-16 sm:py-16 px-4 sm:px-8 w-full"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={TRANSITIONS.base}
          className="mb-20 sm:mb-28"
        >
          <p className="text-sm font-medium tracking-[0.4em] text-primary uppercase mb-8">
            Venue & Schedule
          </p>

          <dl className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-x-12 gap-y-6 sm:gap-y-0 border-t border-b border-primary/12 py-8">
            <div>
              <dt className="text-xs tracking-[0.3em] text-text-primary/65 uppercase mb-2">
                Date
              </dt>
              <dd className="text-xl font-light text-text-primary leading-snug">
                2026年10月3日（土）
              </dd>
              <dd className="text-base font-light text-text-primary/80 mt-0.5">
                13:00 〜 18:00
              </dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.3em] text-text-primary/65 uppercase mb-2">
                Venue
              </dt>
              <dd className="text-xl font-light text-text-primary leading-snug">
                東京大学本郷キャンパス 山上会館
              </dd>
              <dd className="mt-3 flex flex-col gap-1.5 text-base font-light text-text-primary/80">
                <span>オンライン配信あり</span>
              </dd>
            </div>
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={TRANSITIONS.base}
          className="mb-14 sm:mb-20"
        >
          <p className="text-sm font-medium tracking-[0.4em] text-primary uppercase mb-4">
            Program
          </p>
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-light text-text-primary tracking-wide">
            タイムテーブル
          </h2>
        </motion.div>

        <ol className="relative">
          {timetableData
            .filter((item) => !item.hidden)
            .map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ ...TRANSITIONS.base, delay: index * 0.03 }}
              className="group"
            >
              {index > 0 && (
                <div
                  className={`border-t sm:ml-32 ${
                    item.kind === "part"
                      ? "border-primary/20"
                      : "border-primary/8"
                  }`}
                />
              )}

              <article
                className={`flex flex-col sm:grid sm:grid-cols-[6rem_1fr] sm:gap-x-8 py-5 sm:py-6 ${
                  item.kind === "part" ? "pt-8 sm:pt-10" : ""
                }`}
              >
                <time
                  dateTime={item.time.replace(":", "")}
                  className={`font-mono text-sm sm:text-base tabular-nums tracking-tight sm:text-right sm:pt-0.5 ${
                    item.kind === "break"
                      ? "text-text-primary/65"
                      : "text-primary"
                  }`}
                >
                  {item.time}
                </time>

                <div className="min-w-0 mt-1 sm:mt-0">
                  {item.kind === "part" ? (
                    <PartBlock item={item} />
                  ) : item.kind === "break" ? (
                    <p className="text-lg font-light text-text-primary/75">
                      {item.title}
                    </p>
                  ) : (
                    <SessionBlock item={item} />
                  )}
                </div>
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function SessionBlock({ item }: { item: SessionItem }) {
  return (
    <div>
      <h3 className="text-lg sm:text-xl font-normal text-text-primary leading-snug">
        {item.title}
      </h3>
      {item.theme && (
        <p className="mt-2 text-base font-light text-text-primary/80 leading-relaxed">
          {item.theme.startsWith("「") ? item.theme : `「${item.theme}」`}
        </p>
      )}
      {item.subtitle && (
        <p className="mt-2 text-sm sm:text-base text-text-primary/70 leading-relaxed">
          {item.subtitle}
        </p>
      )}
    </div>
  );
}

function PartBlock({ item }: { item: SessionItem }) {
  return (
    <div>
      <div className="mb-4">
        <span className="text-xs font-medium tracking-[0.25em] text-primary/70 uppercase">
          {item.title}
        </span>
        {item.theme && (
          <h3 className="mt-1.5 text-lg sm:text-xl font-normal text-text-primary leading-snug">
            {item.theme}
          </h3>
        )}
      </div>

      {item.details && (
        <ul className="flex flex-col gap-0 border-l border-primary/12 pl-3 sm:pl-5">
          {item.details.map((detail, dIdx) => (
            <li
              key={dIdx}
              className={`py-2.5 ${
                detail.sub ? "pl-2 sm:pl-4" : ""
              } ${dIdx < item.details!.length - 1 ? "border-b border-primary/6" : ""}`}
            >
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 sm:flex-nowrap sm:gap-4">
                {detail.time ? (
                  <time className="shrink-0 font-mono text-xs tabular-nums text-text-primary/65 sm:w-12 sm:text-right">
                    {detail.time}
                  </time>
                ) : (
                  <span className="hidden sm:block sm:w-12 shrink-0" />
                )}
                <div className="min-w-0">
                  <span
                    className={`${
                      detail.sub
                        ? "text-base font-light text-text-primary/80"
                        : "text-base font-normal text-text-primary"
                    }`}
                  >
                    {detail.text}
                  </span>
                  {detail.desc && (
                    <p className="mt-1 text-sm font-light text-text-primary/70 leading-relaxed">
                      {detail.desc}
                    </p>
                  )}
                  {detail.speakers && (
                    <p className="mt-1 text-sm font-light text-primary/70 leading-relaxed">
                      {detail.speakers}
                    </p>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
