export const saveToken = (token: string) => {
  document.cookie = `token=${token};path=/`
}

export const findToken = () => {
  const cookies = document.cookie.split(';')

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim()
    if (cookie.startsWith('token=')) {
      return cookie.substring('token='.length, cookie.length)
    }
  }

  return null
}

export const getToken = (
  { required = true }: { required?: boolean } = { required: true }
) => {
  const token = findToken()

  if (required && !token) {
    throw new Error('Token is required')
  }

  return token
}

export const removeToken = () => {
  document.cookie = `token=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`
}
