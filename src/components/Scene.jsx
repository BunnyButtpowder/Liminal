import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Center } from '@react-three/drei'
import { OldTv } from './OldTv'

const isMobile = window.matchMedia('(max-width: 768px)').matches

export function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, isMobile ? 22 : 13], fov: 50 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Center>
          <OldTv scale={0.01} />
        </Center>
        <Environment preset="studio" />
      </Suspense>
      <OrbitControls makeDefault />
    </Canvas>
  )
}
