/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['ads-partners.coupang.com'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            // 다음처럼 쿠팡 도메인도 추가:
            value: `
              default-src 'self';
              script-src
                'self'
                'unsafe-inline'
                'unsafe-eval'
                https://pagead2.googlesyndication.com
                https://partner.googleadservices.com
                https://ads-partners.coupang.com;
              style-src 'self' 'unsafe-inline';
              img-src 'self' https://pagead2.googlesyndication.com data:;
            `.replace(/\s+/g, ' ')
          }
        ],
      },
    ];
  }
};

module.exports = nextConfig;