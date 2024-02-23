import { useEffect, useState } from 'react'
import { Box, Text, Heading, Flex, Image, Highlight, useColorModeValue } from '@chakra-ui/react'

import { CoinType } from '../../utils/constants'
import { getUrlAPI } from '../../utils/getUrlAPI'

const API_PAGE_LIMIT = 4

export const MarketTopCoins = () => {
  const urlCoins = getUrlAPI(API_PAGE_LIMIT)

  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(urlCoins, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCoins(data)
        setLoading(false)
      })
      .catch((error) => console.error('Error:', error))
  }, [urlCoins])

  const loadingColors = useColorModeValue('white', 'gray.800')
  const colorModeColors = useColorModeValue('green.400', 'pink.400')

  return (
    <Box mb={8} mt={40}>
      <Box mt={20}>
        {loading ? (
          <Flex width="full" mb={8} minH="250px" bgColor={loadingColors} alignItems="center" justifyContent="center">
            <Text fontSize="lg">⏳ Loading coins...</Text>
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
                            {coin.name}
                          </Text>
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
