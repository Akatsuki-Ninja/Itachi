const TABLE_NAME_REGEXP = /(^.*:)/

export const cutEntityId = (recordId: string): string => {
  const id = recordId.replace(TABLE_NAME_REGEXP, '') // user:some-id -> some-id

  if (id) {
    return id
  }

  throw new Error(`Invalid record id: ${recordId}`)
}
