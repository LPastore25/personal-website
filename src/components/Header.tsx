'use client'

import { HStack, Button, Box, Link as ChakraLink, Spacer, IconButton } from '@chakra-ui/react'
import { FaHome } from 'react-icons/fa'

const sections = [
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
]

export default function Header() {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      w="100%"
      zIndex={1000}
      px={6}
      py={3}
      bg="rgba(0, 0, 0, 0.5)"
      backdropFilter="blur(10px)"
      borderBottom="1px solid rgba(255, 255, 255, 0.05)"
    >
      <HStack spacing={4}>
        {/* Home button (left aligned) */}
        <ChakraLink href="#hero">
            <Box
                h="2rem" // set header height explicitly or inherit if you prefer
                w="3rem"
                display="flex"
                alignItems="center"
                justifyContent="center"
                _hover={{ bg: 'whiteAlpha.200', borderRadius: 'md' }}
            >
                <Box as={FaHome} color="white" boxSize="70%" />
            </Box>
            </ChakraLink>

        <Spacer />

        {/* Section buttons (right aligned) */}
        <HStack spacing={3}>
          {sections.map((section) => (
            <ChakraLink
              key={section.id}
              href={`#${section.id}`}
              _hover={{ textDecoration: 'none' }}
            >
              <Button
                variant="ghost"
                size="sm"
                color="white"
                _hover={{ bg: 'whiteAlpha.200' }}
              >
                {section.label}
              </Button>
            </ChakraLink>
          ))}
        </HStack>
      </HStack>
    </Box>
  )
}
