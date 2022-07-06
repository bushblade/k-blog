import { useState, useEffect } from 'react'
import { AspectRatio } from '~/types'

type UseProgressiveImgReturn = [string, { blur: boolean }]

const useProgressiveImg = (
  lowQualitySrc: string,
  highQualitySrc: string
): UseProgressiveImgReturn => {
  const [src, setSrc] = useState(lowQualitySrc)

  useEffect(() => {
    const img = new Image()
    img.src = highQualitySrc
    img.onload = () => {
      setSrc(highQualitySrc)
    }
  }, [lowQualitySrc, highQualitySrc])
  return [src, { blur: src === lowQualitySrc }]
}

// TODO: calcualte height based on aspect ratio
/**
 * Progressively load an image with blur up effect
 * @param smallSrc - A small source url for quick loading
 * @param largeSrc - the url of the final large image
 * @param alt - passed to the <img> alt attribute
 * @param className - any classes you want to pass to the image
 * @param aspectRatio - desited aspect ratio, defaults to 16:9 should be an object of { width: number; height: number} or stirng '16:9'
 */
export default function Picture({
  smallSrc,
  largeSrc,
  alt,
  className,
  aspectRatio = { width: 16, height: 9 },
  ...rest
}: {
  smallSrc: string
  largeSrc: string
  alt: string
  className?: string
  aspectRatio: AspectRatio | string
}) {
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
        {...rest}
      />
    </figure>
  )
}
