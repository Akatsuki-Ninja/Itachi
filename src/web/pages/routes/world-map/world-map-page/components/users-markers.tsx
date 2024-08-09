import { Box, Button, Card, Divider, useToast } from '@chakra-ui/react'
import { useCallback } from 'react'

import { InvitationStatusEnum } from '@/store'
import { useRequiredAuth } from '@/web/auth'
import { useSendInvitation } from '@/web/invitation'

import { useUsersMarkers } from '../library/use-users-markers'

import { UserMarker } from './user-marker'

const CURRENT_USER_COLOR = '#eee'

export const UsersMarkers = () => {
  const { markers } = useUsersMarkers()
  const authUser = useRequiredAuth()
  const { mutateAsync } = useSendInvitation()
  const toast = useToast()

  const invite = useCallback(
    async ({ receiverId }: { receiverId: string }) => {
      /**
       * when catch busy error then show notification
       * if sender in active -> you already calling
       * if receiver in active -> receiver is busy
       *
       * disable call button with tooltip while sender has active invitation
       */
      await mutateAsync({
        receiverId,
        senderId: authUser.id,
        status: InvitationStatusEnum.pending,
      })
      toast({
        description: (
          <>
            <Button>Cancel</Button>
          </>
        ),
        duration: 10000,
        isClosable: true,
        status: 'info',
        title: 'Invitation sent.',
      })
    },
    [authUser.id, mutateAsync, toast]
  )

  return (
    <>
      {markers.map(({ color, location, userPreview }) => (
        <UserMarker
          color={authUser.id === userPreview.id ? CURRENT_USER_COLOR : color}
          key={userPreview.id}
          location={location}
        >
          {
            <Card>
              <Box>{userPreview.name}</Box>
              {authUser.id !== userPreview.id ? (
                <>
                  <Divider />
                  <Button
                    colorScheme={'blue'}
                    onClick={() => invite({ receiverId: userPreview.id })}
                    size={'xs'}
                  >
                    Call
                  </Button>
                </>
              ) : null}
            </Card>
          }
        </UserMarker>
      ))}
    </>
  )
}
