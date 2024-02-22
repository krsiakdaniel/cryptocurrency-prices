import { Box, Table, Heading, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer } from '@chakra-ui/react'

export const MarketTable = () => {
  return (
    <Box my={40}>
      <Heading size="lg" mb={4} textTransform="uppercase">
        Current Market Value
      </Heading>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Coin</Th>
              <Th isNumeric>Price</Th>
              <Th isNumeric>24h Change</Th>
              <Th isNumeric>Market Cap</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>name</Td>
              <Td isNumeric>100</Td>
              <Td isNumeric>200</Td>
              <Td isNumeric>300</Td>
            </Tr>
            <Tr>
              <Td>name</Td>
              <Td isNumeric>100</Td>
              <Td isNumeric>200</Td>
              <Td isNumeric>300</Td>
            </Tr>
            <Tr>
              <Td>name</Td>
              <Td isNumeric>100</Td>
              <Td isNumeric>200</Td>
              <Td isNumeric>300</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Td>name</Td>
              <Td isNumeric>100</Td>
              <Td isNumeric>200</Td>
              <Td isNumeric>300</Td>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  )
}
