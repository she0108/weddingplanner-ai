import "./globals.css";
import type { Metadata } from "next";

import localFont from "next/font/local";

const Pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WedddingAI",
  description: "AI 웨딩 플래너 서비스",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <head></head>
      <body className={Pretendard.className}>{children}</body>
    </html>
  );
}
