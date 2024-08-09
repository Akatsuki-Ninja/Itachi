import { kill, liveQuery, query } from '@/database'
import type { UserLocationEntity } from '@/store'

const QUERY = 'LIVE SELECT *, user.*  FROM userLocation;'

export type Event = {
  payload: UserLocationEntity
  type: 'delete' | 'save'
}

type ListenUsersLocationsValues = {
  onChange: (event: Event) => void
}

export const listenUsersLocations = async ({
  onChange,
}: ListenUsersLocationsValues) => {
  const [uuid] = await query<[string]>(QUERY)

  await liveQuery<UserLocationEntity>({
    listener: ({ payload: { action, result } }) => {
      if (['CREATE', 'UPDATE'].includes(action)) {
        if (!result) {
          console.error('User could not be retrieved.')
          return
        }

        onChange({
          payload: result,
          type: result.deletedAt ? 'delete' : 'save',
        })
      }
    },
    uuid,
  })

  return async () => {
    await kill(uuid)
  }
}
