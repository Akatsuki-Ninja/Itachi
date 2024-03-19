import { Button, Grid, GridItem, Heading } from '@chakra-ui/react'
import { useAtom } from 'jotai'
import { useState } from 'react'
import { userAtom } from '../../store/user.store.ts'
import { WelcomeCard } from './welcome-card.tsx'
import { EnterChatModal } from './enter-chat-modal.tsx'

export const WelcomeScreen = () => {
  const [user, setUser] = useAtom(userAtom)
  const [showAuthModal, setShowAuthModal] = useState(false)

  const onChatClick = () => {
    if (!user) {
      setShowAuthModal(true)
    }

    // redirect
  }

  const handleClose = () => {
    setShowAuthModal(false)
  }

  return (
    <>
      <EnterChatModal
        onClose={handleClose}
        open={showAuthModal}
      />
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
            body={
              <Button
                colorScheme='facebook'
                onClick={onChatClick}
              >
                Snip Open Conversations
              </Button>
            }
            header={<Heading size={'xl'}>Random Chat</Heading>}
          />
        </GridItem>
      </Grid>
    </>
  )
}
