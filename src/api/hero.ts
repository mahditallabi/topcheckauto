// src/api/hero.ts
import { sanityClient } from '@/lib/sanity'

// ✅ type يدوي للصورة
export type SanityImageSource = {
  _type: 'image'
  asset: {
    _ref: string
  }
}

export type HeroData = {
  title: string
  title2: string
  subtitle: string
  phone: string
  image?: SanityImageSource
}

export const getHero = async (
  lang: 'ar' | 'en'
): Promise<HeroData | null> => {
  return sanityClient.fetch(
    `*[_type == "hero"][0]{
      "title": title[$lang],
      "title2": title2[$lang],
      "subtitle": subtitle[$lang],
      "phone": phone[$lang],
      image
    }`,
    { lang }
  )
}
