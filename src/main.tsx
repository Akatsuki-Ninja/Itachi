import { connect } from '@/database'
import { renderApp } from '@/web/core'

export const main = async () => {
  await connect({
    database: import.meta.env.VITE_SURREAL_DATABASE,
    namespace: 'main',
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
