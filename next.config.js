/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This is the key line for static export
  images: {
    unoptimized: true, // Required for static export
  },
  // Optional: Helps with routing, especially on static hosts
  trailingSlash: true,
};

module.exports = nextConfig;
