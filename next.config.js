/**
 * Enable production browser source maps to trace minified chunks back to source
 * and force full source maps via webpack `devtool` for precise mapping.
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  webpack(config, { dev, isServer }) {
    // Force full source maps for client production bundles
    if (!dev && !isServer) {
      config.devtool = 'source-map'
    }
    return config
  },
}

module.exports = nextConfig
