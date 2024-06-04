import { liveQuery, query } from '@/core'

const QUERY = 'LIVE SELECT * FROM userLocation;'

export const listenUsersLocation = async () => {
  const [uuid] = await query<[string]>(QUERY)

  await liveQuery({
    listener: console.log,
    uuid,
  })

  return uuid
}
