import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { FluidBackground } from "@/components/ui/FluidBackground";
import { SideVerticalText } from "@/components/ui/SideVerticalText";
import { Header } from "@/components/ui/Header";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "第2回 次世代自治共創会議",
  description: "次世代自治共創会議の特設ランディングページ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col relative">
        <FluidBackground />
        <SideVerticalText />
        <Header />
        <main className="flex-grow z-0 relative">{children}</main>
      </body>
    </html>
  );
}
