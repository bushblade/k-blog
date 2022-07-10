import type { Asset, Post } from '~/graphql/graphcmsTypes'

interface WithSmallPreview extends Asset {
  small: string
}

export interface PostWithSmallPreview extends Post {
  previewImage: WithSmallPreview
}

export interface PostWithSmallCoverImage extends Post {
  coverImage: WithSmallPreview
}

export type AspectRatio = { width: number; height: number } | string
