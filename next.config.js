/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output for Cloudflare Pages - static export
  output: 'standalone',
  env: {
    NEXT_PUBLIC_BUILDER_API_KEY: process.env.NEXT_PUBLIC_BUILDER_API_KEY,
  },
};

module.exports = nextConfig;
