// src/components/ThreeScene.tsx
'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'

export default function ThreeScene() {
  return (
    <Canvas style={{ height: 400, borderRadius: '12px' }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} />
      <Sphere args={[1, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial color="#0ca6e9" distort={0.3} speed={2} />
      </Sphere>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}



