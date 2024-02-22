import { Box, Grid, useColorModeValue } from '@chakra-ui/react'

type Props = {
  children: React.ReactNode
}

export const PageContent = ({ children }: Props) => {
  return (
    <Box textAlign="center">
      <Grid minH="100vh" p={4} pt={10} bg={useColorModeValue('gray.100', 'gray.800')}>
        {children}
      </Grid>
    </Box>
  )
}
