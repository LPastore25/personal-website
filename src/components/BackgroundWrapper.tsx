'use client'

import { Box } from '@chakra-ui/react'

export default function BackgroundWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Box minH="100vh" w="full" position="relative" zIndex={0}>
      {children}
    </Box>
  )
}
