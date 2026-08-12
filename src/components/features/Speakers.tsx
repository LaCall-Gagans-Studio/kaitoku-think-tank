"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { TRANSITIONS } from "@/lib/animations";

interface Speaker {
  name: string;
  title: string;
  image: string;
  profile: string;
  comingSoon?: boolean;
  hidden?: boolean;
  /** 円形クロップ時の縦位置（顔が上寄りな写真向け） */
  imagePosition?: "top" | "center";
  /** 例: ファシリテーター */
  role?: string;
}

interface CommitteeGroup {
  committee: string;
  speakers: Speaker[];
}

const speakersData: {
  tier1: Speaker[];
  tier2: CommitteeGroup[];
  tier3: { name: string; title: string; role: string }[];
} = {
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
      image: "/speakers/yuzaki.png",
      profile:
        "1965年広島市生まれ。東京大学法学部卒業後、1990年に通商産業省（現・経済産業省）へ入省し、自動車通商政策や中小企業政策、原子力政策、通商政策などに携わる。1995年にはスタンフォード大学経営大学院（MBA）を修了し、シリコンバレーのベンチャーキャピタルへの出向を経て、2000年にIT企業アッカ・ネットワークスを創業。代表取締役副社長として同社をJASDAQ上場へ導いた。2009年に広島県知事に初当選し、以来4期16年にわたり県政を担う。2025年に任期満了をもって退任し、2026年からは慶應大学特任教授および県立広島大学大学院・叡啓大学・広島大学の客員教授を務めるとともに、ソフトバンク株式会社の社外取締役に就任している。",
    },
    {
      name: "森田 浩司",
      title: "三宅町長\n全国若手町村長会会長",
      image: "/speakers/morita.png",
      profile:
        "1984年奈良県磯城郡三宅町生まれ。2015年に「全国で2番目に小さい町」の奈良県三宅町の議会議員に当選。2016年から町長として「日本一夢が叶う住民参加型の町」へ改革を進める。ビジョンを象徴する交流まちづくりセンター「MiiMo（みぃも）」が2021年12月にグランドオープン。「対話・挑戦・失敗」のバリューサイクルを大切に、ウェルビーイングの高い「自分らしくハッピーにスモール（住もうる）タウン」の実現を目指す。",
    },
  ],
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
          name: "細田 眞由美",
          title:
            "前さいたま市教育長、兵庫教育大学客員教授、うらわ美術館館長、須崎市教育政策プロデューサー",
          image: "/speakers/hosoda.png",
          imagePosition: "top",
          profile:
            "1983年より埼玉県立高等学校で英語教諭を務めた後、埼玉県教育委員会指導主事、県立高校教頭、さいたま市教育委員会指導2課副参事を歴任。2013年からさいたま市立大宮北高等学校校長を務め、2017年から2023年までさいたま市教育委員会教育長として、文部科学省の「英語教育実施状況調査＞中学生の英語力（都道府県・指定都市別）」5回連続日本一を実現した。グローバル社会を生き抜く力を重視した「さいたまメソッド」を、著書『世界基準の英語力: 全国トップクラスのさいたま市の教育は何が違うのか』にて公開。現在は、うらわ美術館館長、兵庫教育大学客員教授、東京大学公共政策大学院講師、文部科学省学校DX戦略アドバイザー、須崎市教育政策プロデューサーなど多方面で活躍中。",
        },
        {
          name: "小林 伸行",
          title: "真鶴町長 / 全国若手町村長会 関東ブロック長",
          image: "/speakers/kobayashi.png",
          profile:
            "筑波大を卒業後、地域情報誌と環境コンサルティングに携わるが、地域の疲弊と日本の将来を憂い、政治を志す。国会議員政策秘書試験に合格、衆議院議員公設秘書を経て横須賀市議を4期13年務める。コロナ禍の中、大学院にて広域連携を研究し、真鶴の課題に気付く。リコール成立を受け町政への挑戦を決意し、2023年の真鶴町長選で当選。地方政治のアカデミー賞と言われるマニフェスト大賞でも6年連続8回受賞し、新聞・ＴＶの取材も多数。",
        },
        {
          name: "押田 貴久",
          title: "須崎市教育長、前兵庫教育大学大学院准教授",
          image: "/speakers/oshida.webp",
          imagePosition: "top",
          profile:
            "1973年埼玉県生まれ。1999年東京大学大学院教育学研究科修士課程修了後、埼玉県比企郡玉川村（現ときがわ町）役場入庁（税務課、教育委員会）。2012年宮崎大学大学院准教授。2016年から兵庫教育大学大学院准教授として、全国で唯一の教育長を育成する教育政策リーダーコースを10年間担当。専門は教育行政学で自治体の独自カリキュラムや教育政策過程を研究。2026年より現職。",
        },
      ],
    },
    {
      committee: "特別トークショー「AIと行政の最前線」",
      speakers: [
        {
          name: "村上 敬亮",
          title: "東京大学特任教授",
          role: "ファシリテーター",
          image: "/speakers/murakami.webp",
          profile:
            "1990年東京大学教養学部卒業。通商産業省（現・経済産業省）入省後、ミシガン大学大学院で応用経済学修士号を取得。IT政策やクールジャパン戦略の立ち上げ、再生可能エネルギーの固定価格買取制度（FIT）設計、国際交渉などに従事。その後、内閣官房や内閣府にて地方創生・規制改革業務に携わり、中小企業庁経営支援部長を経て、2021年9月のデジタル庁発足と同時にデジタル統括官（国民向けサービスグループ長）に就任。コロナ禍の対応やマイナンバーカードの普及、防災DX、デジタル実装を通じた地域活性化を牽引。2025年7月に退官。現在、東京大学大学院公共政策学研究部特任教授、株式会社ドリームインキュベータ特別顧問、京都市政策推進パートナーなどを務め、メディアでの番組配信や著書を通じて日本経済再興や地域の仕事づくりに向けた提言を積極的に発信している。",
        },
        {
          name: "森宮 惺",
          title: "株式会社パブリックテクノロジーズ取締役CTO",
          image: "/speakers/morimiya.png",
          profile:
            "中学生時に開発したアプリが国内無料DL数3位にランクインし、高校生時には東洋経済オンライン「新世代リーダー50人」、週刊AERA「日本を突破する100人」などに選出。灘高等学校を経て、慶應義塾大学環境情報学部では、鈴木寛氏（元参議院議員・文部科学大臣補佐官）村井純氏（現デジタル庁顧問）に師事。株式会社講談社のウェブメディア部門の最高技術責任者・クリエイティブディレクターとして大手出版社内の開発組織立ち上げに取り組んだのち、株式会社チームボックスの取締役CCOを経て、2020年11月より株式会社パブリックテクノロジーズに参画し、CTOに就任。",
        },
      ],
    },
    {
      committee: "第2部：共助からの地域活性化を考える",
      speakers: [
        {
          name: "村上 敬亮",
          title: "東京大学特任教授",
          role: "ファシリテーター",
          image: "/speakers/murakami.webp",
          profile:
            "1990年東京大学教養学部卒業。通商産業省（現・経済産業省）入省後、ミシガン大学大学院で応用経済学修士号を取得。IT政策やクールジャパン戦略の立ち上げ、再生可能エネルギーの固定価格買取制度（FIT）設計、国際交渉などに従事。その後、内閣官房や内閣府にて地方創生・規制改革業務に携わり、中小企業庁経営支援部長を経て、2021年9月のデジタル庁発足と同時にデジタル統括官（国民向けサービスグループ長）に就任。コロナ禍の対応やマイナンバーカードの普及、防災DX、デジタル実装を通じた地域活性化を牽引。2025年7月に退官。現在、東京大学大学院公共政策学研究部特任教授、株式会社ドリームインキュベータ特別顧問、京都市政策推進パートナーなどを務め、メディアでの番組配信や著書を通じて日本経済再興や地域の仕事づくりに向けた提言を積極的に発信している。",
        },
        {
          name: "氷室 健太郎",
          title: "福岡県広川町長 / 全国若手町村長会 九州・沖縄ブロック長",
          image: "/speakers/himuro.png",
          profile:
            "1979年福岡県八女市生まれ。九州大学法学部卒業後、2003年に広川町役場入庁。町民課、住民環境課、健康福祉課、政策調整課、企画課を経験。2010年4月～2013年3月、熊本大学大学院に在職通学。社会文化科学研究科博士前期課程修了（公共政策学修士）。2022年12月に企画課地方創生担当係長（産業課を兼務）で広川町役場を退職。2023年4月の広川町長選挙で初当選。現在1期目。就任から3年、町の未来を切り拓くために「地方創生」「人材育成」「こどもまんなか」などの政策に力を注ぎ、次の世代へと循環するまちづくりを進める。",
        },
        {
          name: "小玉 祥平",
          title: "三豊市教育センター長 / 一般社団法人放課後共創基金 事務局長",
          image: "/speakers/kodama.png",
          profile:
            "東京都生まれ。2017年に(株)リクルートHD入社。2019年に香川県三豊市に移住、市教育委員会に転職。2021年より現職。2026年には石川県加賀市・高知県須崎市・PwCコンサルティングと「放課後共創基金」を共同設立。「純度の高い人を育てる魂の教育」を掲げ、探究学習・協調学習の学校伴走支援や部活動改革、教育DXなどを推進している。",
        },
        {
          name: "田島 楓",
          title: "暮らしの交通株式会社",
          image: "/speakers/tajima.png",
          profile:
            "株式会社くらしノ 代表取締役。1998年東京都江戸川区生まれ。高校卒業以降、「学びの関係人口を増やす」をテーマに、複数のNPOに所属・個人でも活動。1,000人を超える高校生、15を超える全国の自治体・学校と連携、探究学習の普及や教員研修、また働き方改革の推進に向けたICTの学校導入推進等を行ってきた。2021年より香川県三豊市に移住をし、暮らしのなかの「寂しさ」を減らす、をテーマに社会関係資本増強に向けた事業を展開。オンデマンド交通事業などの移動支援事業を経て、現在は、学生向け地域分散型シェアハウス事業や、シニア向けの有償ボランティア事業を展開。",
        },
        {
          name: "横山 裕一",
          title: "瀬戸内ReFraming代表",
          image: "/speakers/yokoyama.png",
          profile:
            "瀬戸内ReFarming株式会社 代表取締役。1998年生まれ、岐阜県出身。珈琲業界に携わる中で農業に興味を持ち、徳島県での研修を経て、2023年11月に香川県三豊市にて農業法人・瀬戸内ReFarming株式会社を設立。ブロッコリーを中心とした農業生産に従事。農業生産に加え、「ベーシックインフラ」サービスも展開。週3回、朝の3時間農業に携わることで、家賃・光熱費のかからない住まいと、地域での仕事やコミュニティを提供する仕組み。目指しているのは、「あなたの地域に関わる力と、暮らしを交換する仕組み」をつくること。年間50名の滞在者を受け入れ、農業を通じて地域に関わる若者を増やしてきた。",
        },
        {
          name: "藤沢 久美",
          title: "国際社会経済研究所理事長",
          image: "/speakers/speaker.png",
          profile:
            "大阪市立大学（現：大阪公立大学）卒業後、国内外の投資運用会社勤務を経て、1995年に日本初の投資信託評価会社を起業。1999年、同社を世界的格付け会社スタンダード＆プアーズに売却後、2000年にシンクタンク・ソフィアバンクの設立に参画し、2013年から2022年3月まで代表を務める。政府各省の審議委員など公職に加え、メルカリなど上場企業の社外取締役やトヨタ自動車の取締役なども兼務。2022年4月より、NECグループの独立シンクタンク国際社会経済研究所の理事長として、テクノロジーの力で社会課題の解決を実現する事業戦略や市場戦略に責任を持つソートリーダーシップ活動に尽力している。",
        },
      ],
    },
  ],
  tier3: [
    { name: "中山 昌生", title: "懐徳総合研究所 代表取締役", role: "主催者" },
    { name: "松原 直輝", title: "懐徳総合研究所 主席研究員", role: "主催者" },
  ],
};

/** エグゼクティブパートナー（登壇者とは別枠）
 * 掲載順: 会長 → 副会長 → ブロック長（兼務は副会長側に1回のみ）
 */
const executivePartners: Speaker[] = [
  // 会長
  {
    name: "森田 浩司",
    title: "三宅町長 / 全国若手町村長会会長",
    image: "/speakers/morita.png",
    profile:
      "1984年奈良県磯城郡三宅町生まれ。2015年に「全国で2番目に小さい町」の奈良県三宅町の議会議員に当選。2016年から町長として「日本一夢が叶う住民参加型の町」へ改革を進める。ビジョンを象徴する交流まちづくりセンター「MiiMo（みぃも）」が2021年12月にグランドオープン。「対話・挑戦・失敗」のバリューサイクルを大切に、ウェルビーイングの高い「自分らしくハッピーにスモール（住もうる）タウン」の実現を目指す。",
  },
  // 副会長
  {
    name: "菅野 大志",
    title: "山形県西川町長 / 全国若手町村長会 副会長",
    image: "/speakers/kanno.png",
    profile:
      "1978年山形県西川町生まれ。早稲田大学卒業。2001年財務省東北財務局に入局。金融庁監督局銀行第一課、財務省東北財務局金融監督第一課、金融庁総合政策局地域課題解決支援チーム、内閣官房まち・ひと・しごと創生本部事務局、内閣官房デジタル田園都市国家構想実現会議事務局などを経て、2022年4月に西川町長選挙で初当選（現在2期目）。デジタル住民票NFTや公園命名権NFTオークションなど日本初の取り組みを次々と実行し、「関係人口」の拡大や月山を中心とした観光資源のブラッシュアップなど、元財務官僚の知見を活かしたスピード感ある町政改革を展開している。",
  },
  {
    name: "小園 拓志",
    title: "長野県御代田町長 / 全国若手町村長会 副会長・北信越ブロック長",
    image: "/speakers/kozono.jpg",
    hidden: true, // 許諾・照会中
    profile:
      "1977年北海道日高町生まれ。東京大学法学部卒業。2000年北海道新聞社に入社し、記者として江別支局・帯広支社・本社編集本部・報道センターなどを歴任。その後、経営企画部門での勤務を経て2017年に転職し、2018年に御代田町へ移住。2019年2月の御代田町長選挙で初当選し、2023年に再選（現在2期目）。記者時代に培った客観的な視点と対話力を活かし、「子どもたちの未来に投資する町政」を標榜。住民の声を徹底してログ化・分析するボトムアップ型の町政運営や、行政の透明化、持続可能なまちづくりに注力している。",
  },
  {
    name: "日髙 輝夫",
    title: "愛知県東浦町長 / 全国若手町村長会 副会長・東海ブロック長",
    image: "/speakers/hidaka.jpg",
    imagePosition: "top",
    profile:
      "1974年愛知県東浦町緒川生まれ。名古屋大学工学部卒業（生物機能工学を専攻）。財団法人日本気象協会に入社し、気象予報士資格を取得。仙台市勤務中に東海豪雨を経験したことをきっかけに転職を決意し、2002年愛知県庁に入庁（政策企画局などで地方創生や2026年アジア競技大会招致、2016年伊勢志摩サミットにおける愛知県内での参加国首脳の接遇などを担当）。2023年8月に東浦町長選挙で初当選（現在1期目）。「何事も前向きに」を座右の銘に、地域に根ざした。",
  },
  // ブロック長（副会長兼務は上記に掲載済みのため省略）
  {
    name: "村椿 哲朗",
    title: "北海道当麻町長 / 全国若手町村長会 北海道・東北ブロック長",
    image: "/speakers/muratsubaki.jpg",
    profile:
      "1979年北海道当麻町生まれ。旭川北高等学校卒業後、当麻町役場に入庁。まちづくり推進課地域振興係長、教育委員会教育課社会教育係長などを歴任し、長年にわたり町政の実務を牽引。2019年9月に町役場を退職し、2020年1月の町長選挙で無投票初当選、同年2月に就任。「食育・木育・花育」を柱とした「アグリビジネス」の推進や、良質な「当麻産材」を活用したこだわりの木造公共建築・住宅の普及など、地域の特性に根ざした独自の循環型まちづくりを展開し、地方創生の先進事例として注目を集めている。",
  },
  {
    name: "小林 伸行",
    title: "真鶴町長 / 全国若手町村長会 関東ブロック長",
    image: "/speakers/kobayashi.png",
    profile:
      "筑波大を卒業後、地域情報誌と環境コンサルティングに携わるが、地域の疲弊と日本の将来を憂い、政治を志す。国会議員政策秘書試験に合格、衆議院議員公設秘書を経て横須賀市議を4期13年務める。コロナ禍の中、大学院にて広域連携を研究し、真鶴の課題に気付く。リコール成立を受け町政への挑戦を決意し、2023年の真鶴町長選で当選。地方政治のアカデミー賞と言われるマニフェスト大賞でも6年連続8回受賞し、新聞・ＴＶの取材も多数。",
  },
  {
    name: "小澤 晃広",
    title: "奈良県川西町長 / 全国若手町村長会 近畿ブロック長",
    image: "/speakers/ozawa.jpg",
    imagePosition: "top",
    profile:
      "1982年奈良県磯城郡川西町生まれ。2005年早稲田大学第一文学部卒業（地域社会学・まちづくりを専攻）。株式会社フージャースコーポレーションに入社し、営業・企画・人事・財務などを担当。東北支店・大阪支店の立ち上げにも携わり支店長を歴任した。2010年に社会起業・政策学校「一新塾」（大前研一創設）第27期に入塾し、政策形成やまちづくりへの関心を深める。2021年3月に同社を退職し、同年7月の川西町長選挙で初当選（現在2期目）。「シニアの生活支援強化」「子育て・教育の支援」「人が集まるまちづくりの推進」「行政改革の推進強化」を柱に、民間企業での経営経験を活かしたスピード感のある町政運営を進めている。",
  },
  {
    name: "竹口 大紀",
    title: "鳥取県大山町長 / 全国若手町村長会 中国・四国ブロック長",
    image: "/speakers/taniguchi.webp",
    imagePosition: "top",
    profile:
      "1982年鳥取県名和町（現・大山町）生まれ。国立米子高専卒業。ネット通販会社の起業などを経て、2009年から町議会議員（1期）。2013年からカナダで人口増加小規模自治体モデルを調査研究し、2017年4月の大山町長選挙で初当選（現在3期目）。教育・子育て・アウトドアのまちづくりに力を入れており、10年前に推計された予想人口を1000人上回る人口を維持するなど成果を上げている。",
  },
  {
    name: "氷室 健太郎",
    title: "福岡県広川町長 / 全国若手町村長会 九州・沖縄ブロック長",
    image: "/speakers/himuro.png",
    profile:
      "1979年福岡県八女市生まれ。九州大学法学部卒業後、2003年に広川町役場入庁。町民課、住民環境課、健康福祉課、政策調整課、企画課を経験。2010年4月～2013年3月、熊本大学大学院に在職通学。社会文化科学研究科博士前期課程修了（公共政策学修士）。2022年12月に企画課地方創生担当係長（産業課を兼務）で広川町役場を退職。2023年4月の広川町長選挙で初当選。現在1期目。就任から3年、町の未来を切り拓くために「地方創生」「人材育成」「こどもまんなか」などの政策に力を注ぎ、次の世代へと循環するまちづくりを進める。",
  },
];

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

        {/* Tier 1: 基調講演 */}
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

        {/* Tier 2: パネリスト — 部会ごとに分類 */}
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
                  {committeeGroup.speakers
                    .filter((speaker) => !speaker.hidden)
                    .map((speaker, i) => (
                    <div
                      key={`${speaker.name}-${i}`}
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

        {/* エグゼクティブパートナー（登壇者とは別枠） */}
        <div className="mb-16 sm:mb-24">
          <p className="text-xs font-medium tracking-[0.4em] text-primary text-center mb-4">
            EXECUTIVE PARTNERS
          </p>
          <h3 className="text-center text-xl sm:text-2xl font-light text-text-primary tracking-wider mb-3">
            エグゼクティブパートナー
          </h3>
          <p className="text-center text-sm font-light text-text-primary/50 mb-10 sm:mb-14 max-w-2xl mx-auto leading-relaxed">
            登壇者とともにフォーラムを支えるパートナー
          </p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {executivePartners
              .filter((partner) => !partner.hidden)
              .map((partner, i) => (
              <div
                key={partner.name}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm"
              >
                <SpeakerCard speaker={partner} index={i} size="medium" />
              </div>
            ))}
          </div>
        </div>

        {/* 自由対談参加予定 — 一旦非表示
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
        */}

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
  const objectPosition =
    speaker.imagePosition === "top" ? "object-top" : "object-center";
  const [expanded, setExpanded] = useState(false);
  const profileRef = useRef<HTMLParagraphElement>(null);
  const [isClampable, setIsClampable] = useState(false);

  useEffect(() => {
    const el = profileRef.current;
    if (!el || !speaker.profile) {
      setIsClampable(false);
      return;
    }
    // line-clamp-3 相当の高さより本文が長いときだけ畳み込みを有効化
    const measure = () => {
      const styles = getComputedStyle(el);
      const lineHeight = parseFloat(styles.lineHeight) || 22;
      setIsClampable(el.scrollHeight > lineHeight * 3.2);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [speaker.profile]);

  if (speaker.comingSoon) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ ...TRANSITIONS.base, delay: index * 0.08 }}
        className="h-full"
      >
        <div className="relative bg-white/30 backdrop-blur-xl border border-dashed border-primary/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] p-6 sm:p-8 flex flex-col items-center justify-center min-h-[280px] h-full">
          <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-primary/25" />
          <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-primary/25" />
          <div className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-primary/25" />
          <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-primary/25" />
          <p className="text-base sm:text-lg font-light text-text-primary/45 tracking-wider text-center">
            情報をお待ちください
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ ...TRANSITIONS.base, delay: index * 0.08 }}
      className="h-full"
    >
      <div className="group relative bg-white/40 backdrop-blur-xl border border-white/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_8px_32px_rgba(0,0,0,0.05)] p-6 sm:p-8 flex flex-col items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_16px_48px_rgba(112,153,199,0.15)] h-full">
        <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-primary/40" />
        <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-primary/40" />
        <div className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-primary/40" />
        <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-primary/40" />

        <div
          className={`relative rounded-full overflow-hidden mb-5 flex-shrink-0 ring-2 ring-white/60 ${isLarge ? "w-32 h-32 sm:w-40 sm:h-40" : "w-24 h-24 sm:w-28 sm:h-28"}`}
        >
          <img
            src={speaker.image}
            alt={speaker.name}
            className={`w-full h-full object-cover ${objectPosition} transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-108`}
          />
        </div>

        <div className="text-center flex flex-col flex-grow w-full">
          {speaker.role && (
            <span className="text-[11px] font-medium tracking-[0.2em] text-primary/70 mb-1">
              {speaker.role}
            </span>
          )}
          <h3
            className={`font-normal text-text-primary tracking-widest mb-1 ${isLarge ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"}`}
          >
            {speaker.name}
          </h3>
          {speaker.title && (
            <p className="text-sm font-light text-primary tracking-wide mb-4 whitespace-pre-line">
              {speaker.title}
            </p>
          )}
          {speaker.profile && (
            <>
              <div className="w-8 h-[1px] bg-primary/25 mx-auto mb-4" />
              <button
                type="button"
                onClick={() => isClampable && setExpanded((v) => !v)}
                className={`text-left w-full ${isClampable ? "cursor-pointer" : "cursor-default"}`}
                aria-expanded={expanded}
                disabled={!isClampable}
              >
                <p
                  ref={profileRef}
                  className={`text-sm leading-relaxed text-text-primary/65 font-light transition-[max-height] duration-300 ${
                    expanded ? "" : "line-clamp-3"
                  }`}
                >
                  {speaker.profile}
                </p>
                {isClampable && (
                  <span className="mt-2 inline-block text-xs tracking-wider text-primary/80">
                    {expanded ? "閉じる" : "続きを読む"}
                  </span>
                )}
              </button>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
