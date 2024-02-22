import { Box, Grid, useColorModeValue } from '@chakra-ui/react'

type Props = {
  children: React.ReactNode
}

const pageWidth = {
  base: '0px',
  sm: '480px',
  md: '768px',
  lg: '992px',
  xl: '1280px',
  '2xl': '1536px',
}

export const PageContent = ({ children }: Props) => {
  return (
    <Box
      mx="auto"
      textAlign="center"
      px={8}
      maxWidth={{
        base: '100%',
        sm: pageWidth.sm,
        md: pageWidth.md,
        lg: pageWidth.lg,
        xl: pageWidth.xl,
        '2xl': pageWidth['2xl'],
      }}
    >
      <Grid minH="100vh" p={4} pt={10} bg={useColorModeValue('gray.100', 'gray.800')}>
        {children}
      </Grid>
    </Box>
  )
}
