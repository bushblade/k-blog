import { RichText } from '@graphcms/rich-text-react-renderer'

import { ClientOnly } from 'remix-utils/client-only'
import * as React from 'react'
import Picture from '~/components/Picture'

import { nearestAspectRatio } from '~/utils'

import type { EmbedProps } from '@graphcms/rich-text-types'
import type {
  BlenderModel,
  PostContentRichText,
  Video,
} from '~/graphql/graphcmsTypes'

const ThreeScene = React.lazy(() => import('~/components/ThreeScene'))

export function RichTextRenderer({
  content,
}: {
  content: PostContentRichText
}) {
  return (
    <RichText
      content={content.json}
      references={content.references}
      renderers={{
        h1: ({ children }) => (
          <h1 className='text-5xl py-2 font-bold'>{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className='text-4xl py-2 font-bold'>{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className='text-3xl py-2 font-bold'>{children}</h3>
        ),
        p: ({ children }) => <p className='py-2'>{children}</p>,
        ol: ({ children }) => (
          <ol className='list-decimal list-inside'>{children}</ol>
        ),
        ul: ({ children }) => (
          <ul className='list-disc list-inside'>{children}</ul>
        ),
        blockquote: ({ children }) => (
          <blockquote className='border-l-4 border-info px-2 py-3 my-3 text-info-content bg-info rounded-box bg-opacity-20 border-opacity-20'>
            {children}
          </blockquote>
        ),
        code_block: ({ children }) => {
          return (
            <div className='mockup-code rounded-box font-mono'>
              <pre className='no-before pl-5'>{children}</pre>
            </div>
          )
        },
        a: ({ children, openInNewTab, title, ...rest }) => (
          <a
            target={openInNewTab ? '_blank' : '_self'}
            {...rest}
            className={`link link-hover link-primary font-bold ${
              title ? 'tooltip tooltip-primary' : null
            }`}
            data-tip={title}
          >
            {children}
          </a>
        ),
        img: ({ title, altText, handle, width, height }) => (
          <div style={{ maxWidth: '800px' }} className='mx-auto my-3'>
            {width && height ? (
              <Picture
                // NOTE: seems I can use image.handle to get image id
                smallSrc={`https://media.graphassets.com/resize=fit:crop,width:16/output=format:webp/${handle}`}
                largeSrc={`https://media.graphassets.com/resize=fit:crop,${
                  width > height ? 'width:800' : 'height:800'
                }/output=format:webp/${handle}`}
                alt={altText || title}
                className='m-auto rounded-box max-w-full shadow-xl shadow-base-300'
                aspectRatio={nearestAspectRatio(width, height)}
              />
            ) : (
              <img
                src={`https://media.graphassets.com/resize=fit:crop,width:800/output=format:webp/${handle}`}
                alt={altText || title}
              />
            )}
          </div>
        ),
        embed: {
          Video: ({ nodeId }: EmbedProps<Video>) => {
            const video = content.references.find((ref) => ref.id === nodeId)
            if (!video)
              return (
                <div className='alert alert-error shadow-xl'>
                  <p>There should be a video here but something went wrong!</p>
                </div>
              )
            const foundVideo = video as Video
            const videoId = foundVideo.youTubeShareUrl.split('/').reverse()[0]
            return (
              <div className='max-w-[800px] mx-auto my-3'>
                <div className='w-full aspect-video'>
                  <iframe
                    loading='lazy'
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title='YouTube video player'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                    className='m-auto rounded-box w-full h-full'
                  ></iframe>
                </div>
              </div>
            )
          },
          BlenderModel: ({ nodeId }: EmbedProps<BlenderModel>) => {
            const bModel = content.references.find((ref) => ref.id === nodeId)
            const { glbFile, backgroundColour, title } = bModel as BlenderModel
            return (
              <ClientOnly
                fallback={
                  <div
                    className='animate-pulse'
                    style={{
                      backgroundColor: backgroundColour.css,
                      width: '100%',
                      aspectRatio: '16/9',
                    }}
                  >
                    <div className='text-center h-full w-full flex items-center justify-center'>
                      <h3 className='text-lg h-12'>Loading {title}...</h3>
                    </div>
                  </div>
                }
              >
                {() => (
                  <ThreeScene
                    glbFileUrl={glbFile.url}
                    bgColour={backgroundColour.css}
                  />
                )}
              </ClientOnly>
            )
          },
        },
      }}
    />
  )
}
