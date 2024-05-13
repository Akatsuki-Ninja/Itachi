import { useCallback, useState } from 'react'

enum ProgressStatus {
  IDLE = 'IDLE',
  PROCESSING = 'PROCESSING',
  REJECTED = 'REJECTED',
  RESOLVED = 'RESOLVED',
}

export const useProgressStatus = (initialStatus?: ProgressStatus) => {
  const [status, setStatus] = useState<ProgressStatus>(
    initialStatus || ProgressStatus.IDLE
  )

  const isIdle = status === ProgressStatus.IDLE
  const isProcessing = status === ProgressStatus.PROCESSING
  const isRejected = status === ProgressStatus.REJECTED
  const isResolved = status === ProgressStatus.RESOLVED

  const setIdle = useCallback(() => setStatus(ProgressStatus.IDLE), [])
  const setProcessing = useCallback(
    () => setStatus(ProgressStatus.PROCESSING),
    []
  )
  const setRejected = useCallback(() => setStatus(ProgressStatus.REJECTED), [])
  const setResolved = useCallback(() => setStatus(ProgressStatus.RESOLVED), [])
  const reset = () => setStatus(ProgressStatus.IDLE)

  return {
    isIdle,
    isProcessing,
    isRejected,
    isResolved,
    reset,
    setIdle,
    setProcessing,
    setRejected,
    setResolved,
    setStatus,
    status,
  }
}
