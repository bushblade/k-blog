import type { Asset, Post } from '~/graphql/graphcmsTypes'

interface WithThumbnail extends Asset {
  thumbnail: string
}

export interface PostWithThumbnail extends Post {
  coverImage: WithThumbnail
}
