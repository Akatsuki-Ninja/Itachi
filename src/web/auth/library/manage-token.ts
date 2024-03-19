export const saveToken = (token: string) => {
  document.cookie = `token=${token};path=/`
}

export const getToken = () => {
  const cookies = document.cookie.split(';')
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim()
    if (cookie.startsWith('token=')) {
      return cookie.substring('token='.length, cookie.length)
    }
  }

  return null
}

export const removeToken = () => {
  document.cookie = `token=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`
}
