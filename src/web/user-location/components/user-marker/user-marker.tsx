import { Icon } from '@chakra-ui/react'
import { FaRegUserCircle } from 'react-icons/fa'

import { type Coords, Marker } from '@/web/common'
import type { UserPreview } from '@/web/user'

type UserMarkerProps = {
  color?: string
  coords: Coords
  userPreview: UserPreview
}

export const UserMarker = ({ color, coords, userPreview }: UserMarkerProps) => {
  return (
    <Marker
      color={color}
      content={userPreview.name}
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
