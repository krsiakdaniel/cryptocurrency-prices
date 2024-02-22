import { Box, Text, Heading, VStack, useColorModeValue } from '@chakra-ui/react'
import { Logo } from '../Logo'

export const Hero = () => {
  return (
    <Box>
      <Heading
        as="h1"
        size={{ base: '2xl', sm: '4xl' }}
        noOfLines={1}
        mt={16}
        bg={useColorModeValue('gray.100', 'gray.800')}
        textTransform="uppercase"
      >
        CryptoMania
      </Heading>
      <Text as="h2" mt={4} fontSize="xl">
        Display current cryptocurrency prices!
      </Text>

      <VStack spacing={8} mt={8}>
        <Logo h="40vmin" pointerEvents="none" />
        <Text>Bitcoin</Text>
      </VStack>
    </Box>
  )
}
