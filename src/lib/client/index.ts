import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_PROJECT_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_API_VERSION,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: process.env.NODE_ENV === 'production',
})

export const languagesList = ['en', 'fi', 'se']
