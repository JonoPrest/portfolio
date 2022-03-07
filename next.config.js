/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["jonoprest.s3.af-south-1.amazonaws.com"],
  },
  experimental: {
    outputStandalone: true,
  },
};

module.exports = nextConfig;
