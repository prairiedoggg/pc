import { Metadata } from 'next'
import { Inter } from 'next/font/google';
import "./globals.css";
import Providers from "./providers";
import Script from 'next/script';
import NavbarWrapper from '../components/NavbarWrapper';

const inter = Inter({
  subsets: ['latin'],
  weight: ["100", "900"],
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
        <Script 
          id="gtag-init"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-70J2H7PC4J');
              gtag('event', 'conversion_event_page_view', {
                event_category: 'engagement',
                event_label: 'page_view',
                value: 1
              });
            `
          }} />
        <Script
          id="twitter-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(e,t,n,s,u,a){
                e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);},
                s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
                a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))
              }(window,document,'script');
              twq('config','p99kq');
            `
          }}
        />
        <Script
          async
          src="https://pagead.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2568866467581564"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <NavbarWrapper />
          <div className="flex-1 pt-16">
            <Providers>
              {children}
            </Providers>
          </div>
        </div>
      </body>
    </html>
  )
}
