import { Button, Grid, GridItem, Heading } from '@chakra-ui/react'
import { useNavigate } from '@tanstack/react-router'
import { useCallback, useState } from 'react'

import { useAuth } from '@/web/auth'
import { useCreateRoom } from '@/web/room'

import { ROOM_ID_PARAM, ROOM_PATH } from '../../routes/room-route'
import { WORLD_MAP_PATH } from '../../routes/world-map-route'

import { EnterModal } from './enter-modal.tsx'
import { WelcomeCard } from './welcome-card'

export const WelcomeScreen = () => {
  const navigate = useNavigate()

  const { data: user } = useAuth({ required: false })

  const { mutate: goToNewChat } = useCreateRoom({
    onSuccess: async (room) => {
      await navigate({ to: ROOM_PATH.replace(ROOM_ID_PARAM, room.id) })
    },
  })

  const [showAuthModal, setShowAuthModal] = useState(false)

  const handleChatClick = async () => {
    if (!user) {
      setShowAuthModal(true)
      return
    }

    goToNewChat()
  }

  const handleClose = useCallback(() => {
    setShowAuthModal(false)
  }, [])

  return (
    <>
      <EnterModal
        onClose={handleClose}
        onSuccess={goToNewChat}
        open={showAuthModal}
      />
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
          <RandomChatCard onClick={handleChatClick} />
        </GridItem>
      </Grid>
    </>
  )
}

const WorldCard = () => {
  const navigate = useNavigate()

  const handleMapClick = useCallback(async () => {
    await navigate({ to: WORLD_MAP_PATH })
  }, [navigate])

  return (
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
  )
}

const RandomChatCard = (props: { onClick: () => void }) => (
  <WelcomeCard
    body={
      <Button
        colorScheme='facebook'
        onClick={props.onClick}
      >
        Snip Open Conversations
      </Button>
    }
    header={<Heading size={'xl'}>Random Chat</Heading>}
  />
)
