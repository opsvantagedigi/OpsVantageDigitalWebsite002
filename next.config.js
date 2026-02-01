// Governance Note: Next.js config for build, environment, and source maps. Ensures maintainable, teachable setup.
// Maintenance: Update config as build, environment, or deployment needs change. Keep all changes commented for future maintainers.
// Legacy Alignment: Follows "Stewardship" and "Clarity" pillars. Comments clarify teachability and governance.
/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...existing code...

  // Generate browser source maps for debugging and Sentry
  productionBrowserSourceMaps: true,

  // Environment variables
  env: {
    // Ollama configuration - only available server-side
    OLLAMA_API_KEY: process.env.OLLAMA_API_KEY,
    OLLAMA_BASE_URL: process.env.OLLAMA_BASE_URL,
  },

  // Keep Webpack config stable and predictable
  webpack: (config, { isServer }) => {
    config.devtool = "source-map";
    if (process.env.ANALYZE === "true") {
      const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
      config.plugins = config.plugins || [];
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "static",
          reportFilename: isServer
            ? "../analyze/server.html"
            : "./analyze/client.html",
        }),
      );
    }
    return config;
  },
};

// Add security headers (CSP, etc.)
const securityHeaders = require("./next.headers.js");

nextConfig.headers = async () => [
  {
    source: "/(.*)",
    headers: securityHeaders,
  },
];

module.exports = nextConfig;
