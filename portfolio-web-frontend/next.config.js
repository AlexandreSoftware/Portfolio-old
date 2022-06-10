/** @type {import('next').NextConfig} */
const optimizedImages = require('next-optimized-images');
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
}

module.exports ={
  ...nextConfig,
  assetPrefix: '/',
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/xandrf/xandrf.github.io/gh-pages/' : ''
}
