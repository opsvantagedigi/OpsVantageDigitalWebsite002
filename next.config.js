/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force Webpack for all environments (dev + prod)
  // Turbopack/turbo experimental flag removed because Next.js reports
  // it as an unrecognized key in the current Next version.

  // NOTE: Don't include a top-level `turbopack` boolean in config —
  // some Next.js versions validate that key as an object. Instead we
  // force Webpack by using the build script flag `--webpack` (see
  // updated `package.json`), and avoid adding unrecognized keys here.

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
