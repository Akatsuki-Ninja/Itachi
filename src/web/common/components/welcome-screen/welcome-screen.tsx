import { Button, Grid, GridItem, Heading } from '@chakra-ui/react'
import { useState } from 'react'
import { WelcomeCard } from './welcome-card.tsx'
import { EnterChatModal } from './enter-chat-modal.tsx'
import { useAuthQuery } from '@/web/auth/hooks/use-auth-query.ts'

export const WelcomeScreen = () => {
  const { data: user } = useAuthQuery()
  const [showAuthModal, setShowAuthModal] = useState(false)

  const handleChatClick = () => {
    if (!user) {
      setShowAuthModal(true)
      return
    }

    alert('redirect')
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
                onClick={handleChatClick}
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
