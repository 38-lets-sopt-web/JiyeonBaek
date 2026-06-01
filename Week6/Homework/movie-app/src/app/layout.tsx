import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "[6주차] TanStack Query 연습",
  description: "영화 목록과 상세 정보를 탐색할 수 있는 영화 사이트입니다.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html lang="ko" className="h-full">
      <body className="flex min-h-full flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
