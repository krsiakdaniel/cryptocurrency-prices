import { ChakraProvider, Box, Text, Heading, Link, VStack, Grid, theme } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import { Logo } from './components/logo'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3} bg="green.300">
        <ColorModeSwitcher justifySelf="flex-end" />
        <Heading as="h1" size="4xl" noOfLines={1}>
          CryptoMania
        </Heading>
        <Text as="h2" noOfLines={1}>
          Display current cryptocurrency prices!
        </Text>

        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Text>
            Using{' '}
            <Link color="blue.600" href="https://www.coingecko.com/" target="_blank" rel="noopener noreferrer">
              CoinGecko API
            </Link>
          </Text>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
