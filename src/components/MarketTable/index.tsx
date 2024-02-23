import {
  Box,
  Code,
  Table,
  Heading,
  Image,
  Stack,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  Flex,
  useColorModeValue,
  Link,
  Skeleton,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { numberSeparateCommas } from '../../utils/numberSeparateCommas'

// TODO: add CoinGecko API key only before deploying, and replace the key in the final version with example only
const ROOT_URL = 'https://api.coingecko.com/api/v3'
const URL_PARAMETER = '&x_cg_demo_api_key='
const API_KEY = 'CG-ih8zbzkLnqwd6nYkJDbCwVeR'
const PAGE_LIMIT = 500
const SPARK_LINE = true

interface CoinType {
  id: string
  image: string
  name: string
  current_price: number
  price_change_percentage_24h: number
  market_cap: number
}

export const MarketTable = () => {
  const urlCoins = `${ROOT_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${PAGE_LIMIT}&page=1&sparkline=${SPARK_LINE}&locale=en${URL_PARAMETER}${API_KEY}`

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

  const loadingColors = useColorModeValue('white', 'gray.800')
  const colorTableRow = useColorModeValue('white', 'gray.900')
  const colorTableRowHover = useColorModeValue('gray.100', 'gray.600')
  const linkColor = useColorModeValue('green.400', 'pink.400')
  const hoverColor = useColorModeValue('green.300', 'pink.300')

  return (
    <Box my={40}>
      {loading ? (
        <Flex width="full" mb={8} minH="275px" bgColor={loadingColors} alignItems="center" justifyContent="center">
          <Text fontSize="lg">⏳ Loading table...</Text>
        </Flex>
      ) : (
        <Box>
          <Heading size="lg" mb={4} textTransform="uppercase">
            Current Market Value
          </Heading>
          <TableContainer>
            <Table size="sm" variant="simple" bg={colorTableRow}>
              <Thead>
                <Tr>
                  <Th>Coin</Th>
                  <Th isNumeric>Price</Th>
                  <Th isNumeric>24h Change</Th>
                  <Th isNumeric>Market Cap</Th>
                </Tr>
              </Thead>
              <Tbody>
                {coins &&
                  coins.map((coin: CoinType) => {
                    return (
                      <Tr key={coin.id} _hover={{ background: colorTableRowHover }}>
                        <Td>
                          <Flex alignItems="center">
                            <Image boxSize="30px" mr={4} src={coin.image} alt={coin.name} />
                            <Link
                              href={`https://www.coingecko.com/en/coins/${coin.id}`}
                              isExternal
                              fontWeight="bold"
                              color={linkColor}
                              _hover={{
                                textDecoration: 'underline',
                                color: hoverColor,
                              }}
                            >
                              {coin.name}
                            </Link>
                          </Flex>
                        </Td>
                        <Td isNumeric>${numberSeparateCommas(coin.current_price)}</Td>
                        <Td isNumeric fontWeight="bold">
                          <Code
                            colorScheme={coin.price_change_percentage_24h >= 0 ? 'green' : 'red'}
                            children={`${coin.price_change_percentage_24h >= 0 ? '↑' : '↓'} ${coin.price_change_percentage_24h.toFixed(1)}%`}
                            px={2}
                            py={1}
                          />
                        </Td>
                        <Td isNumeric>${numberSeparateCommas(coin.market_cap)}</Td>
                      </Tr>
                    )
                  })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </Box>
  )
}
