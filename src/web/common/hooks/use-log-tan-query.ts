import { useEffect } from 'react'

export const useLogTanQuery = ({
  error,
  isError,
}: {
  error?: Error | null
  isError: boolean
}) => {
  useEffect(() => {
    if (isError) {
      console.error(error)
    }
  }, [isError, error])
}
