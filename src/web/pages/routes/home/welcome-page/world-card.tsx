import { Button, Heading } from '@chakra-ui/react'
import { useNavigate } from '@tanstack/react-router'
import { useCallback } from 'react'

import { WORLD_MAP_PATH } from '../../world-map/world-map-route'

import { WelcomeCard } from './welcome-card'

export const WorldCard = () => {
  const navigate = useNavigate()
  const handleClick = useCallback(async () => {
    await navigate({ to: WORLD_MAP_PATH })
  }, [navigate])

  return (
    <WelcomeCard
      body={
        <Button
          colorScheme='whatsapp'
          onClick={handleClick}
        >
          Open World Map
        </Button>
      }
      header={<Heading size={'xl'}>Explore World</Heading>}
    />
  )
}
