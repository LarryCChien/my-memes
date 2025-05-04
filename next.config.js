/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.ap-northeast-1.amazonaws.com',
        port: '',
        pathname: '/my.memes/**',
      },
    ],
  },
}

module.exports = nextConfig 