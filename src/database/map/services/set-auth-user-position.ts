import { query } from '@/database'

export type UserPosition = {
  lat: number
  lng: number
}

export type UserPositionEntity = {
  id: string
  position: UserPosition
}

export const setAuthUserPosition = async (
  userPosition: UserPosition
): Promise<UserPositionEntity> => {
  const [[userPositionEntity]] = await query<UserPositionEntity>(`
  UPDATE type::thing("userPosition", type::thing("user", $auth)) SET position = ${JSON.stringify(userPosition)}
  `)

  return userPositionEntity
}
