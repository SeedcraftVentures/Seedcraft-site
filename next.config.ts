import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Short aliases for the Wordlore pages. The canonical URLs, the ones in
      // the app and the Play Console, live under /games/wordlore.
      { source: '/wordlore', destination: '/games/wordlore', permanent: true },
      { source: '/wordlore/privacy', destination: '/games/wordlore/privacy', permanent: true },
      { source: '/wordlore/support', destination: '/games/wordlore/support', permanent: true },
      { source: '/wordlore/ios', destination: '/games/wordlore/ios', permanent: true },
      { source: '/wordlore/beta', destination: '/games/wordlore/ios', permanent: false },
      { source: '/games/wordlore/beta', destination: '/games/wordlore/ios', permanent: false },
    ];
  },
  async rewrites() {
    return [
      { source: '/escapage', destination: '/escapage.html' },
      { source: '/smokeless', destination: '/smokeless.html' },
    ];
  },
};

export default nextConfig;