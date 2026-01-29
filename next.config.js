/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force Webpack for all environments (dev + prod)
  experimental: {
    turbo: false,
  },

  // Generate browser source maps for debugging and Sentry
  productionBrowserSourceMaps: true,

  // Keep Webpack config stable and predictable
  webpack: (config) => {
    // Ensure source maps are created in a predictable way
    config.devtool = 'source-map';
    return config;
  },
};

module.exports = nextConfig;
