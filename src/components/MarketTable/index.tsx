import {
  Box,
  Code,
  Table,
  Heading,
  Image,
  Input,
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
  ButtonGroup,
  Button,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { numberSeparateCommas } from '../../utils/numberSeparateCommas'

import { CoinTypeMarket } from '../../utils/constants'
import { getUrlAPI } from '../../utils/getUrlAPI'

const API_PAGE_LIMIT = 500
const ITEMS_PER_PAGE = 50

const NoSearchResults = () => {
  return (
    <Box textAlign="center" mt={4}>
      No results found
    </Box>
  )
}

export const MarketTable = () => {
  const urlCoins = getUrlAPI(API_PAGE_LIMIT)

  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')

  const pages = Math.ceil(coins.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const coinsOnCurrentPage = coins.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  // Filter coins based on search term
  const filteredCoins = coinsOnCurrentPage.filter((coin: CoinTypeMarket) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )
  const hasSearchResults = filteredCoins.length > 0

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
  const colorTableRow = useColorModeValue('white', 'gray.900')
  const colorTableRowHover = useColorModeValue('gray.100', 'gray.600')
  const linkColor = useColorModeValue('green.400', 'pink.400')
  const hoverColor = useColorModeValue('green.300', 'pink.300')
  const bgTrRow = useColorModeValue('gray.50', 'gray.700')
  const bgTrText = useColorModeValue('gray.800', 'white')
  const bgButton = useColorModeValue('gray.200', 'gray.300')
  const activeButtonColor = useColorModeValue('green.400', 'pink.400')

  if (loading) {
    return (
      <Flex width="full" mb={8} minH="275px" bgColor={loadingColors} alignItems="center" justifyContent="center">
        <Text fontSize="lg">⏳ Loading table...</Text>
      </Flex>
    )
  }

  return (
    <Box my={40}>
      <Box>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          py={2}
          borderBottom="1px solid"
          borderColor="gray.100"
          flexDirection={{ base: 'column', sm: 'row' }}
        >
          <Flex>
            <Heading textTransform="uppercase" size={{ base: 'md', sm: 'lg' }} pb={{ base: 2, sm: 0 }}>
              Market Value
            </Heading>
          </Flex>
          <ButtonGroup spacing="2">
            {Array.from({ length: pages }, (_, i) => (
              <Button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                bg={i + 1 === currentPage ? activeButtonColor : bgButton}
                size="sm"
                color={i + 1 === currentPage ? 'white' : 'gray.600'}
                _hover={{
                  color: 'white',
                  bgColor: hoverColor,
                }}
              >
                {i + 1}
              </Button>
            ))}
          </ButtonGroup>
        </Flex>

        <Flex py={4}>
          <Input placeholder="Search for a coin name" value={searchTerm} onChange={handleSearchChange} />
        </Flex>

        {hasSearchResults ? (
          <TableContainer>
            <Table size="sm" variant="simple" bg={colorTableRow}>
              <Thead>
                <Tr bg={bgTrRow}>
                  <Th fontSize="md" py={4} color={bgTrText}>
                    Coin
                  </Th>
                  <Th fontSize="md" py={4} color={bgTrText} isNumeric>
                    Price
                  </Th>
                  <Th fontSize="md" py={4} color={bgTrText} isNumeric>
                    24h Change
                  </Th>
                  <Th fontSize="md" py={4} color={bgTrText} isNumeric>
                    Market Cap
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {filteredCoins &&
                  filteredCoins.map((coin: CoinTypeMarket) => {
                    return (
                      <Tr key={coin.id} _hover={{ background: colorTableRowHover }}>
                        <Td width="200px" maxWidth="200px">
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
                        <Td width="200px" maxWidth="200px" isNumeric>
                          ${numberSeparateCommas(coin.current_price)}
                        </Td>
                        <Td width="200px" maxWidth="200px" isNumeric fontWeight="bold">
                          <Code
                            colorScheme={coin.price_change_percentage_24h >= 0 ? 'green' : 'red'}
                            children={`${coin.price_change_percentage_24h >= 0 ? '↑' : '↓'} ${coin.price_change_percentage_24h.toFixed(1)}%`}
                            px={2}
                            py={1}
                          />
                        </Td>
                        <Td width="200px" maxWidth="200px" isNumeric>
                          ${numberSeparateCommas(coin.market_cap)}
                        </Td>
                      </Tr>
                    )
                  })}
              </Tbody>
            </Table>
          </TableContainer>
        ) : (
          <NoSearchResults />
        )}
      </Box>
    </Box>
  )
}
