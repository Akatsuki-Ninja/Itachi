import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { after, before, describe, it } from 'node:test'

import { close, query } from '@/database'
import { connectTestStore } from '@/store'

const namespace = 'playground'

describe('Playground', () => {
  before(async () => {
    const migration = (
      await readFile(join(__dirname, './init.surql'))
    ).toString()

    await connectTestStore({
      namespace,
    })
    await query(migration)
  })

  after(async () => {
    // await query(`REMOVE NAMESPACE ${namespace}`)
    await close()
  })

  it('Should return an empty array', () => {
    //
  })
})
