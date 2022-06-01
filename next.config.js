/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "spacebank.mypinata.cloud",
      "mob-bosses-images.s3.us-east-1.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
