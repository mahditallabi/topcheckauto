import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: '015wvhnp',   // من sanity.config.ts
  dataset: 'production',
  apiVersion: '2026-01-23',
  useCdn: false, // 🔥 مهم
})
