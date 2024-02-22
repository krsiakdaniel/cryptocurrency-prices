import { Box, useColorModeValue } from '@chakra-ui/react'

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
      bg={useColorModeValue('white', 'gray.800')}
      px={8}
      pt={10}
      textAlign="center"
      borderX="1px solid"
      mx="auto"
      maxWidth={{
        base: '100%',
        sm: pageWidth.sm,
        md: pageWidth.md,
        lg: pageWidth.lg,
        xl: pageWidth.xl,
        '2xl': pageWidth['2xl'],
      }}
    >
      {children}
    </Box>
  )
}
