import { getAuthentication, query } from '@/core'

// @todo: make it via graph link
const QUERY = 'DELETE type::thing("userLocation", $userId);'

export const deleteUserLocation = async ({
  userId,
}: {
  userId: string
}): Promise<string> => {
  await getAuthentication()

  const [[result]] = await query<[[string]]>(QUERY, {
    userId,
  })

  return result
}
