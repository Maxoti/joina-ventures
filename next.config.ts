import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
  },
  turbopack: { root: path.resolve(__dirname) },
};

export default nextConfig;
