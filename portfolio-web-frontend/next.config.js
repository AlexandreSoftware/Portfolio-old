/** @type {import('next').NextConfig} */
const optimizedImages = require('next-optimized-images');

const nextConfig = {
  reactStrictMode: true,
}
module.exports ={
  nextConfig,
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/xandrf/xandrf.github.io/gh-pages/' : ''
}
