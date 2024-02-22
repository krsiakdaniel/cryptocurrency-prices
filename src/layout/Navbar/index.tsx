'use client'

import { Box, Flex, Text, Button, Stack, useColorModeValue } from '@chakra-ui/react'

import { ColorModeSwitcher } from '../../ColorModeSwitcher'
import { FaGithub } from 'react-icons/fa'

export const Navbar = () => {
  return (
    <Box as="header" position="fixed" w="full" zIndex={1}>
      <Flex
        bg={useColorModeValue('white', 'gray.900')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        pl={{ base: 8 }}
        pr={{ base: 5 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
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

        <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
          <Button
            as={'a'}
            display={{ base: 'none', sm: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'pink.400'}
            href={'https://www.coingecko.com/'}
            target="_blank"
            size="sm"
            _hover={{
              bg: 'pink.300',
            }}
          >
            Go to CoinGecko
          </Button>
        </Stack>

        <ColorModeSwitcher justifySelf="flex-end" />
      </Flex>
    </Box>
  )
}
