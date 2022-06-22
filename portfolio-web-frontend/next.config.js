/** @type {import('next').NextConfig} */
const withOptimizedImages = require('next-optimized-images');
const isProd = process.env.NODE_ENV === 'production'
const withImages = require('next-images')
module.exports = withImages({
  assetPrefix: isProd ? './' : '',
  reactStricktMode : true,
  env:{
    blogUrl:"http://localhost:8000"
  }
});
