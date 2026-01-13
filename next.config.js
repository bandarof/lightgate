/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output for Cloudflare Pages - standalone for Node.js runtime
  output: 'standalone',
  env: {
    NEXT_PUBLIC_BUILDER_API_KEY: process.env.NEXT_PUBLIC_BUILDER_API_KEY,
  },
};

module.exports = nextConfig;
