import { useState, useEffect } from 'react'

import { Box, Image } from '@chakra-ui/react'

import bitcoin256 from '../../assets/images/bitcoin-256.png'
import ethereum256 from '../../assets/images/ethereum-256.png'
import tether256 from '../../assets/images/tether-256.png'
import binance256 from '../../assets/images/binance-256.png'

const TIME_INTERVAL = 1500

export const ImageSwapper = () => {
  const imageUrls = [bitcoin256, ethereum256, tether256, binance256]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % imageUrls.length
      setCurrentImageIndex(nextIndex)
    }, TIME_INTERVAL)

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId)
  }, [currentImageIndex, imageUrls.length])

  return (
    <Box>
      <Image boxSize="256px" src={imageUrls[currentImageIndex]} alt="crypto" />
    </Box>
  )
}
