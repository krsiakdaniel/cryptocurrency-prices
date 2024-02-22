import { ChakraProvider, theme } from '@chakra-ui/react'

import { Hero } from './components/Hero'
import { Navbar } from './layout/Navbar'
import { Footer } from './layout/Footer'
import { PageContent } from './layout/PageContent'

export const App = () => (
  <ChakraProvider theme={theme}>
    <>
      <Navbar />
      <PageContent>
        <Hero />
      </PageContent>
      <Footer />
    </>
  </ChakraProvider>
)
