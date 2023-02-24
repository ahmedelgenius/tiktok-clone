/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    domains: [
      "t4.ftcdn.net",
      "lh3.googleusercontent.com",
      "pbs.twimg.com",
      "unsplash.com",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
