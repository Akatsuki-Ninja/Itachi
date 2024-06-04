import { useEffect } from 'react'

import { kill, listenUsersLocation } from '@/core'

export const useListenUsersLocation = () => {
  useEffect(() => {
    const effect = () => {
      let uuid: string

      listenUsersLocation().then((UUID) => {
        uuid = UUID
      })

      return () => {
        kill(uuid)
      }
    }

    const unsubscribe = effect()

    return () => {
      unsubscribe()
    }
  }, [])
}