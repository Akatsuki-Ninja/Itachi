import type { UserLocationEntity } from '@/core'
import { kill, type LiveAction, liveQuery, query } from '@/database'

const QUERY = 'LIVE SELECT * FROM user->userToLocation->userLocation;'

export const listenUsersLocation = async ({
  onChange,
}: {
  onChange: (data: { action: LiveAction; payload?: UserLocationEntity }) => void
}) => {
  const [uuid] = await query<[string]>(QUERY)

  await liveQuery<UserLocationEntity>({
    listener: ({ payload: { action, result } }) =>
      onChange({ action, payload: result }),
    uuid,
  })

  return async () => {
    await kill(uuid)
  }
}
