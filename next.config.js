/** @type {import('next').NextConfig} */
const nextConfig = {
  // Explicitly disable Turbopack for Next.js 16+
  turbopack: {
    enabled: false
  },

  // Generate browser source maps for debugging and Sentry
  productionBrowserSourceMaps: true,

  // Keep Webpack config stable and predictable
  webpack: (config) => {
    config.devtool = 'source-map';
    return config;
  },
};

module.exports = nextConfig;
