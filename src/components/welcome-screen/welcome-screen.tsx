import {Button, Grid, GridItem, Heading} from "@chakra-ui/react";
import {WelcomeCard} from "./welcome-card.tsx";

export const WelcomeScreen = () => {
  return (
    <Grid templateColumns={'repeat(2, 1fr)'} h={'100vh'} gap={4} p={8}>
      <GridItem>
        <WelcomeCard header={<Heading size={'xl'}>
          Explore World
        </Heading>} body={<Button colorScheme='whatsapp'>Open World Map</Button>}/>
      </GridItem>
      <GridItem>
        <WelcomeCard header={<Heading size={'xl'}>
          Random Chat
        </Heading>} body={<Button colorScheme='facebook'>Snip Open Conversations</Button>}/>
      </GridItem>
    </Grid>
  )
}