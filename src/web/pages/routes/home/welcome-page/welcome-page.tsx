import { Grid, GridItem } from '@chakra-ui/react'

import { RandomChatCard } from './random-chat-card'
import { WorldCard } from './world-card'

export const WelcomePage = () => {
  return (
    <>
      <Grid
        gap={4}
        h={'100vh'}
        p={8}
        templateColumns={'repeat(2, 1fr)'}
      >
        <GridItem>
          <WorldCard />
        </GridItem>
        <GridItem>
          <RandomChatCard />
        </GridItem>
      </Grid>
    </>
  )
}
