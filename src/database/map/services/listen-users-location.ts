import { liveQuery, query } from '@/database'

const QUERY = 'LIVE SELECT * FROM userLocation;'

export const listenUsersLocation = async () => {
  const [uuid] = await query<[string]>(QUERY)

  await liveQuery({
    listener: console.log,
    uuid,
  })

  return uuid
}
