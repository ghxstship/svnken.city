/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The design-system folder is a reference bundle, not part of the build.
  webpack: (config) => config,
};

export default nextConfig;
