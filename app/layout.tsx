import { Metadata } from 'next'
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./providers";
import Script from 'next/Script';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: '반려동물 성격 예측 서비스',
  description: '이미지를 업로드하여 반려동물의 성격을 예측하세요.',
  keywords: ['반려동물', '성격 예측', '이미지 분석', '머신러닝'],
  other: {
    'google-adsense-account': process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID || '',
  },
  icons: {
    icon: "/puppy.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
<Script async src="https://www.googletagmanager.com/gtag/js?id=G-70J2H7PC4J"></Script>
<Script dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-70J2H7PC4J');
  `
}} />
        <Script
          async
          src="https://pagead.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2568866467581564"
          crossOrigin="anonymous"
        />
      </head>
      <body className={geistSans.variable + ' ' + geistMono.variable}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
