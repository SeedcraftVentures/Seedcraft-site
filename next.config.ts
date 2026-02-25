import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: '/escapage', destination: '/escapage.html' },
      { source: '/smokeless', destination: '/smokeless.html' },
    ];
  },
};

export default nextConfig;