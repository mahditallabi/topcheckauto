import { sanityClient } from '@/lib/sanity'

export type PricingPackage = {
  key: 'basic' | 'standard' | 'premium'
  name: string
  description: string
  price: number
  popular: boolean
  features: string[],
  icon: 'shield' | 'zap' | 'award'
}

export type PricingData = {
  packages: PricingPackage[]
}

export const getPricing = async (
  lang: 'ar' | 'en'
): Promise<PricingData | null> => {
  return sanityClient.fetch(
    `*[_type == "pricing"][0]{
      packages[]{
  key,
  icon,
  "name": name[$lang],
  "description": description[$lang],
  price,
  popular,
  "features": features[$lang]
}
    }`,
    { lang }
  )
}
