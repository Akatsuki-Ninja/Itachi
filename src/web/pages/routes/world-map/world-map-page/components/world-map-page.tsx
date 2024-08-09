import { Box, Button, Text, useToast } from '@chakra-ui/react'
import { useNavigate } from '@tanstack/react-router'
import { APIProvider, Map } from '@vis.gl/react-google-maps'
import { useCallback, useEffect } from 'react'

import type { InvitationDto } from '@/core'
import { InvitationStatusEnum } from '@/store'
import { useRequiredAuth } from '@/web/auth'
import {
  useSendInvitation,
  useSubscribeActiveInvitation,
} from '@/web/invitation'

import { useTrackAuthUserLocation } from '../hooks/use-track-auth-user-location'

import { UsersMarkers } from './users-markers'

const GOOGLE_MAPS_API_KEY = 'AIzaSyCUZf3em7J8q8WkWOfjJ1B9c5N1aKrDiVI'

export const WorldMapPage = () => {
  const { location } = useTrackAuthUserLocation()

  const toast = useToast()
  const user = useRequiredAuth()
  const { data } = useSubscribeActiveInvitation({
    receiverId: user.id,
    refetchInterval: 3000,
    senderId: user.id,
  })
  const { mutateAsync } = useSendInvitation()

  const navigate = useNavigate()
  const accept = useCallback(
    async (invitation: InvitationDto) => {
      if (user.id === invitation.receiver.id) {
        await mutateAsync({
          receiverId: invitation.receiver.id,
          roomId: invitation.room.id,
          senderId: invitation.sender.id,
          status: InvitationStatusEnum.accepted,
        })
      }
      await navigate({
        to: `/room/${invitation.room.id}`,
      })
    },
    [mutateAsync, navigate, user.id]
  )

  console.log(data)

  useEffect(() => {
    if (!data) return

    if (
      user.id === data.receiver.id &&
      data.status === InvitationStatusEnum.pending
    ) {
      /**
       * it will emit toast with subscribe timeout
       * check if there active toast
       */
      toast({
        description: (
          <>
            <Text>{data.sender.name} inviting you.</Text>
            <Button onClick={() => accept(data)}>Accept</Button>
            <Button>Reject</Button>
          </>
        ),
        duration: 10000,
        isClosable: true,
        status: 'info',
        title: 'Received invitation.',
      })
    }

    if (
      user.id === data.sender.id &&
      data.status === InvitationStatusEnum.accepted
    ) {
      /**
       * if user reload page or go back
       * it will redirect again
       */
      accept(data)
    }
  }, [accept, data, toast, user])

  /**
   * @todo: manage invitation.
   *
   * 1) as sender
   * ⚠️ when send invitation shore pending invitation in cache
   * when invitation occurs from subscription
   * * empty array or
   * * different invitation id (invitation timeout) from cached or
   * * same id with status rejected
   * * -> rejection notify
   *
   * - same invitation id with accepted status
   * * -> redirect
   *
   * 2) as receiver
   * ⚠️ there are no invitation in cache
   * when pending invitation occurs from subscription
   * show popup with accept and reject controls
   *
   */

  return (
    <Box
      h={'100vh'}
      w={'100vw'}
    >
      <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
        {location ? (
          <Map
            defaultCenter={location}
            defaultZoom={14}
            mapId={'map'}
          >
            <UsersMarkers />
          </Map>
        ) : null}
      </APIProvider>
    </Box>
  )
}
