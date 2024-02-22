import { Box, Text, Heading, Image, Stack, VStack, useColorModeValue } from '@chakra-ui/react'
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

      <Stack direction="row" justify={{ base: 'center', md: 'space-between' }}>
        <Image
          boxSize="100px"
          src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"
          alt="Bitcoin"
        />
        <Image
          boxSize="100px"
          src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628"
          alt="Ethereum"
        />
        <Image
          boxSize="100px"
          src="https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661"
          alt="Tether"
        />
        <Image
          boxSize="100px"
          src="https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970"
          alt="BNB"
        />
      </Stack>

      <VStack spacing={8} mt={8}>
        <Logo h="40vmin" pointerEvents="none" />
        <Text>Bitcoin</Text>
      </VStack>
    </Box>
  )
}
