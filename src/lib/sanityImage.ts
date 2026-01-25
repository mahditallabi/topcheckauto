import imageUrlBuilder from '@sanity/image-url'
import { sanityClient } from './sanity'

const builder = imageUrlBuilder(sanityClient)

// ✅ Type بسيط وآمن
type SanityImageSource = {
  _type: 'image'
  asset: {
    _ref: string
  }
}

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}
