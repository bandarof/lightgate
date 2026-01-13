/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output for Cloudflare Pages - static export
  output: 'export',
  env: {
    NEXT_PUBLIC_BUILDER_API_KEY: process.env.NEXT_PUBLIC_BUILDER_API_KEY,
  },
  // Disable static optimization for dynamic routes
  skipTrailingSlashRedirect: true,
};

module.exports = nextConfig;
