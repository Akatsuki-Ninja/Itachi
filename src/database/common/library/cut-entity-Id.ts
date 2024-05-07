const tableNameRegexp = /(^.*:)/

export const cutEntityId = (recordId: string) => {
  const id = recordId.replace(tableNameRegexp, '')

  if (!id) {
    throw new Error(`Invalid record id: ${recordId}`)
  }

  return id
}
