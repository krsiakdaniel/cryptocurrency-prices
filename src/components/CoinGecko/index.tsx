import { Flex, Heading, Link, Highlight, useColorModeValue, Image, useColorMode } from '@chakra-ui/react'

import coinGecko from '../../assets/svg/coingecko-logo.svg'

export const CoinGecko = () => {
  const colorModeColors = useColorModeValue('green.400', 'pink.400')

  return (
    <Flex mb={20} p={16} justifyContent="center" bg="yellow.300" borderRadius="lg">
      <Flex alignItems="center" flexDirection="column">
        <Heading mb={8}>
          Powered by{' '}
          <Highlight
            query="CoinGecko"
            styles={{ px: '2', py: '1', rounded: 'full', bg: colorModeColors, color: 'white' }}
          >
            CoinGecko
          </Highlight>
        </Heading>
        <Link href="https://www.coingecko.com/en" isExternal>
          <Image boxSize="128px" src={coinGecko} alt="CoinGecko" />
        </Link>
      </Flex>
    </Flex>
  )
}
