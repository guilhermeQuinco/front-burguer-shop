import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cache-mcd-middleware.mcdonaldscupones.com",
      },
    ],
  },
};

export default nextConfig;
