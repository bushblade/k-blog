import { useState, useEffect } from 'react'

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

export default function Picture({
  smallSrc,
  largeSrc,
  alt,
  className,
  ...rest
}: {
  smallSrc: string
  largeSrc: string
  alt: string
  className?: string
}) {
  const [src, { blur }] = useProgressiveImg(smallSrc, largeSrc)
  return (
    <img
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
  )
}
