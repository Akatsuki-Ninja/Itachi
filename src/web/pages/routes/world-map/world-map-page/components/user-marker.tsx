import { Box, Card, Divider, Icon, useDisclosure } from '@chakra-ui/react'
import {
  AdvancedMarker,
  InfoWindow,
  Pin,
  useAdvancedMarkerRef,
} from '@vis.gl/react-google-maps'
import { FaRegUserCircle } from 'react-icons/fa'

import type { Location } from '@/common'
import type { UserPreview } from '@/web/user'

type UserMarkerProps = {
  color?: string
  location: Location
  userPreview: UserPreview
}

export const UserMarker = ({
  color,
  location,
  userPreview,
}: UserMarkerProps) => {
  const [markerRef, marker] = useAdvancedMarkerRef()
  const { isOpen, onToggle } = useDisclosure()

  return (
    <AdvancedMarker
      onClick={onToggle}
      position={location}
      ref={markerRef}
      style={{ background: color }}
    >
      {isOpen ? (
        <InfoWindow anchor={marker}>
          <Card>
            <Box>{userPreview.name}</Box>
            <Divider />
            <Icon
              as={FaRegUserCircle}
              boxSize={10}
            />
          </Card>
        </InfoWindow>
      ) : (
        <Pin />
      )}
    </AdvancedMarker>
  )
}
