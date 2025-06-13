import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  HStack,
  Tag,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { csProjects } from '../data/ProjectData'


const MotionBox = motion(Box)
export default function ProjectsMatrix() {
  const layoutMap: Record<string, { colSpan?: number; rowSpan?: number; height?: string }> = {
    'Outfit Recommendation Mobile App': { rowSpan: 2, colSpan: 1, height: '420px' },
    '8-Puzzle AI Solver': { rowSpan: 1, colSpan: 1, height: '200px' },
    'Racket-Based Language Interpreter': { rowSpan: 1, colSpan: 1, height: '200px' },
    'Domo Dashboard & ETL Automation System': { rowSpan: 1, colSpan: 2, height: '240px' },
    'De-identification Tool for Research Data': { rowSpan: 1, colSpan: 2, height: '240px' },
    'City Livability Comparison Tool': { rowSpan: 1, colSpan: 1, height: '200px' },
  }

  const orderedTitles = [
    'Outfit Recommendation Mobile App',
    '8-Puzzle AI Solver',
    'Racket-Based Language Interpreter',
    'Domo Dashboard & ETL Automation System',
    'De-identification Tool for Research Data',
    'City Livability Comparison Tool',
    
  ]

  return (
    <Box as="section" id="projects" py={[16, 24]} maxW="6xl" mx="auto">
      <Heading
        fontSize="5xl"
        fontWeight="bold"
        color="white"
        opacity={0.8}
        mb={10}
        textAlign="center"
      >
        Projects [Under Construction]
      </Heading>

      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        p={6}
        borderRadius="md"
        shadow="md"
        >
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
                >
                <Box position="relative" height="100%">
                    {project.image && (
                    <Image
                        src={project.image}
                        alt={project.title}
                        objectFit="cover"
                        w="100%"
                        h="100%"
                    />
                    )}
                    <Box
                    position="absolute"
                    top={0}
                    left={0}
                    w="100%"
                    h="100%"
                    bg="whiteAlpha.900"
                    opacity={0}
                    _groupHover={{ opacity: 1 }}
                    transition="opacity 0.3s ease"
                    p={5}
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    >
                    <Box>
                        <Heading size="md" mb={2}>
                        {project.title}
                        </Heading>
                        <Text color="gray.600" mb={3}>
                        {project.description}
                        </Text>
                    </Box>
                    <HStack spacing={2} wrap="wrap">
                        {project.tags.map((tag, tagIndex) => (
                        <Tag key={tagIndex} colorScheme="blue">
                            {tag}
                        </Tag>
                        ))}
                    </HStack>
                    </Box>

                    {!project.image && (
                    <Box p={5}>
                        <Heading size="md">{project.title}</Heading>
                    </Box>
                    )}
                </Box>
                </GridItem>
            )
            })}
        </Grid>
        </MotionBox>

    </Box>
  )
}
