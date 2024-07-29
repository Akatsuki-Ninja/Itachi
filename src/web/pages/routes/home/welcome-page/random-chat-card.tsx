import { Button, Heading } from '@chakra-ui/react'
import { useNavigate } from '@tanstack/react-router'
import { useCallback } from 'react'

import type { RoomDto } from '@/core'
import {
  EnterModal,
  EnterModalOpenButton,
  EnterModalProvider,
} from '@/web/auth'
import { useCreateRoom } from '@/web/room'

import { ROOM_ID_PARAM, ROOM_PATH } from '../../room/room-route'

import { WelcomeCard } from './welcome-card'

export const RandomChatCard = () => {
  const openRoom = useOpenRoom()
  const handleEnter = useCallback(() => {
    openRoom()
  }, [openRoom])

  return (
    <EnterModalProvider onEnter={handleEnter}>
      <EnterModal />
      <WelcomeCard
        body={
          <EnterModalOpenButton>
            <Button colorScheme='facebook'>Snip Open Conversations</Button>
          </EnterModalOpenButton>
        }
        header={<Heading size={'xl'}>Random Chat</Heading>}
      />
    </EnterModalProvider>
  )
}

const useOpenRoom = () => {
  const navigate = useNavigate()
  const redirectToRoom = useCallback(
    async (room: RoomDto) => {
      await navigate({ to: ROOM_PATH.replace(ROOM_ID_PARAM, room.id) })
    },
    [navigate]
  )
  const { mutate: createRoom } = useCreateRoom({
    onSuccess: redirectToRoom,
  })

  return createRoom
}
