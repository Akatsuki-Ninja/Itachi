import { Button, Grid, GridItem, Heading } from '@chakra-ui/react'
import { useNavigate } from '@tanstack/react-router'
import { useState } from 'react'

import { useAuth } from '@/web/auth'

import { ROOM_PATH } from '../../routes/room-route.ts'
import { WORLD_MAP_PATH } from '../../routes/world-map-route.ts'

import { EnterChatModal } from './enter-chat-modal.tsx'
import { WelcomeCard } from './welcome-card.tsx'

export const WelcomeScreen = () => {
  const { data: user } = useAuth()
  const navigate = useNavigate()

  const [showAuthModal, setShowAuthModal] = useState(false)

  const onSuccess = async () => {
    await navigate({ to: ROOM_PATH })
  }

  const handleChatClick = async () => {
    if (!user) {
      setShowAuthModal(true)
      return
    }

    await onSuccess()
  }

  const handleMapClick = async () => {
    await navigate({ to: WORLD_MAP_PATH })
  }

  const handleClose = () => {
    setShowAuthModal(false)
  }

  return (
    <>
      <EnterChatModal
        onClose={handleClose}
        onSuccess={onSuccess}
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
            body={
              <Button
                colorScheme='whatsapp'
                onClick={handleMapClick}
              >
                Open World Map
              </Button>
            }
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
