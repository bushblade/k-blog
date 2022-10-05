/* eslint-disable react/no-unknown-property */
import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

export default function ThreeScene({
  glbFileUrl,
  bgColour,
}: {
  glbFileUrl: string
  bgColour: string
}) {
  const gltf = useGLTF(glbFileUrl)
  return (
    <div
      id='canvas-container'
      className='hover:cursor-grab active:cursor-grabbing'
    >
      <Canvas
        style={{
          width: '100%',
          aspectRatio: '16/9',
          backgroundColor: bgColour,
        }}
      >
        <Suspense fallback={null}>
          <primitive object={gltf.scene} scale={0.8} />
          <OrbitControls />
          <Environment preset='sunset' background={false} />
        </Suspense>
      </Canvas>
    </div>
  )
}
