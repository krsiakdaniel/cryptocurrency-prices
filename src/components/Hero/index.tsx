import { useEffect, useState } from 'react'
import { Box, Text, Heading, Flex, Link, Image, Highlight, VStack, useColorModeValue } from '@chakra-ui/react'

import bitcoin256 from '../../assets/images/bitcoin-256.png'

// TODO: add CoinGecko API key only before deploying, and replace the key in the final version with example only
const ROOT_URL = 'https://api.coingecko.com/api/v3'
const URL_PARAMETER = '&x_cg_demo_api_key='
const API_KEY = 'CG-ih8zbzkLnqwd6nYkJDbCwVeR'

interface CoinType {
  id: string
  image: string
  name: string
  current_price: number
}

export const Hero = () => {
  const urlCoins = `${ROOT_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false&locale=en${URL_PARAMETER}${API_KEY}`

  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(urlCoins, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-CoinGecko-API-Key': API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCoins(data)
        setLoading(false)
      })
      .catch((error) => console.error('Error:', error))
  }, [urlCoins])

  console.log(coins)

  const linkColor = useColorModeValue('green.400', 'pink.400')
  const hoverColor = useColorModeValue('green.300', 'pink.300')
  const loadingColors = useColorModeValue('white', 'gray.800')
  const colorModeColors = useColorModeValue('green.400', 'pink.400')

  return (
    <Box mb={8}>
      <Heading
        as="h1"
        size={{ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl' }}
        mt={20}
        bg={useColorModeValue('white', 'gray.800')}
        textTransform="uppercase"
      >
        CryptoMania
      </Heading>
      <Text fontSize="xl" fontWeight="semibold">
        Find your favorite crypto currency!
      </Text>

      <VStack mt={8}>
        <Image boxSize="256px" src={bitcoin256} alt="Bitcoin" />
      </VStack>

      <Box mt={20}>
        {loading ? (
          <Flex width="full" mb={8} minH="275px" bgColor={loadingColors} alignItems="center" justifyContent="center">
            <Text fontSize="lg">Loading coins...</Text>
          </Flex>
        ) : (
          <Box>
            <Heading
              size={{ base: 'lg', sm: 'xl' }}
              textTransform="uppercase"
              fontSize="xl"
              fontWeight="bold"
              textAlign="center"
              mt={8}
            >
              <Highlight
                query="crypto currencies"
                styles={{ px: '2', py: '1', rounded: 'full', bg: colorModeColors, color: 'white' }}
              >
                ✨ Top 4 crypto currencies by market cap ✨
              </Highlight>
            </Heading>

            <Flex
              justifyContent="space-between"
              maxWidth="1000px"
              mx="auto"
              mt={8}
              px={2}
              flexDirection={{ base: 'column', md: 'row' }}
            >
              {coins &&
                coins.map((coin: CoinType) => {
                  return (
                    <Flex
                      key={coin.id}
                      flexDirection="column"
                      alignItems="center"
                      mb={{ base: 10, md: 0 }}
                      _last={{ mb: 0 }}
                    >
                      <Box mb={4}>
                        <Image boxSize="128px" src={coin.image} alt={coin.name} />
                      </Box>

                      <Flex flexDirection="column">
                        <Box>
                          <Text fontSize="xl" fontWeight="bold">
                            {coin.name}, ${coin.current_price}
                          </Text>
                        </Box>
                        <Box>
                          <Link
                            href={`https://www.coingecko.com/en/coins/${coin.id}`}
                            isExternal
                            color={linkColor}
                            _hover={{
                              textDecoration: 'underline',
                              color: hoverColor,
                            }}
                          >
                            More on CoinGecko
                          </Link>
                        </Box>
                      </Flex>
                    </Flex>
                  )
                })}
            </Flex>
          </Box>
        )}
      </Box>
    </Box>
  )
}
