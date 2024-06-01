import { getDatabase } from '@/database'

export type LiveQueryClosureReason = 'QUERY_KILLED' | 'SOCKET_CLOSED'

export type LiveQueryResponse<
  T extends Record<string, unknown> = Record<string, unknown>,
> =
  | {
      action: 'CLOSE'
      detail: LiveQueryClosureReason
      result?: never
    }
  | {
      action: 'CREATE' | 'DELETE' | 'UPDATE'
      detail?: never
      result: T
    }

export const liveQuery = async <T extends Record<string, unknown>>({
  listener,
  uuid,
}: {
  listener: (data: { payload: LiveQueryResponse<T>; uuid: string }) => void
  uuid: string
}): Promise<void> => {
  const db = await getDatabase()

  await db.listenLive<T>(uuid, (payload) => {
    listener({ payload, uuid })
  })
}
