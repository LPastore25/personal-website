// src/components/Starfield.tsx
'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Box } from '@chakra-ui/react'

const STAR_COUNT = 1000

function Stars() {
  const ref = useRef<THREE.Points>(null!)
  const positions = useMemo(() => {
    const arr = new Float32Array(STAR_COUNT * 3)
    for (let i = 0; i < STAR_COUNT * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 100
    }
    return arr
  }, [])

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geo
  }, [positions])

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()
    if (ref.current) {
      ref.current.rotation.y = time * 0.01
      ref.current.rotation.x = time * 0.005
    }
  })

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        color="white"
        size={0.3}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}


export default function Starfield() {
  return (
    <Box position="fixed" top="0" left="0" w="100%" h="100%" zIndex={-1}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </Box>
  )
}
