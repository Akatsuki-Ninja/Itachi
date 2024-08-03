import { Box, Button, Card, Divider } from '@chakra-ui/react'
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

  const invite = useCallback(
    async ({ receiverId }: { receiverId: string }) => {
      await mutateAsync({
        receiverId,
        senderId: authUser.id,
        status: InvitationStatusEnum.pending,
      })
    },
    [authUser.id, mutateAsync]
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
