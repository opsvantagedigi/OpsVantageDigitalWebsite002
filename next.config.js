/** @type {import('next').NextConfig} */
const nextConfig = {
  // Provide an empty Turbopack config to silence Next.js 16 warnings
  turbopack: {},

  // Generate browser source maps for debugging and Sentry
  productionBrowserSourceMaps: true,

  // Keep Webpack config stable and predictable
  webpack: (config) => {
    config.devtool = 'source-map';
    return config;
  },
};

module.exports = nextConfig;
