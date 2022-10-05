/* eslint-disable react/no-unknown-property */
import { useLoader } from '@react-three/fiber'
// FIX: should be able to import from node_modules
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { GLTFLoader } from '../blender-modules/GLTFLoader'
import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

export default function ThreeScene({
  glbFileUrl,
  bgColour,
}: {
  glbFileUrl: string
  bgColour: string
}) {
  const gltf: GLTF = useLoader(GLTFLoader, glbFileUrl)
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
