import { Box, Text, Heading, VStack, useColorModeValue } from '@chakra-ui/react'

import { ImageSwapper } from '../ImageSwapper'

export const Hero = () => {
  return (
    <Box mb={8} mt={40}>
      <Heading
        as="h1"
        size={{ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl' }}
        bg={useColorModeValue('white', 'gray.800')}
        textTransform="uppercase"
      >
        CryptoMania
      </Heading>
      <Text fontSize="xl" fontWeight="semibold">
        Find your favorite crypto currency!
      </Text>

      <VStack mt={8}>
        <ImageSwapper />
      </VStack>
    </Box>
  )
}
