// app/robots.ts 파일 생성
import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'],  // 필요시 접근 제한 경로 설정
    },
    // 실제 도메인으로 변경
    sitemap: 'https://pettovv.com/sitemap.xml',
  }
}