import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { brand } from "@/lib/brand";

import "./globals.css";
import { YandexSuiteScripts } from "@/components/integrations/YandexSuiteScripts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${brand.name} — iOS28 Glass Furniture`,
  description:
    "Мебель на заказ с эффектом iOS Continuity: импортируйте мудборд с iPhone и получите производство под ключ.",
  metadataBase: new URL("https://atelierflow.example"),
  openGraph: {
    title: `${brand.name} · IOS28 Glass Design`,
    description:
      "Сайт продолжает ощущение iPhone: стекло, плавность и готовность к рекламе через сервисы Яндекса.",
    type: "website",
    locale: "ru_RU",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <YandexSuiteScripts />
      </body>
    </html>
  );
}
