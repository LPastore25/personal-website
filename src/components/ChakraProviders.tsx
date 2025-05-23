'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import theme from '../theme'

export default function ChakraProviders({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence exitBeforeEnter>
        {children}
      </AnimatePresence>
    </ChakraProvider>
  )
}
