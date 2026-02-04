/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/MyPhotofolio',
  assetPrefix: '/MyPhotofolio',
  images: {
    domains: [],
    unoptimized: true,
  },
}

module.exports = nextConfig
