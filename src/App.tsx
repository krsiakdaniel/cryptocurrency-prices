import { ChakraProvider, theme } from '@chakra-ui/react'

import { Navbar } from './layout/Navbar'
import { Footer } from './layout/Footer'
import { PageContent } from './layout/PageContent'

import { Hero } from './components/Hero'
import { MarketTable } from './components/MarketTable'
import { MarketTopCoins } from './components/MarketTopCoins'
import { CoinGecko } from './components/CoinGecko'

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
