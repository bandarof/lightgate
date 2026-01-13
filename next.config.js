/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: false, // Disable Turbopack temporarily to avoid corrupted cache
};

module.exports = nextConfig;
