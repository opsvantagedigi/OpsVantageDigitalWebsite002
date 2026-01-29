/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force Webpack for all environments (dev + prod)
  // Turbopack/turbo experimental flag removed because Next.js reports
  // it as an unrecognized key in the current Next version.

  // Disable Turbopack (Next.js 16 defaults to Turbopack). Explicitly
    // set to false to force Webpack mode so Vercel builds succeed when
    // a webpack config is present. Use the `experimental` key to avoid
    // invalid option type errors in Next.js versions that expect an
    // object rather than a boolean at the top-level `turbopack` key.
    experimental: {
      turbopack: false,
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
