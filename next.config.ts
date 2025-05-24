import type { NextConfig } from "next";

const nextConfig = {
  experimental: {
    turbo: false,
  },
}

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
