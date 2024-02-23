import { Box, useColorModeValue } from '@chakra-ui/react'
import { PAGE_WIDTH } from '../../utils/constants'

type Props = {
  children: React.ReactNode
}

export const PageContent = ({ children }: Props) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      px={8}
      pt={10}
      textAlign="center"
      mx="auto"
      maxWidth={{
        base: '100%',
        sm: PAGE_WIDTH.sm,
        md: PAGE_WIDTH.md,
        lg: PAGE_WIDTH.lg,
        xl: PAGE_WIDTH.xl,
        '2xl': PAGE_WIDTH['2xl'],
      }}
    >
      {children}
    </Box>
  )
}
