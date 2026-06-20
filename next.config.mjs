/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'z-cdn-media.chatglm.cn',
      },
    ],
  },
};

export default nextConfig;
