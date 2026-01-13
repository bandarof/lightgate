/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output for Cloudflare Pages - export static site
  output: 'export',
  distDir: '.next',
  env: {
    NEXT_PUBLIC_BUILDER_API_KEY: process.env.NEXT_PUBLIC_BUILDER_API_KEY,
  },
  // Disable static optimization that causes prerendering issues
  typescript: {
    tsconfigPath: './tsconfig.json'
  }
};

module.exports = nextConfig;
