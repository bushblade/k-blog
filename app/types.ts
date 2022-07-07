import type { Asset, Post } from '~/graphql/graphcmsTypes'

interface WithThumbnail extends Asset {
  thumbnail: string
}

export interface PostWithThumbnail extends Post {
  coverImage: WithThumbnail
}

export type AspectRatio = { width: number; height: number } | string
