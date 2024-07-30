import { useDisclosure } from '@chakra-ui/react'
import {
  AdvancedMarker,
  InfoWindow,
  Pin,
  useAdvancedMarkerRef,
} from '@vis.gl/react-google-maps'
import type { ReactNode } from 'react'

import type { Location } from '@/common'

type UserMarkerProps = {
  children?: ReactNode
  color?: string
  location: Location
}

export const UserMarker = ({ children, color, location }: UserMarkerProps) => {
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
          {children}
        </InfoWindow>
      ) : (
        <Pin background={color} />
      )}
    </AdvancedMarker>
  )
}
