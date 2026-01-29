const sanityClient = require('@sanity/client')
const imageUrlBuilder = require('@sanity/image-url')

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID || process.env.SANITY_STUDIO_PROJECT_ID || ''
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_DATASET || process.env.SANITY_STUDIO_DATASET || 'production'

const client = sanityClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production'
})

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

module.exports = { client, urlFor }
