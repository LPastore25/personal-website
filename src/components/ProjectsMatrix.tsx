import {
  Box,
  Heading,
  Text,
  HStack,
  Tag,
  Image,
  VStack,
  Flex
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { csProjects } from '../data/ProjectData'

const MotionBox = motion(Box)

export default function ProjectsMatrix() {
  const [selectedProject, setSelectedProject] = useState(csProjects[0])
  const [isPortrait, setIsPortrait] = useState(false)

  // Detect orientation
  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = e.currentTarget
    setIsPortrait(naturalHeight > naturalWidth)
  }

  // Preload orientation on project change
  useEffect(() => {
    if (selectedProject?.image) {
      const img = new window.Image()
      img.src = selectedProject.image
      img.onload = () => {
        setIsPortrait(img.naturalHeight > img.naturalWidth)
      }
    }
  }, [selectedProject])

  return (
    <Box as="section" id="projects" py={[16, 24]} maxW="7xl" mx="auto">
      <Heading
        fontSize="5xl"
        fontWeight="bold"
        color="white"
        opacity={0.9}
        mb={10}
        textAlign="center"
      >
        Projects ({csProjects.length})
      </Heading>

      {/* ---------------- HORIZONTAL CAROUSEL ---------------- */}
      <MotionBox p={6} borderRadius="md" shadow="md" mb={8} overflowX="auto">
        <HStack spacing={6} minW="max-content">
          {csProjects.map((project) => {
            const isSelected = selectedProject.title === project.title
            return (
              <Box
                key={project.title}
                w="280px"
                h="200px"
                borderRadius="md"
                boxShadow="sm"
                p={4}
                bg="whiteAlpha.200"
                border="2px solid"
                borderColor={isSelected ? 'blue.400' : 'whiteAlpha.200'}
                color="whiteAlpha.900"
                cursor="pointer"
                role="group"
                onClick={() => setSelectedProject(project)}
                transition="all 0.2s"
                _hover={{ borderColor: 'blue.300' }}
                flexShrink={0}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Heading size="sm" noOfLines={2}>
                  {project.title}
                </Heading>
                <Text
                  fontSize="sm"
                  flex="1"
                  mt={2}
                  noOfLines={3}
                  whiteSpace="normal"
                >
                  {project.description}
                </Text>
                <HStack spacing={2} wrap="wrap" mt={2}>
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <Tag key={i} colorScheme="blue" size="sm">
                      {tag}
                    </Tag>
                  ))}
                </HStack>
              </Box>
            )
          })}
        </HStack>
      </MotionBox>

      {/* ---------------- DETAILED VIEW ---------------- */}
      {selectedProject && (
        <MotionBox
          key={selectedProject.title}
          p={6}
          borderRadius="md"
          shadow="lg"
          bg="whiteAlpha.200"
          border="1px solid"
          borderColor="whiteAlpha.200"
          maxH={selectedProject.image ? '400px' : 'none'}
          h={selectedProject.image ? '400px' : 'auto'}
          overflow="hidden"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {selectedProject.image ? (
            isPortrait ? (
              // Portrait → left
              <Flex direction="row" gap={6} align="flex-start" h="100%">
                <Box flex="0 0 auto" h="100%" maxW="40%">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    borderRadius="md"
                    h="100%"
                    w="auto"
                    objectFit="contain"
                    onLoad={handleImageLoad}
                  />
                </Box>
                <VStack spacing={4} align="start" flex="1" overflow="hidden">
                  <Heading size="lg" color="whiteAlpha.900">
                    {selectedProject.title}
                  </Heading>
                  <Text color="gray.300">{selectedProject.description}</Text>
                  {selectedProject.details && (
                    <Text color="gray.400" fontSize="sm">
                      {selectedProject.details}
                    </Text>
                  )}
                  <HStack spacing={2} wrap="wrap">
                    {selectedProject.tags.map((tag, i) => (
                      <Tag key={i} colorScheme="blue">
                        {tag}
                      </Tag>
                    ))}
                  </HStack>
                </VStack>
              </Flex>
            ) : (
              // Landscape → top
              <VStack spacing={4} align="start" h="100%">
                <Box w="100%" maxH="200px">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    borderRadius="md"
                    h="100%"
                    w="auto"
                    objectFit="contain"
                    mx="auto"
                    onLoad={handleImageLoad}
                  />
                </Box>
                <Heading size="lg" color="whiteAlpha.900">
                  {selectedProject.title}
                </Heading>
                <Text color="gray.300">{selectedProject.description}</Text>
                {selectedProject.details && (
                  <Text color="gray.400" fontSize="sm">
                    {selectedProject.details}
                  </Text>
                )}
                <HStack spacing={2} wrap="wrap">
                  {selectedProject.tags.map((tag, i) => (
                    <Tag key={i} colorScheme="blue">
                      {tag}
                    </Tag>
                  ))}
                </HStack>
              </VStack>
            )
          ) : (
            // No image → shrink box
            <VStack spacing={4} align="start">
              <Heading size="lg" color="whiteAlpha.900">
                {selectedProject.title}
              </Heading>
              <Text color="gray.300">{selectedProject.description}</Text>
              {selectedProject.details && (
                <Text color="gray.400" fontSize="sm">
                  {selectedProject.details}
                </Text>
              )}
              <HStack spacing={2} wrap="wrap">
                {selectedProject.tags.map((tag, i) => (
                  <Tag key={i} colorScheme="blue">
                    {tag}
                  </Tag>
                ))}
              </HStack>
            </VStack>
          )}
        </MotionBox>
      )}
    </Box>
  )
}
