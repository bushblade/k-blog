/* eslint-disable react/no-unknown-property */
import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useRef, useState } from 'react'
import type { Mesh } from 'three'

export default function ThreeScene({
  glbFileUrl,
  bgColour,
}: {
  glbFileUrl: string
  bgColour: string
}) {
  const [dragging, setDragging] = useState(false)
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
        onPointerDown={() => setDragging(true)}
        onPointerUp={() => setDragging(false)}
      >
        <Suspense fallback={null}>
          <MyMesh glbFileUrl={glbFileUrl} dragging={dragging} />
          <OrbitControls />
          <Environment preset='sunset' background={false} />
        </Suspense>
      </Canvas>
    </div>
  )
}

function MyMesh({
  glbFileUrl,
  dragging,
}: {
  glbFileUrl: string
  dragging: boolean
}) {
  const gltf = useGLTF(glbFileUrl)
  const myMesh = useRef<Mesh>()
  useFrame(() => {
    if (myMesh.current && !dragging) myMesh.current.rotation.y += 0.01
  })
  return <primitive object={gltf.scene} scale={0.8} ref={myMesh} />
}
