import { connectStore } from '@/store'

import type { ConnectionOptions } from '../../../database/library/connect'

export const connectTestStore = async (
  connectionOptions: Partial<ConnectionOptions> = {}
) => {
  return await connectStore({
    namespace: `test-${Math.random()}`,
    ...connectionOptions,
  })
}
