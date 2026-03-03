import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  // IMPORTANT 👇
  basePath: "/dashboard",
  assetPrefix: "/dashboard/",
  trailingSlash: true
};

export default nextConfig;