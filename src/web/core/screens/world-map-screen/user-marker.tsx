import { Icon } from '@chakra-ui/react'
import { FaRegUserCircle } from 'react-icons/fa'

import { type UserEntityLike } from '@/core'
import { type Coords, Marker } from '@/web/common'

type UserMarkerProps = {
  coords: Coords
  user: UserEntityLike
}

export const UserMarker = ({ coords, user }: UserMarkerProps) => {
  return (
    <Marker
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
