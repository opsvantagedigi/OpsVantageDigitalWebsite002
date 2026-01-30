/** @type {import('next').NextConfig} */
const nextConfig = {
  // Provide an empty Turbopack config to silence Next.js 16 warnings
  turbopack: {},

  // Generate browser source maps for debugging and Sentry
  productionBrowserSourceMaps: true,

  // Environment variables
  env: {
    // Ollama configuration - only available server-side
    OLLAMA_API_KEY: process.env.OLLAMA_API_KEY,
    OLLAMA_BASE_URL: process.env.OLLAMA_BASE_URL,
  },

  // Keep Webpack config stable and predictable
  webpack: (config) => {
    config.devtool = 'source-map';
    return config;
  },
};

module.exports = nextConfig;
