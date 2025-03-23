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
            value: `
              default-src 'self';
              connect-src 'self' http://localhost:8080 https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com;
              script-src
                'self'
                'unsafe-inline'
                'unsafe-eval'
                https://pagead2.googlesyndication.com
                https://partner.googleadservices.com
                https://ads-partners.coupang.com
                https://www.googletagmanager.com
                https://www.google-analytics.com
                https://static.ads-twitter.com;
              style-src 'self' 'unsafe-inline';
              img-src 'self' https://pagead2.googlesyndication.com https://www.google-analytics.com https://www.googletagmanager.com data:;
              font-src 'self' data:;
            `.replace(/\s+/g, ' ')
          }
        ],
      },
    ];
  }
};

module.exports = nextConfig;