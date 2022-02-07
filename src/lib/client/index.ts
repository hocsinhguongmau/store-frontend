import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_PROJECT_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_API_VERSION,
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})

export const languagesList = ['en', 'fi', 'se']
