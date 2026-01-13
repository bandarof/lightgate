/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output for Cloudflare Pages - use Node.js runtime with standalone output
  output: 'standalone',
  // Disable static optimization to prevent build-time context errors
  experimental: {
    isrMemoryCacheSize: 0,
  },
  env: {
    NEXT_PUBLIC_BUILDER_API_KEY: process.env.NEXT_PUBLIC_BUILDER_API_KEY,
  },
};

module.exports = nextConfig;
