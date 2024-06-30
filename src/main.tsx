import { connectStore } from '@/store'
import { renderApp } from '@/web'

export const main = async () => {
  await connectStore({
    database: import.meta.env.VITE_SURREAL_DATABASE,
    namespace: import.meta.env.VITE_SURREAL_NC,
    url: import.meta.env.VITE_SURREAL_URL,
  })

  bootWebApp()
}

const bootWebApp = () => {
  const root = document.getElementById('root')

  if (root) {
    renderApp(root)

    return
  }

  throw new Error('Element with id "root" not found')
}
