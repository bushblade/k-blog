import { useState, useEffect } from 'react'
import type { AspectRatio } from '~/types'

type UseProgressiveImgReturn = [string, { blur: boolean }]

const useProgressiveImg = (
  lowQualitySrc: string,
  highQualitySrc: string
): UseProgressiveImgReturn => {
  const [src, setSrc] = useState(lowQualitySrc)

  useEffect(() => {
    if (src === lowQualitySrc) {
      const img = new Image()
      img.onload = () => {
        if (img.complete) setSrc(highQualitySrc)
      }
      img.src = highQualitySrc
    }
  }, [lowQualitySrc, highQualitySrc, src])
  return [src, { blur: src === lowQualitySrc }]
}

interface PictureProps {
  smallSrc: string
  largeSrc: string
  alt: string
  className?: string
  aspectRatio: AspectRatio
}

/**
 * Progressively load an image with blur up effect
 *
 * @param props.smallSrc - the start image src should be a tiny image i.e. 16px by 9px
 * @param props.largSrc - the final image to transition to
 * @param props.alt - the alt attribute to pass to the '<img>'
 * @param props.className - any classes you want to apply to the image
 * @param props.aspectRatio - the desired aspect ratio of the image
 *
 */

export default function Picture({
  smallSrc,
  largeSrc,
  alt,
  className,
  aspectRatio = '16:9',
}: PictureProps) {
  const [src, { blur }] = useProgressiveImg(smallSrc, largeSrc)

  let aspectWidth: number
  let aspectHeight: number

  if (typeof aspectRatio === 'string') {
    const ratios = aspectRatio.split(':').map((str) => parseInt(str))
    aspectWidth = ratios[0]
    aspectHeight = ratios[1]
  } else {
    aspectWidth = aspectRatio.width
    aspectHeight = aspectRatio.height
  }

  return (
    <figure className={`aspect-w-${aspectWidth} aspect-h-${aspectHeight}`}>
      <img
        loading='lazy'
        src={src}
        style={{
          width: '100%',
          filter: blur ? 'blur(10px)' : 'none',
          transition: blur ? 'none' : 'filter 0.2s ease-out',
          objectFit: 'cover',
          overflow: 'hidden',
        }}
        alt={alt}
        className={className}
      />
    </figure>
  )
}
