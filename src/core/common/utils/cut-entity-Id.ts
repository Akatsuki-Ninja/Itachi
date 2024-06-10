const TABLE_NAME_REGEXP = /(^.*:)/

export const cutEntityId = (recordId: string) => {
  const id = recordId.replace(TABLE_NAME_REGEXP, '')

  if (id) {
    return id
  }

  throw new Error(`Invalid record id: ${recordId}`)
}
