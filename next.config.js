/** @type {import('next').NextConfig} */

const withOptimizedImages = require('next-optimized-images');


const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
  },
  reactStrictMode: true,
}

module.exports = nextConfig;
