import { Button, Grid, GridItem, Heading } from '@chakra-ui/react'
import { WelcomeCard } from './welcome-card.tsx'

export const WelcomeScreen = () => {
  return (
    <Grid
      gap={4}
      h={'100vh'}
      p={8}
      templateColumns={'repeat(2, 1fr)'}
    >
      <GridItem>
        <WelcomeCard
          body={<Button colorScheme='whatsapp'>Open World Map</Button>}
          header={<Heading size={'xl'}>Explore World</Heading>}
        />
      </GridItem>
      <GridItem>
        <WelcomeCard
          body={<Button colorScheme='facebook'>Snip Open Conversations</Button>}
          header={<Heading size={'xl'}>Random Chat</Heading>}
        />
      </GridItem>
    </Grid>
  )
}
