import React from 'react'
import { CustomCard } from '../chakra/CustomCard'
import { HStack, Stack, Tag, Text } from '@chakra-ui/react'

const PriceSection = () => {
  return (
    <CustomCard>
          <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balance</Text>

          </HStack>
          <HStack spacing={4}
                      align={{
                    base: "flex-start",
                    sm: "center",
                }}
                flexDir={{
                    base: "column",
                    sm: "row",
                }}>
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                $22.39401000 <Tag colorScheme="gray">BTC</Tag>{" "}
              </Text>
            </HStack>
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                $1,300.00 <Tag colorScheme="gray">USD</Tag>{" "}
              </Text>
            </HStack>
          </HStack>
        </Stack>
    </CustomCard>
  )
}

export default PriceSection