import {
  kill,
  type LiveAction,
  liveQuery,
  query,
  type UserLocationEntity,
} from '@/core'

const QUERY = 'LIVE SELECT * FROM userLocation;'

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
