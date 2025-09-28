import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  HStack,
  Tag,
  Image
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Masonry from 'react-masonry-css'
import { csProjects } from '../data/ProjectData'

const MotionBox = motion(Box)

// Masonry responsive breakpoints
const masonryBreakpoints = {
  default: 3,
  1100: 2,
  700: 1,
}

export default function ProjectsMatrix() {
  // Layouts for original bento
  const layoutMap: Record<
    string,
    { colSpan?: number; rowSpan?: number; height?: string }
  > = {
    'Outfit Recommendation Mobile App': { rowSpan: 2, colSpan: 1, height: '420px' },
    '8-Puzzle AI Solver': { rowSpan: 1, colSpan: 1, height: '200px' },
    'Racket-Based Language Interpreter': { rowSpan: 1, colSpan: 1, height: '200px' },
    'Domo Dashboard & ETL Automation System': { rowSpan: 1, colSpan: 2, height: '240px' },
    'De-identification Tool for Research Data': { rowSpan: 1, colSpan: 2, height: '240px' },
    'City Livability Comparison Tool': { rowSpan: 1, colSpan: 1, height: '200px' },
    'Mac Mini Laptop Conversion': { rowSpan: 1, colSpan: 1, height: '200px' },
    'Food Tracking App': { rowSpan: 1, colSpan: 1, height: '200px' },
    'Storage Unit Finder App': { rowSpan: 1, colSpan: 1, height: '200px' },
    'Custom Email Client': { rowSpan: 1, colSpan: 1, height: '200px' },
    'Automated Job Posting Finder': { rowSpan: 1, colSpan: 1, height: '200px' },
    'Apartment Finder Tool': { rowSpan: 1, colSpan: 1, height: '200px' },
    'Cleveland Housing Analytics Project': { rowSpan: 1, colSpan: 2, height: '240px' },
  }

  const orderedTitles = [
    'Outfit Recommendation Mobile App',
    '8-Puzzle AI Solver',
    'Racket-Based Language Interpreter',
    'Domo Dashboard & ETL Automation System',
    'De-identification Tool for Research Data',
    'City Livability Comparison Tool',
    'Mac Mini Laptop Conversion',
    'Food Tracking App',
    'Storage Unit Finder App',
    'Custom Email Client',
    'Automated Job Posting Finder',
    'Apartment Finder Tool',
    'Cleveland Housing Analytics Project',
  ]

  return (
    <Box as="section" id="projects" py={[16, 24]} maxW="6xl" mx="auto">
      <Heading
        fontSize="5xl"
        fontWeight="bold"
        color="white"
        opacity={0.9}
        mb={10}
        textAlign="center"
      >
        Projects (3 Layouts)
      </Heading>

      {/* ---------------- OPTION 1: ORIGINAL BENTO ---------------- */}
      <Heading size="lg" color="white" mb={4}>
        Option 1: Original Bento Box
      </Heading>
      <MotionBox p={6} borderRadius="md" shadow="md" mb={16}>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {orderedTitles.map((title) => {
            const project = csProjects.find((p) => p.title === title)
            const layout = layoutMap[title]
            if (!project || !layout) return null
            return (
              <GridItem
                key={title}
                colSpan={layout.colSpan}
                rowSpan={layout.rowSpan}
                minH={layout.height}
                p={0}
                borderRadius="md"
                boxShadow="lg"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                overflow="hidden"
                position="relative"
                role="group"
                bg="gray.800"
              >
                <Box position="relative" height="100%">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      objectFit="cover"
                      w="100%"
                      h="100%"
                    />
                  ) : (
                    <Box
                      w="100%"
                      h="100%"
                      bg="white"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Text color="black" fontWeight="bold">
                        {project.title}
                      </Text>
                    </Box>
                  )}
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    w="100%"
                    h="100%"
                    bg="blackAlpha.800"
                    opacity={0}
                    _groupHover={{ opacity: 1 }}
                    transition="opacity 0.3s ease"
                    p={5}
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                  >
                    <Box>
                      <Heading size="md" mb={2} color="whiteAlpha.900">
                        {project.title}
                      </Heading>
                      <Text color="gray.300" mb={3}>
                        {project.description}
                      </Text>
                    </Box>
                    <HStack spacing={2} wrap="wrap">
                      {project.tags.map((tag, i) => (
                        <Tag key={i} colorScheme="blue">
                          {tag}
                        </Tag>
                      ))}
                    </HStack>
                  </Box>
                </Box>
              </GridItem>
            )
          })}
        </Grid>
      </MotionBox>

     {/* ---------------- OPTION 2: TRUE MASONRY WITH HOVER OVERLAY ---------------- */}
<Heading size="lg" color="white" mb={4}>
  Option 2: Masonry / Pinterest Style (Hover Overlay)
</Heading>
<MotionBox p={6} borderRadius="md" shadow="md" mb={16}>
  <Masonry
    breakpointCols={masonryBreakpoints}
    className="masonry-grid"
    columnClassName="masonry-grid_column"
  >
    {csProjects.map((project) => (
      <Box
        key={project.title}
        borderRadius="md"
        boxShadow="lg"
        overflow="hidden"
        role="group"
        bg="gray.800"
        mb={6}
      >
        <Box position="relative" height="100%">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              w="100%"
              objectFit="cover"
            />
          ) : (
            <Box
              w="100%"
              h="180px"
              bg="white"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text color="black" fontWeight="bold">
                {project.title}
              </Text>
            </Box>
          )}
          {/* Hover Overlay */}
          <Box
            position="absolute"
            top={0}
            left={0}
            w="100%"
            h="100%"
            bg="blackAlpha.800"
            opacity={0}
            _groupHover={{ opacity: 1 }}
            transition="opacity 0.3s ease"
            p={5}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
              <Heading size="md" mb={2} color="whiteAlpha.900">
                {project.title}
              </Heading>
              <Text color="gray.300" mb={3}>
                {project.description}
              </Text>
            </Box>
            <HStack spacing={2} wrap="wrap">
              {project.tags.map((tag, i) => (
                <Tag key={i} colorScheme="blue">
                  {tag}
                </Tag>
              ))}
            </HStack>
          </Box>
        </Box>
      </Box>
    ))}
  </Masonry>
</MotionBox>


      {/* ---------------- OPTION 3: HORIZONTAL CAROUSEL ---------------- */}
      <Heading size="lg" color="white" mb={4}>
        Option 3: Horizontal Carousel
      </Heading>
      <MotionBox p={6} borderRadius="md" shadow="md" mb={16} overflowX="auto">
        <HStack spacing={6} minW="max-content">
          {csProjects.map((project) => (
            <Box
              key={project.title}
              w="300px"
              borderRadius="md"
              boxShadow="lg"
              overflow="hidden"
              role="group"
              flexShrink={0}
              bg="gray.800"
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  w="100%"
                  h="180px"
                  objectFit="cover"
                />
              ) : (
                <Box
                  w="100%"
                  h="180px"
                  bg="white"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text color="black" fontWeight="bold">
                    {project.title}
                  </Text>
                </Box>
              )}
              <Box p={4}>
                <Heading size="md" color="whiteAlpha.900">
                  {project.title}
                </Heading>
                <Text mt={2} color="gray.300" noOfLines={3}>
                  {project.description}
                </Text>
                <HStack mt={3} spacing={2} wrap="wrap">
                  {project.tags.map((tag, i) => (
                    <Tag key={i} colorScheme="blue">
                      {tag}
                    </Tag>
                  ))}
                </HStack>
              </Box>
            </Box>
          ))}
        </HStack>
      </MotionBox>
    </Box>
  )
}
