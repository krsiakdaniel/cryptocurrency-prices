'use client'

import { Box, Flex, Stack, Text, useColorModeValue, Link } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

import { PAGE_WIDTH } from '../../utils/constants'

import { SocialButton } from '../../components/SocialButton'

export const Footer = () => {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} color={useColorModeValue('gray.700', 'gray.200')}>
      <Box
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
    </Box>
  )
}
