'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useRef, useMemo, useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { useThree } from '@react-three/fiber'

function CameraZoom() {
  const { camera } = useThree()
  const targetZ = 1
  const initialZ = 700
  const speed = 0.02

  useEffect(() => {
    camera.position.z = initialZ
  }, [camera])

  useFrame(() => {
    if (camera.position.z > targetZ) {
      camera.position.z -= (camera.position.z - targetZ) * speed
    } else {
      camera.position.z = targetZ
    }
  })

  return null
}

function StarsLayer({
  count,
  size,
  color,
  radius,
  scrollMultiplier = 0.0005,
}: {
  count: number
  size: number
  color: string
  radius: number
  scrollMultiplier?: number
}) {
  const ref = useRef<THREE.Points>(null!)
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * radius
    }
    return arr
  }, [count, radius])

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geo
  }, [positions])

  const scrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (ref.current) {
      ref.current.rotation.y = t * 0.01 * (size / 0.3)
      ref.current.rotation.x = t * 0.005 * (size / 0.3)
      ref.current.position.z = -150 - scrollY.current * scrollMultiplier
    }
  })

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial color={color} size={size} sizeAttenuation />
    </points>
  )
}

export default function Starfield() {
  return (
  <Box position="fixed" top="0" left="0" w="100vw" h="100vh" zIndex={-1}>
    {/* Gradient glow layer */}
    <Box
      position="absolute"
      top={0}
      right={0}
      w="100vw"
      h="100vh"
      pointerEvents="none"
      zIndex={1}
      background="radial-gradient(
        ellipse at 80% 10%,
        rgba(255, 228, 199, 0.08),
        rgba(255, 228, 199, 0.02) 40%,
        transparent 60%
      )"
      style={{ maskImage: 'radial-gradient(ellipse at 80% 10%, black 30%, transparent 100%)' }}
    />

    <Canvas camera={{ position: [0, 0, 1] }} gl={{ antialias: true }} style={{ background: '#090b10' }}>
      <CameraZoom />
      <fog attach="fog" args={['#090b10', 100, 160]} />
      <directionalLight intensity={0.4} position={[10, 10, 10]} color="#6ea8d6" />
      <ambientLight intensity={0.7} color="#ccccff" />
      
      <StarsLayer count={200} size={0.32} color="#80caff" radius={180} scrollMultiplier={0.014} />
      <StarsLayer count={250} size={0.26} color="#99ddff" radius={220} scrollMultiplier={0.012} />
      <StarsLayer count={350} size={0.2} color="#cceaff" radius={260} scrollMultiplier={0.010} />
      <StarsLayer count={400} size={0.15} color="#eaf6ff" radius={320} scrollMultiplier={0.008} />
      <StarsLayer count={1000} size={0.12} color="#ffffff" radius={370} scrollMultiplier={0.006} />
      <StarsLayer count={1200} size={0.1} color="#a3c8dc" radius={480} scrollMultiplier={0.004} />
      <StarsLayer count={1600} size={0.07} color="#4a6b82" radius={650} scrollMultiplier={0.002} />
      
      <Bloom luminanceThreshold={0.9} luminanceSmoothing={0.9} intensity={1.5} />
    </Canvas>
  </Box>
)
}
