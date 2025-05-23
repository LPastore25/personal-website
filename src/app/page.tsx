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
  Image
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaLinkedin } from 'react-icons/fa'
import Starfield from '../components/Starfield'
import BackgroundWrapper from '../components/BackgroundWrapper'
import { workData } from '../data/WorkData'
import { csProjects } from '../data/ProjectData'
import { educationData } from '../data/EducationData'
import Header from '../components/Header'
import sjpLogo from '../images/sjp.jpg'

const MotionBox = motion(Box)


const sections = [
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
      <VStack
        id="hero"
        minH="100vh"
        spacing={10}
        justify="center"
        align="center"
        textAlign="center"
        px={6}
      >
        {/* Floating Profile Image */}
        <Box
          boxSize={['150px', '250px']}
          borderRadius="full"
          overflow="hidden"
          border="3px solid white"
          boxShadow="0 0 30px rgba(255, 255, 255, 0.08)"
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

        {/* Name & Bio */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heading fontSize={['3xl', '5xl']} fontWeight="extrabold" lineHeight="1.2" color="white">
            Luke Pastore
          </Heading>

          <Text fontSize="xl" mt={4} color="gray.400" maxW="2xl">
            CS + Psychology @ CWRU · Digital Strategy @ KeyBank · 3D Web & UX Enthusiast
          </Text>

          {/* Buttons */}
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
          </HStack>
        </MotionBox>

        
        
      </VStack>

      {/* PROJECTS SECTION */}
      <Box as="section" id="projects" py={[16, 24]} maxW="6xl" mx="auto">
        <Heading
          fontSize="5xl"
          fontWeight="bold"
          color="white"
          opacity={0.8}
          mb={10}
          textAlign="center"
        >
          Projects
        </Heading>

        <SimpleGrid columns={[1, null, 2]} spacing={10}>
          {csProjects.map((project, index) => (
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
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Heading size="md" mb={2}>
                {project.title}
              </Heading>
              <Text mb={3} color="gray.500">
                {project.description}
              </Text>
              <HStack spacing={2} flexWrap="wrap">
                {project.tags.map((tag, tagIndex) => (
                  <Box
                    key={tagIndex}
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


      


      {/* WORK SECTION */}
      <Box as="section" id="work" py={16} maxW="4xl" mx="auto">
        <Heading
          fontSize="5xl"
          fontWeight="bold"
          color="white"
          opacity={0.8}
          mb={10}
          textAlign="center"
        >
          Work Experience
        </Heading>

        {workData.map((job, index) => (
          <Box
            key={index}
            p={6}
            mb={8}
            borderWidth="1px"
            borderColor="whiteAlpha.200"
            borderRadius="md"
            bg={useColorModeValue('whiteAlpha.50', 'gray.800')}
            shadow="sm"
          >
            <Box mb={2}>
              <Text fontWeight="bold" fontSize="lg" color="white">
                {job.company}
              </Text>
              <Text fontSize="sm" color="gray.400">
                {job.title} &nbsp;|&nbsp; {job.location} &nbsp;|&nbsp; {job.dates}
              </Text>
            </Box>

            <VStack spacing={2} align="start" pl={4}>
              {job.points.map((point, i) => (
                <Text key={i} fontSize="sm" color="gray.300">
                  • {point}
                </Text>
              ))}
            </VStack>
          </Box>
        ))}
      </Box>

      {/* EDUCATION SECTION */}
      <Box as="section" id="education" py={[16, 24]} maxW="6xl" mx="auto">
        <Heading
          fontSize="5xl"
          fontWeight="bold"
          color="white"
          opacity={0.8}
          mb={10}
          textAlign="center"
        >
          Education
        </Heading>
        
        <SimpleGrid
          columns={[1, null, 2]}
          spacing={10}
          alignItems="stretch"
          gridTemplateColumns={['1fr', null, '3fr 1fr']} // ← THIS is key
        >
          {/* Left column: education entries */}
          <VStack spacing={6} align="stretch">
            {educationData.map((edu, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                p={6}
                bg={useColorModeValue('whiteAlpha.100', 'gray.800')}
                borderRadius="md"
                shadow="md"
              >
                <HStack spacing={6} align="center">
                  <Image
                    src={edu.logo}
                    alt={edu.alt}
                    boxSize="80px"
                    objectFit="contain"
                    borderRadius="md"
                  />
                  <Box>
                    <Heading size="md" color="white">
                      {edu.name}
                    </Heading>
                    <Text color="gray.400" mt={1}>
                      {edu.dates}
                    </Text>
                    {edu.details.map((detail, idx) => (
                      <Text key={idx} color="gray.300" fontSize="sm">
                        {detail}
                      </Text>
                    ))}
                  </Box>
                </HStack>
              </MotionBox>
            ))}
          </VStack>

          {/* Right column: classes box */}
          <Box
            p={6}
            bg={useColorModeValue('whiteAlpha.100', 'gray.800')}
            borderRadius="md"
            shadow="md"
            h="100%"
          >
            <Heading size="md" color="white" mb={4}>
              Classes of Interest
            </Heading>

            
              <VStack spacing={2} align="start">
                <Text color="gray.400" mt={1} fontWeight="semibold">
                  Computer Science
                </Text>
                {[
                  'Intro to Artificial Intelligence',
                  'Programming Language Concepts',
                  'Full Stack Web Development',
                  'Senior Capstone',
                ].map((course, i) => (
                  <Text key={i} fontSize="sm" color="gray.300">
                    {course}
                  </Text>
                ))}
              </VStack>

              <Box h={6} />

              <VStack spacing={2} align="start">
                <Text color="gray.400" mt={1} fontWeight="semibold">
                  Business / Psychology
                </Text>
                {[
                  'Leading Organizations',
                  'Leading People',
                  'High-Functioning Teams',
                  'Managing Negotiations',
                  'Consumer Psychology',
                ].map((course, i) => (
                  <Text key={i} fontSize="sm" color="gray.300">
                    {course}
                  </Text>
                ))}
              </VStack>
          </Box>
        </SimpleGrid>
      </Box>

      {/* CONTACT SECTION */}
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

    </BackgroundWrapper>
  )
}
