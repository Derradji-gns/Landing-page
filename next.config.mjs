/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "creatorkit.com",
      },
    ],
  },
};

export default nextConfig;
