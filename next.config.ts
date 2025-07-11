import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.biblecenterchurch.com",

      },
      {
        protocol: "https",
        hostname: "saucovision.com",

      },
      {
        protocol: "https",
        hostname: "byuc.wordpress.com",

      },
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",

      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",

      }
    ]
  }
};

export default nextConfig;
