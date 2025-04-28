/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["static.wixstatic.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    SITE_KEY: process.env.SITE_KEY,
  },
};

module.exports = nextConfig;
