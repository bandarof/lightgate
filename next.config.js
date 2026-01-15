/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // CRITICAL: Enables static export
  images: {
    unoptimized: true,  // Required for static
  },
  trailingSlash: true,  // Better for static hosting
};

module.exports = nextConfig;
