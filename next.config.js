import createNextPWA from 'next-pwa'

const withPWA = createNextPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development' && process.env.PWA_ENABLED !== 'true'
})

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

export default withPWA(nextConfig)
