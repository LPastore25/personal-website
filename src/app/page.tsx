'use client'

import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Link,
  Button,
  Icon,
  useColorModeValue,
  SimpleGrid,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaLinkedin } from 'react-icons/fa'
import Starfield from '../components/Starfield'
import BackgroundWrapper from '../components/BackgroundWrapper'
import { workItems } from '../data/workItems'
import Header from '../components/Header'

const MotionBox = motion(Box)


const sections = [
  { id: 'projects', title: 'Projects', bg: 'rgba(255, 255, 255, 0.03)', color: 'white' },
  { id: 'education', title: 'Education', bg: 'transparent', color: 'white' },
  { id: 'contact', title: 'Contact', bg: 'rgba(255, 255, 255, 0.03)', color: 'white' },
]

export default function Home() {
  const bg = useColorModeValue('gray.50', 'gray.900')
  const color = useColorModeValue('gray.800', 'gray.100')

  return (
    <BackgroundWrapper>
      <Header />
      <Starfield />        
      {/* HERO SECTION */}
      <VStack id="hero" minH="100vh" spacing={10} justify="center" align="center">
        <Box
          boxSize={80}
          borderRadius="full"
          overflow="hidden"
          border="3px solid white"
          boxShadow="0 0 30px rgba(255, 255, 255, 0.05)"
          animation="float 6s ease-in-out infinite"
          sx={{
            '@keyframes float': {
              '0%, 100%': { transform: 'translateY(-10px)' },
              '50%': { transform: 'translateY(-5px)' },
            },
          }}
        >
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQFyQEB0vBa8Sw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718883759803?e=1753315200&v=beta&t=2CvKBTIuWoZ4_0V5fKPmFVRZB22e4ssVNGLQY0i40cU"
            alt="Luke Pastore"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>


        <MotionBox
          textAlign="center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          
          <Heading fontSize={['3xl', '5xl']} fontWeight="extrabold" lineHeight="1.2">
            Luke Pastore
          </Heading>

          <Text fontSize="xl" mt={4} color="gray.500">
            CS + Psychology @ CWRU | Digital Strategy @ KeyBank | 3D Web + UX Enthusiast
          </Text>

          <HStack justify="center" mt={6} spacing={4}>
            <Link href="https://www.linkedin.com/in/luke-pastore-1890391a3" isExternal>
              <Button
                colorScheme="brand"
                variant="solid"
                leftIcon={<Icon as={FaLinkedin} boxSize={5} />}
              >
                LinkedIn
              </Button>
            </Link>
            <Link href="#work">
              <Button variant="outline" colorScheme="brand">
                View Work
              </Button>
            </Link>
          </HStack>
        </MotionBox>

        {/* Optional 3D Canvas Placeholder */}
        <MotionBox
          w="full"
          maxW="800px"
          h={['300px', '500px']}
          rounded="lg"
          overflow="hidden"
          shadow="xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Box
            bg="gray.200"
            h="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize="lg" color="gray.500">
              [3D scene or canvas]
            </Text>
          </Box>
        </MotionBox>
      </VStack>


      {/* Template SECTION */}
      {sections.map((section, index) => (
        <Box
          as="section"
          key={index}
          id={section.id}
          w="full"
          h="100vh"
          bg={section.bg}
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          scrollSnapAlign="start"
        >
          <Text fontSize="5xl" fontWeight="bold" color={section.color} opacity={0.8}>
            {section.title}
          </Text>
        </Box>
      ))}


      {/* WORK SECTION */}
      <Box as="section" id="experience" py={[16, 24]} maxW="6xl" mx="auto">
        <Heading fontSize="5xl" fontWeight="bold" color="white" opacity={0.8} mb={10} textAlign="center">
          Work & Experience
        </Heading>

        <SimpleGrid columns={[1, null, 2]} spacing={10}>
          {workItems.map((item, index) => (
            <MotionBox
              key={index}
              p={6}
              rounded="md"
              shadow="xl"
              bg={useColorModeValue('white', 'gray.800')}
              border="1px solid"
              borderColor={useColorModeValue('gray.200', 'gray.700')}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Heading size="md" mb={2}>
                {item.title}
              </Heading>
              <Text mb={3} color="gray.500">
                {item.description}
              </Text>
              <HStack spacing={2} flexWrap="wrap">
                {item.tags.map((tag, i) => (
                  <Box
                    key={i}
                    bg="brand.100"
                    color="brand.700"
                    fontSize="sm"
                    px={2}
                    py={1}
                    rounded="md"
                  >
                    {tag}
                  </Box>
                ))}
              </HStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Box>
    </BackgroundWrapper>
  )
}
