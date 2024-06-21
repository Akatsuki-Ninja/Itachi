import { Icon } from '@chakra-ui/react'
import { FaRegUserCircle } from 'react-icons/fa'

import { type Coords, Marker } from '@/web/common'
import type { UserPreview } from '@/web/user'

type UserMarkerProps = {
  color?: string
  coords: Coords
  user: UserPreview
}

export const UserMarker = ({ color, coords, user }: UserMarkerProps) => {
  return (
    <Marker
      color={color}
      content={user.name}
      coords={coords}
      title={
        <Icon
          as={FaRegUserCircle}
          boxSize={10}
        />
      }
    />
  )
}
