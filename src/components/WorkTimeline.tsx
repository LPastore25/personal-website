'use client'

import {
  Box,
  VStack,
  Center,
  Grid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { workData } from '../data/WorkData' // adjust path if needed

const MotionBox = motion(Box)

type WorkItemType = typeof workData[number]

const TimelineCard = ({ item, index }: { item: WorkItemType; index: number }) => (
  <MotionBox
    p={6}
    bg="whiteAlpha.50"
    border="1px solid"
    borderColor="whiteAlpha.200"
    borderRadius="md"
    shadow="sm"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
  >
    <Text fontWeight="bold" fontSize="lg" color="white">
      {item.company}
    </Text>
    <Text fontSize="sm" color="gray.400" mb={0} fontStyle={'italic'}>
      {item.title} • {item.location}
    </Text>
    <Text fontSize="sm" color="gray.400" mb={2} fontStyle={'italic'}>
      {item.dates}
    </Text>
    <VStack spacing={2} align="start" pl={2}>
      {item.points.map((point, i) => (
        <Text key={i} fontSize="sm" color="gray.300">
          • {point}
        </Text>
      ))}
    </VStack>
  </MotionBox>
)


const TimelineItem = ({
  item,
  isLeft,
  index,
}: {
  item: WorkItemType
  isLeft: boolean
  index: number
}) => (
  <Grid templateColumns="1fr 40px 1fr" gap={6} alignItems="center" position="relative">
    {isLeft ? <TimelineCard item={item} index={index} /> : <Box />}
    <Center flexDir="column" gap={2}>
      <Box
        bg="white"
        borderRadius="full"
        boxSize="14px"
        border="3px solid"
        borderColor="gray.700"
        zIndex={1}
      />
      <Box flex="1" w="2px" bg="whiteAlpha.300" />
    </Center>
    {!isLeft ? <TimelineCard item={item} index={index} /> : <Box />}
  </Grid>
)

export default function Timeline(props: any) {
  return (
    <Box position="relative" width="100%">
        <VStack spacing={16} align="stretch" {...props}>
            <Box
            position="absolute"
            top="0"
            bottom="0"
            left="50%"
            width="2px"
            transform="translateX(-50%)"
            bg="whiteAlpha.200"
            />
            {workData.map((item, index) => (
              <TimelineItem key={index} item={item} isLeft={index % 2 === 0} index={index} />
            ))}
        </VStack>
    </Box>
  )
}
