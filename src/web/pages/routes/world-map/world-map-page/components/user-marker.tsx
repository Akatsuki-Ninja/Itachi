import { Box, Button, Card, Divider, useDisclosure } from '@chakra-ui/react'
import {
  AdvancedMarker,
  InfoWindow,
  Pin,
  useAdvancedMarkerRef,
} from '@vis.gl/react-google-maps'

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
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <AdvancedMarker
      onClick={onOpen}
      position={location}
      ref={markerRef}
      style={{ background: color }}
    >
      {isOpen ? (
        <InfoWindow
          anchor={marker}
          onClose={onClose}
        >
          <Card>
            <Box>{userPreview.name}</Box>
            <Divider />
            <Button
              colorScheme={'blue'}
              size={'xs'}
            >
              Call
            </Button>
          </Card>
        </InfoWindow>
      ) : (
        <Pin background={color} />
      )}
    </AdvancedMarker>
  )
}
