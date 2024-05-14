import { useCallback, useEffect, useMemo, useState } from 'react'

import {
  listenUsersLocation,
  type LiveAction,
  type UserLocationEntity,
} from '@/core'

export const useLiveUsersLocations = () => {
  const [liveLocationsByUserId, setLiveLocationsByUserId] = useState<{
    [userId: string]: UserLocationEntity
  }>({})
  const liveLocations = useMemo(
    () => Object.values(liveLocationsByUserId),
    [liveLocationsByUserId]
  )

  useListenUsersLocation({
    onChange: useCallback(({ action, payload }) => {
      console.log(action, payload)

      if ((action === 'CREATE' || action === 'UPDATE') && payload) {
        setLiveLocationsByUserId((prevLocations) => ({
          ...prevLocations,
          [payload.id]: payload,
        }))
      }

      if ((action === 'DELETE' || action === 'CLOSE') && payload) {
        setLiveLocationsByUserId((prevLocations) => {
          return Object.entries(prevLocations).reduce(
            (newLocations, [id, locationId]) => {
              if (id !== payload.id) {
                return { ...newLocations, [id]: locationId }
              }

              return newLocations
            },
            { ...prevLocations }
          )
        })
      }
    }, []),
  })

  return {
    liveLocations,
  }
}

const useListenUsersLocation = ({
  onChange,
}: {
  onChange: (data: { action: LiveAction; payload?: UserLocationEntity }) => void
}) => {
  useEffect(() => {
    const unsubscribePromise = listenUsersLocation({ onChange })

    return () => {
      unsubscribePromise.then((unsubscribe) => unsubscribe())
    }
  }, [onChange])
}
