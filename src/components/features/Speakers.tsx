"use client";

import { motion } from "framer-motion";
import { TRANSITIONS } from "@/lib/animations";

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
      title: "東大公共政策大学院教授 元文部科学副大臣",
      image: "/speakers/suzukan.webp",
      profile:
        "1986年東京大学法学部卒業。通商産業省、慶應義塾大学助教授を経て参議院議員(12年間)。文部科学副大臣（二期）、文部科学大臣補佐官（四期）などを歴任。地域活性化、教育、医療、スポーツ、文化、科学技術イノベーションに関する政策づくりや各種プロデュースを中心に活動。現在、大阪大学招聘教授、千葉大学医学部客員教授、電通大学客員教授、福井大学客員教授、和歌山大学客員教授、神奈川県参与、神奈川県立保健福祉大学理事、Teach for All Global board member, 日本サッカー協会参与、NPO法人日本教育再興連盟代表理事（ROJE）、ウェルビーイング学会副代表理事なども務める。",
    },
    {
      name: "湯崎 英彦",
      title: "前広島県知事",
      image: "/speakers/yuzaki.webp",
      profile:
        "1990年東京大学法学部卒業。通商産業省（現・経済産業省）入省後、スタンフォード大学経営大学院でMBA（経営学修士）を取得。退官後の2000年にアッカ・ネットワークスを共同設立し、代表取締役副社長としてJASDAQ上場へと導く。その後、2009年から2025年まで4期16年にわたり広島県知事を務める。在任中は、全国初となる都道府県管理職への年俸制導入、知事としての育児休暇取得、G7広島サミットの誘致と各国首脳への平和発信、県立の中高一貫校「広島叡智学園」の開校など、産業、教育、平和行政の各分野で先進的な政策をプロデュース。現在、広島大学客員教授、県立広島大学大学院（HBMS）客員教授を務め、ソフトバンク社外取締役への就任が内定している。",
    }
    // {
    //   name: "森田 浩司",
    //   title: "奈良県三宅町長",
    //   image: "/speakers/morita.webp",
    //   profile:
    //     "1984年奈良県磯城郡三宅町生まれ。大阪商業大学を卒業後、2015年に「全国で2番目に小さい町」の奈良県三宅町の議会議員に当選。2016年から町長として「日本一夢が叶う住民参加型の町」へ改革を進める。ビジョンを象徴する交流まちづくりセンター「MiiMo（みぃも）」が2021年12月にグランドオープン。妻の第一子の出産を機に、無期限の時短勤務を取得し「子どもが安心して育つ町」を目指す。",
    // },
  ] satisfies Speaker[],
  tier2: [
    {
      committee: "第1部：自治体における人材の確保と活用",
      speakers: [
        {
          name: "荒川 裕貴",
          title:
            "横浜市立大学医学部公衆衛生学教室助教 東京大学公共政策大学院特任助教 一般社団法人Next Public Health Lab代表理事",
          image: "/speakers/arakawa.webp",
          profile:
            "2011年金沢大学医学部卒業。東京都立多摩総合医療センターで臨床経験を積んだ後、東京大学公衆衛生大学院で公衆衛生学修士（専門職）、医学博士を取得。現在は「人のつながりと健康」をテーマに、横浜市立大学で社会的孤立や孤独感に関わる研究、医学部生への公衆衛生教育に携わる。また、横浜市で実施した産官学連携の社会実装PJTの経験を元に、公衆衛生専門職を中心としたチームNext Public Health Labを立ち上げ、自治体・企業と専門職が共に健康づくりのエビデンス創出と社会実装を行う体制を目指して活動中。2024年11月より東京大学公共政策大学院特任助教。",
        },
        {
          name: "押田 貴久",
          title:
            "須崎市教育長",
          image: "/speakers/speaker.png",
          profile:
            "2011年金沢大学医学部卒業。東京都立多摩総合医療センターで臨床経験を積んだ後、東京大学公衆衛生大学院で公衆衛生学修士（専門職）、医学博士を取得。現在は「人のつながりと健康」をテーマに、横浜市立大学で社会的孤立や孤独感に関わる研究、医学部生への公衆衛生教育に携わる。また、横浜市で実施した産官学連携の社会実装PJTの経験を元に、公衆衛生専門職を中心としたチームNext Public Health Labを立ち上げ、自治体・企業と専門職が共に健康づくりのエビデンス創出と社会実装を行う体制を目指して活動中。2024年11月より東京大学公共政策大学院特任助教。",
        },
        {
          name: "細田 眞由美",
          title:
            "前さいたま市教育長 兵庫教育大学客員教授 うらわ美術館館長 須崎市教育政策プロデューサー",
          image: "/speakers/hosoda.webp",
          profile:
            "1983年より埼玉県立高等学校で英語教諭を務めた後、埼玉県教育委員会指導主事、県立高校教頭、さいたま市教育委員会指導2課副参事を歴任。2013年からさいたま市立大宮北高等学校校長を務め、2017年から2023年までさいたま市教育委員会教育長として、文部科学省の「英語教育実施状況調査＞中学生の英語力（都道府県・指定都市別）」4回連続日本一を実現した。グローバル社会を生き抜く力を重視した「さいたまメソッド」を、著書『世界基準の英語力: 全国トップクラスのさいたま市の教育は何が違うのか』にて公開。現在は、うらわ美術館館長、兵庫教育大学客員教授、東京大学公共政策大学院講師、文部科学省学校DX戦略アドバイザー、須崎市教育政策プロデューサーなど多方面で活躍中。",
        },
      ],
      
    },
    {
      committee: "特別トークショー「AIと行政の最前線」",
      speakers: [
        {
          name: "村上 敬亮",
          title: "東京大学特任教授",
          image: "/speakers/murakami.webp",
          profile:
            "1990年東京大学教養学部卒業。通商産業省（現・経済産業省）入省後、ミシガン大学大学院で応用経済学修士号を取得。IT政策やクールジャパン戦略の立ち上げ、再生可能エネルギーの固定価格買取制度（FIT）設計、国際交渉などに従事。その後、内閣官房や内閣府にて地方創生・規制改革業務に携わり、中小企業庁経営支援部長を経て、2021年9月のデジタル庁発足と同時にデジタル統括官（国民向けサービスグループ長）に就任。コロナ禍の対応やマイナンバーカードの普及、防災DX、デジタル実装を通じた地域活性化を牽引。2025年7月に退官。現在、東京大学大学院公共政策学研究部特任教授、株式会社ドリームインキュベータ特別顧問、京都市政策推進パートナーなどを務め、メディアでの番組配信や著書を通じて日本経済再興や地域の仕事づくりに向けた提言を積極的に発信している。",
        },
      ],
    },
    {
      committee: "第2部：共助からの地域活性化を考える",
      speakers: [
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
          image: "/speakers/speaker.png",
          profile:
            "「まちの移動をつくりだす」をミッションに、過疎地域における持続可能なモビリティサービスを展開。",
        },
        {
          name: "横山 裕一",
          title: "瀬戸内ReFraming代表",
          image: "/speakers/speaker.png",
          profile:
            "「Basic Infra Villege」構想を通じ、限界集落におけるインフラの自立と共助のコミュニティ形成を推進。",
        },
      ],
    },
  ],
  tier3: [
    { name: "中山 昌生", title: "懐徳総合研究所 代表取締役", role: "主催者" },
    { name: "松原 直輝", title: "懐徳総合研究所 主席研究員", role: "主催者" },
  ],
};

const freeDiscussionParticipants = [
  {
    name: "中山昌生",
    affiliation: "懐徳総合研究所",
    title: "代表取締役",
  },
  {
    name: "松原直輝",
    affiliation: "懐徳総合研究所",
    title: "主席研究員",
    link: "https://researchmap.jp/n-matsubara2019",
  },
];

export function Speakers() {
  return (
    <section
      id="speakers"
      className="relative py-24 sm:py-32 px-8 sm:px-16 w-full"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-16 sm:mb-24">
          {speakersData.tier1.map((speaker, i) => (
            <SpeakerCard
              key={speaker.name}
              speaker={speaker}
              index={i}
              size="large"
            />
          ))}
        </div>

        {/* Tier 2: パネリスト（5名）— 部会ごとに分類 */}
        <div className="mb-16 sm:mb-24">
          <p className="text-xs font-medium tracking-[0.4em] text-primary text-center mb-12 sm:mb-16">
            GUEST SPEAKERS
          </p>
          <div className="flex flex-col gap-16 sm:gap-20">
            {speakersData.tier2.map((committeeGroup, cIdx) => (
              <div key={cIdx}>
                <h3 className="text-center text-lg sm:text-xl font-medium text-text-primary mb-8 border-b border-primary/20 pb-4 max-w-2xl mx-auto">
                  {committeeGroup.committee}
                </h3>
                <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                  {committeeGroup.speakers.map((speaker, i) => (
                    <div
                      key={speaker.name}
                      className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm"
                    >
                      <SpeakerCard speaker={speaker} index={i} size="medium" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 自由対談参加予定 */}
        <div className="mb-16 sm:mb-24">
          <p className="text-xs font-medium tracking-[0.4em] text-primary text-center mb-6 sm:mb-8">
            FREE DISCUSSION PARTICIPANTS
          </p>
          <h3 className="text-center text-xl sm:text-2xl font-light text-text-primary tracking-wider mb-8 sm:mb-12">
            自由対談参加予定
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-3 text-[15px] sm:text-[17px] text-text-primary/80 font-light leading-relaxed max-w-6xl mx-auto text-center px-4">
            {freeDiscussionParticipants.map((p, i) => (
              <span key={i} className="inline-flex items-center">
                {p.link ? (
                  <a
                    href={p.link}
                    className="hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4"
                  >
                    {p.name}
                    <span className="text-sm ml-1">
                      （{p.affiliation} {p.title}）
                    </span>
                  </a>
                ) : (
                  <span>
                    {p.name}
                    <span className="text-sm ml-1">
                      （{p.affiliation} {p.title}）
                    </span>
                  </span>
                )}
                <span className="ml-5 text-primary/30 font-extralight select-none">
                  /
                </span>
              </span>
            ))}
            <span className="inline-flex items-center text-text-primary/60">
              {freeDiscussionParticipants.length > 0
                ? "ほか順次追加予定（随時更新）"
                : "順次公開予定（随時更新）"}
            </span>
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
