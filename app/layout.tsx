import { Metadata } from 'next'
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./providers";
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
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5TBJ279Z');`
        }}
      />
        <script
          async
          src="https://pagead.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2568866467581564"
          crossOrigin="anonymous"
        />
      </head>
      <body className={geistSans.variable + ' ' + geistMono.variable}>
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-5TBJ279Z"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
