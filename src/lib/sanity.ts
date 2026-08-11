import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'p7zev2vb',   // من sanity.config.ts
  dataset: 'production',
  apiVersion: '2026-01-23',
  useCdn: false, // 🔥 مهم
})
