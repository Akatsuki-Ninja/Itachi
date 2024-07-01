import { useCallback, useEffect, useMemo, useState } from 'react'

import type { UserLocationDto } from '@/core'
import { listenUsersLocations } from '@/store'

export const useLiveUsersLocations = () => {
  const [liveLocationsByUserId, setLiveLocationsByUserId] = useState<{
    [userId: string]: UserLocationDto
  }>({})
  const liveLocations = useMemo(
    () => Object.values(liveLocationsByUserId),
    [liveLocationsByUserId]
  )

  // @todo: fake pulling with setInterval and simple select
  useListenUsersLocation({
    onChange: useCallback(({ payload, type }) => {
      if (type === 'save') {
        setLiveLocationsByUserId((prevLocations) => ({
          ...prevLocations,
          [payload.user.id]: payload,
        }))
      }

      if (type === 'delete') {
        setLiveLocationsByUserId((prevLocations) => {
          return Object.entries(prevLocations).reduce(
            (newLocations, [userId, location]) => {
              if (userId !== payload.user.id) {
                return { ...newLocations, [userId]: location }
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
  onChange: (event: {
    payload: UserLocationDto
    type: 'delete' | 'save'
  }) => void
}) => {
  useEffect(() => {
    const unsubscribePromise = listenUsersLocations({
      onChange: ({ payload, type }) => {
        onChange({
          payload: {
            ...payload,
            location: {
              lat: payload.location[1],
              lng: payload.location[0],
            },
          },
          type,
        })
      },
    })

    return () => {
      unsubscribePromise.then((unsubscribe) => unsubscribe())
    }
  }, [onChange])
}
