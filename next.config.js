/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use standalone for Node.js runtime on Cloudflare Pages
  output: 'standalone',
  env: {
    NEXT_PUBLIC_BUILDER_API_KEY: process.env.NEXT_PUBLIC_BUILDER_API_KEY,
  },
  // Skip static optimization for client components
  experimental: {
    isrMemoryCacheSize: 0
  }
};

module.exports = nextConfig;
