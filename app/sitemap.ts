import { MetadataRoute } from 'next'

// 정적 내보내기 모드에서 필요한 설정
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // 현재 날짜를 기준으로 lastModified 설정
  const currentDate = new Date();
  // 배포 도메인 설정 - 실제 배포 도메인으로 변경 필요
  const baseUrl = 'https://mypetpersonality.xyz';
  
  return [
    // 메인 페이지 - 최우선 순위
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    
    // 강아지 입양 및 관리 관련 페이지들
    {
      url: `${baseUrl}/adoption-process`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/adoption-precautions`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/behavior-correction`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/bonding-with-dogs`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
} 