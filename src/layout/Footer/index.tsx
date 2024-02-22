'use client'

import { ReactNode } from 'react'
import { Box, Flex, chakra, Stack, Text, useColorModeValue, VisuallyHidden, Link } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

const SocialButton = ({ children, label, href }: { children: ReactNode; label: string; href: string }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export const Footer = () => {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} color={useColorModeValue('gray.700', 'gray.200')}>
      <Stack
        spacing={2}
        px={8}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Flex direction={{ base: 'column', sm: 'row' }} alignItems="center">
          <Text mr={{ base: 0, sm: 2 }} mb={{ base: 2, sm: 0 }}>
            © 2024 CryptoMania
          </Text>
          <Text display={{ base: 'none', sm: 'block' }} mr={2}>
            |
          </Text>
          <Text>
            Powered by{' '}
            <Link
              href="https://www.coingecko.com/"
              target="_blank"
              rel="noopener noreferrer"
              color={useColorModeValue('green.400', 'pink.400')}
              _hover={{
                textDecoration: 'underline',
                color: useColorModeValue('green.300', 'pink.300'),
              }}
            >
              CoinGecko API
            </Link>
          </Text>
        </Flex>

        <Flex alignItems="center">
          <Text mr={2}>
            Created by{' '}
            <Link
              href="https://krsiak.cz/"
              target="_blank"
              rel="noopener noreferrer"
              color={useColorModeValue('green.400', 'pink.400')}
              _hover={{
                textDecoration: 'underline',
                color: useColorModeValue('green.300', 'pink.300'),
              }}
            >
              krsiak.cz
            </Link>
          </Text>
          <SocialButton label={'GitHub'} href={'https://github.com/krsiakdaniel/cryptocurrency-prices'}>
            <FaGithub />
          </SocialButton>
        </Flex>
      </Stack>
    </Box>
  )
}
