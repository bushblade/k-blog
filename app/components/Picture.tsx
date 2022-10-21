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
  blurUp?: boolean
  smallSrc: string
  largeSrc: string
  alt: string | undefined
  className?: string
  aspectRatio: AspectRatio
}

/**
 * Progressively load an image with blur up effect
 *
 * @param props.blurUp - should the image use a css filter to blur while loading
 * defaults to true. If you're noticing performance issues then disabling blurUp
 * may help.
 * @param props.smallSrc - the start image src should be a tiny image i.e. 16px by 9px
 * @param props.largSrc - the final image to transition to
 * @param props.alt - the alt attribute to pass to the '<img>'
 * @param props.className - any classes you want to apply to the image
 * @param props.aspectRatio - the desired aspect ratio of the image
 *
 */

export default function Picture({
  blurUp = true,
  smallSrc,
  largeSrc,
  alt,
  className,
  aspectRatio = '16/9',
}: PictureProps) {
  const [src, { blur }] = useProgressiveImg(smallSrc, largeSrc)

  let aspectWidth: number
  let aspectHeight: number

  if (typeof aspectRatio === 'string') {
    const ratios = aspectRatio.split('/').map((str) => parseInt(str))
    aspectWidth = ratios[0]
    aspectHeight = ratios[1]
  } else {
    aspectWidth = aspectRatio.width
    aspectHeight = aspectRatio.height
  }

  return (
    <figure
      style={{
        aspectRatio: `${aspectWidth}/${aspectHeight}`,
        maxHeight: '80vh',
        margin: 'auto',
      }}
      className={blur && blurUp ? 'animate-pulse' : ''}
    >
      <img
        loading='lazy'
        onContextMenu={(event) => event.preventDefault()}
        src={src}
        style={{
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          width: '100%',
          filter: blur && blurUp ? 'blur(10px)' : 'none',
          transition: blur && blurUp ? 'none' : 'filter 0.2s ease-out',
          objectFit: 'cover',
          overflow: 'hidden',
        }}
        alt={blur ? '' : alt}
        className={className}
      />
    </figure>
  )
}
