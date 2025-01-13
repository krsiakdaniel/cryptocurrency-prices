import { ChakraProvider, theme } from '@chakra-ui/react'

import { Footer } from './layout/Footer'
import { Navbar } from './layout/Navbar'
import { PageContent } from './layout/PageContent'

import { CoinGecko } from './components/CoinGecko'
import { Hero } from './components/Hero'
import { MarketTable } from './components/MarketTable'
import { MarketTopCoins } from './components/MarketTopCoins'

export const App = () => (
  <ChakraProvider theme={theme}>
    <>
      <Navbar />
      <PageContent>
        <Hero />
        <MarketTopCoins />
        <MarketTable />
        <CoinGecko />
      </PageContent>
      <Footer />
    </>
  </ChakraProvider>
)
