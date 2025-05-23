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

const MotionBox = motion(Box)

const workItems = [
  {
    title: 'Digital Analyst Intern – KeyBank',
    description:
      'Built a business case for a native mobile app including cost-benefit analysis, cross-team collaboration, and high-level competitor analysis. Contributed to consumer digital strategy and product insights.',
    tags: ['Mobile UX', 'Competitive Research', 'Digital Strategy'],
  },
  {
    title: 'Business Intelligence Developer – Pastore Solutions LLC',
    description:
      'Created automated pricing tools and dashboards for a self-storage company across 18 facilities using Domo ETLs and Beast Mode. Integrated competitor and facility data into a unified reporting system.',
    tags: ['Data Visualization', 'Domo', 'ETL Automation'],
  },
  {
    title: 'Research Assistant – Weatherhead & Cleveland Clinic',
    description:
      'Analyzed survey and interview data from billion-dollar healthcare construction projects. Led data anonymization, AI tool integration, and cross-institutional synthesis with BI Norwegian Business School.',
    tags: ['Organizational Research', 'AI Integration', 'Qualitative Analysis'],
  },
  {
    title: 'President – Interfraternal Council @ CWRU',
    description:
      'Led governance of 16 fraternities, mediated conflict, managed relations with university leadership, and facilitated interchapter collaboration and events.',
    tags: ['Leadership', 'Policy Mediation', 'Community Building'],
  },
  {
    title: 'Camp Counselor – Camp Leslie',
    description:
      'Supervised a team of 9 and managed 96 campers over 4 years. Developed leadership curricula and conflict resolution training for staff and youth.',
    tags: ['Team Leadership', 'Youth Development', 'Training Facilitation'],
  },
  {
    title: 'Retail Cashier – Marshalls LLC',
    description:
      'Handled fast-paced retail operations, returns, and customer service. Built soft skills in communication, multitasking, and professionalism.',
    tags: ['Customer Service', 'Point-of-Sale', 'Retail Operations'],
  },
  {
    title: 'Sports Referee – USOfficials',
    description:
      'Officiated youth soccer games as center and assistant referee. Maintained calm authority, rule enforcement, and player safety across age groups.',
    tags: ['Decision Making', 'Youth Sports', 'Communication'],
  },
]

const sections = [
  { title: 'About Me', bg: 'transparent', color: 'white' },
  { title: 'Projects', bg: 'rgba(255, 255, 255, 0.03)', color: 'white' },
  { title: 'Skills', bg: 'transparent', color: 'white' },
  { title: 'Contact', bg: 'rgba(255, 255, 255, 0.03)', color: 'white' },
]

export default function Home() {
  const bg = useColorModeValue('gray.50', 'gray.900')
  const color = useColorModeValue('gray.800', 'gray.100')

  return (
    <BackgroundWrapper>
      <Starfield />        
      {/* HERO SECTION */}
      <VStack minH="100vh" spacing={10} justify="center" align="center">
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


      {/* PROJECTS SECTION */}
      {sections.map((section, index) => (
      <Box
        key={index}
        w="full"
        h="100vh"
        bg={section.bg}
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Text fontSize="5xl" fontWeight="bold" color={section.color} opacity={0.8}>
          {section.title}
        </Text>
      </Box>
    ))}

      {/* WORK SECTION */}
      <Box as="section" id="work" py={[16, 24]} maxW="6xl" mx="auto">
        <Heading fontSize="4xl" mb={10} textAlign="center">
          Work & Experience
        </Heading>

        <SimpleGrid columns={[1, null, 1]} spacing={10}>
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
