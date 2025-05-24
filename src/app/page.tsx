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
  Image,
  PopoverTrigger,
  Popover,
  PopoverContent,
  PopoverBody,
  FormControl,
  Textarea,
  FormLabel,
  Input
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaFileAlt, FaLinkedin } from 'react-icons/fa'
import Starfield from '../components/Starfield'
import BackgroundWrapper from '../components/BackgroundWrapper'
import { csProjects } from '../data/ProjectData'
import { educationData } from '../data/EducationData'
import Header from '../components/Header'
import Timeline from '../components/WorkTimeline'


const MotionBox = motion(Box)


const sections = [
  { id: 'contact', title: 'Contact', bg: 'rgba(255, 255, 255, 0.03)', color: 'white' },
]

export default function Home() {

  return (
    <BackgroundWrapper>
      <Header />
             
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
          w={['300px', '1000px']}
          h={['200px', '600px']}
          borderRadius="2xl"
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
          <Image
            src="/images/profile.png"
            alt="Luke Pastore at CWRU podium"
            w="100%"
            h="100%"
            objectFit="cover"
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
            CWRU Computer Science, Psychology | Minor in AI
          </Text>

          <Text fontSize="xl" mt={4} color="gray.400" maxW="2xl">
            Graduating August '25
          </Text>

          {/* Buttons */}
          <HStack justify="center" mt={6} spacing={4}>
            <Link href="https://www.linkedin.com/in/luke-pastore-1890391a3" isExternal>
              <Button
                colorScheme="brand"
                variant="solid"
                leftIcon={<Icon as={FaLinkedin} boxSize={5} />}
                _hover={{
                  transform: 'scale(1.05)',
                  transition: 'all 0.2s ease-in-out',
                }}
              >
                LinkedIn
              </Button>
            </Link>
          </HStack>
        </MotionBox>

        
        
      </VStack>

      {/* PROJECTS SECTION */}
      <Box w ='full' bg= 'rgba(255, 255, 255, 0.03)'>
        <Box as="section" id="projects" py={[16, 24]} maxW="6xl" mx="auto" >
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
                bg='white'
                border="1px solid"
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
      </Box>


      


      {/* WORK SECTION */}
      <Box as="section" id="experience" py={16} maxW="6xl" mx="auto">
        <Heading
          fontSize="5xl"
          fontWeight="bold"
          color="white"
          opacity={0.8}
          mb={16}
          textAlign="center"
        >
          Work & Experience
        </Heading>

        <Timeline />
      </Box>

      {/* EDUCATION SECTION */}
      <Box w ='full' bg= 'rgba(255, 255, 255, 0.03)'>
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
      </Box>
      

      {/* CONTACT SECTION */}
      <Box as="section" id="contact" py={16} maxW="xl" mx="auto">
        <Heading fontSize="4xl" mb={8} textAlign="center" color="white">
          Contact Me
        </Heading>
        <form action="https://formsubmit.co/f998ad7e6307bf629b2676d81e14faa8" method="POST">
          <VStack spacing={6}>
            <FormControl isRequired>
              <FormLabel color="white">Name</FormLabel>
              <Input name="name" placeholder="Your name" bg="white" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel color="white">Email</FormLabel>
              <Input type="email" name="email" placeholder="you@example.com" bg="white" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel color="white">Message</FormLabel>
              <Textarea name="message" placeholder="Your message..." bg="white" />
            </FormControl>
            <Input type="hidden" name="_captcha" value="false" />
            <Button type="submit" colorScheme="brand" w="full">
              Send Message
            </Button>
          </VStack>
        </form>
      </Box>
    <Starfield /> 

    {/* Floating Resume Button */}
    <Popover trigger="hover" placement="top">
      <PopoverTrigger>
        <Box
          as="a"
          href="/Luke-Pastore-Resume.pdf"
          target="_blank"
          position="fixed"
          bottom="24px"
          right="24px"
          w="4.5vw"
          h="4.5vw"
          maxW="80px"
          maxH="80px"
          borderRadius="full"
          bg="#2D2D2D"
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxShadow="lg"
          zIndex="1000"
          cursor="pointer"
          _hover={{
            transform: 'scale(1.1)',
            transition: 'transform 0.2s ease',
          }}
          sx={{
            animation: 'float 6s ease-in-out infinite',
            '@keyframes float': {
              '0%, 100%': { transform: 'translateY(-6px)' },
              '50%': { transform: 'translateY(0px)' },
            },
          }}
        >
          <Icon as={FaFileAlt} boxSize="36px" color="white" />
        </Box>
      </PopoverTrigger>
      <PopoverContent
        w="auto"
        maxW="250px"
        bg="whiteAlpha.100"
        border="1px solid"
        borderColor="whiteAlpha.300"
        borderRadius="md"
        boxShadow="xl"
        mr="10px"
      >
        <PopoverBody p={2}>
          <Link href="/Luke-Pastore-Resume.pdf" isExternal>
            <Image
              src="/images/resume-preview.jpg"
              alt="Resume Preview"
              width="100%"
              borderRadius="md"
              pointerEvents="none"
            />
          </Link>
        </PopoverBody>
      </PopoverContent>
    </Popover>
    </BackgroundWrapper>
    
  )
}
