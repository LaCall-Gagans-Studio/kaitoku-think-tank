"use client";

import { motion } from "framer-motion";
import { TRANSITIONS } from "@/lib/animations";

interface SessionDetail {
  time?: string;
  text: string;
  desc?: string;
  sub?: boolean;
}

interface SessionItem {
  time: string;
  title: string;
  kind: "break" | "session" | "part";
  theme?: string;
  subtitle?: string;
  details?: SessionDetail[];
}

const timetableData: SessionItem[] = [
  { time: "13:00", title: "所長挨拶", kind: "break" },
  {
    time: "13:05",
    title: "基調対談",
    kind: "session",
    theme: "ウェルビーイングを生み出すための好循環のつくりかた 〜共創と自治の可能性を探る〜",
  },
  {
    time: "13:45",
    title: "第1部",
    kind: "part",
    theme: "自治体における人材の確保と活用",
    details: [
      { time: "13:45", text: "地域人材のパス" },
      { time: "14:00", text: "専門人材の確保・挑戦・課題" },
      { time: "", text: "医療人材の確保", sub: true },
      { time: "", text: "教育人材の確保", sub: true },
      { time: "14:55", text: "自由対談" },
    ],
  },
  {
    time: "15:20",
    title: "特別トークショー",
    kind: "session",
    theme: "AIと行政の最前線",
  },
  {
    time: "15:50",
    title: "第2部",
    kind: "part",
    theme: "共助からの地域活性化を考える",
    details: [
      { time: "15:50", text: "事例研究" },
      {
        time: "",
        text: "放課後共創基金",
        sub: true,
        desc: "行政と民間の協働による教育支援モデルの構築",
      },
      {
        time: "",
        text: "まちの移動をつくりだす",
        sub: true,
        desc: "過疎地域における持続可能なモビリティサービス",
      },
      {
        time: "",
        text: "Basic Infra Villege",
        sub: true,
        desc: "限界集落におけるインフラ自立と共助コミュニティの形成",
      },
      {
        time: "16:40",
        text: "パネルディスカッション",
        desc: "これからの地域経営のあり方と基礎自治体",
      },
      { time: "17:20", text: "自由対談" },
    ],
  },
  {
    time: "17:40",
    title: "懐徳総合研究所からのお知らせ",
    kind: "session",
    subtitle: "中山昌生・松原直輝",
  },
  { time: "17:55", title: "閉会挨拶", kind: "break" },
];

export function TimeTable() {
  return (
    <section
      id="timetable"
      className="relative py-16 sm:py-16 px-4 sm:px-8 w-full"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* 会場・日時 */}
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
              <dt className="text-xs tracking-[0.3em] text-text-primary/40 uppercase mb-2">
                Date
              </dt>
              <dd className="text-xl font-light text-text-primary leading-snug">
                2026年10月3日（土）
              </dd>
              <dd className="text-base font-light text-text-primary/55 mt-0.5">
                13:00 〜 18:00
              </dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.3em] text-text-primary/40 uppercase mb-2">
                Venue
              </dt>
              <dd className="text-xl font-light text-text-primary leading-snug">
                東京大学本郷キャンパス 山上会館
              </dd>
              <dd className="mt-3 flex flex-col gap-1.5 text-base font-light text-text-primary/50">
                <span>オンライン配信あり</span>
                <span>18:00〜 交流会（同会場）</span>
              </dd>
            </div>
          </dl>
        </motion.div>

        {/* ヘッダー */}
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

        {/* プログラム本体 */}
        <ol className="relative">
          {timetableData.map((item, index) => (
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
                      ? "text-text-primary/35"
                      : "text-primary"
                  }`}
                >
                  {item.time}
                </time>

                <div className="min-w-0 mt-1 sm:mt-0">
                  {item.kind === "part" ? (
                    <PartBlock item={item} />
                  ) : item.kind === "break" ? (
                    <p className="text-lg font-light text-text-primary/50">
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
        <p className="mt-2 text-base font-light text-text-primary/55 leading-relaxed">
          {item.theme.startsWith("「") ? item.theme : `「${item.theme}」`}
        </p>
      )}
      {item.subtitle && (
        <p className="mt-2 text-base text-text-primary/45">{item.subtitle}</p>
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
                {detail.time && (
                  <time className="shrink-0 font-mono text-xs tabular-nums text-text-primary/35 sm:w-12 sm:text-right">
                    {detail.time}
                  </time>
                )}
                <div className="min-w-0">
                  <span
                    className={`${
                      detail.sub
                        ? "text-base font-light text-text-primary/60"
                        : "text-base font-normal text-text-primary/80"
                    }`}
                  >
                    {detail.text}
                  </span>
                  {detail.desc && (
                    <p className="mt-1 text-sm font-light text-text-primary/40 leading-relaxed">
                      {detail.desc}
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
