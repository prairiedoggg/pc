import { MetadataRoute } from 'next'

// 정적 내보내기 모드에서 필요한 설정
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://mypetpersonality.xyz/sitemap.xml',
  }
} 