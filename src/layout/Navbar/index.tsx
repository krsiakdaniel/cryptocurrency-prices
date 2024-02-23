'use client'

import { Box, Flex, Text, Button, Stack, useColorModeValue } from '@chakra-ui/react'

import { ColorModeSwitcher } from '../../ColorModeSwitcher'
import { PAGE_WIDTH } from '../../utils/constants'
import { FaDiscord, FaTwitter } from 'react-icons/fa'

import { SocialButton } from '../../components/SocialButton'

export const Navbar = () => {
  return (
    <Box
      as="header"
      position="fixed"
      w="full"
      zIndex={1}
      bg={useColorModeValue('gray.50', 'gray.900')}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.600')}
    >
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
        <Flex
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 8 }}
          align={'center'}
        >
          <Flex flex={{ base: 1 }}>
            <Text
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}
              fontWeight={'bold'}
              textTransform="uppercase"
            >
              CryptoMania
            </Text>
          </Flex>

          <Flex>
            <Box mr={4}>
              <SocialButton label={'Twitter'} href={'https://twitter.com/coingecko'}>
                <FaTwitter />
              </SocialButton>
            </Box>
            <Box mr={{ base: 0, sm: 4 }}>
              <SocialButton label={'Discord'} href={'https://discord.com/invite/EhrkaCH'}>
                <FaDiscord />
              </SocialButton>
            </Box>
          </Flex>

          <Stack flex={{ base: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
            <Button
              as={'a'}
              display={{ base: 'none', sm: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={useColorModeValue('white', 'gray.800')}
              bg={useColorModeValue('gray.400', 'white')}
              href={'https://www.coingecko.com/'}
              target="_blank"
              size="sm"
              _hover={{
                bg: useColorModeValue('green.400', 'pink.400'),
              }}
            >
              API by CoinGecko
            </Button>
          </Stack>

          <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>
      </Box>
    </Box>
  )
}
