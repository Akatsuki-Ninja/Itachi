import ReactDOM from 'react-dom/client'

import { Root } from '@/web/core'

export const renderApp = (rootElement: HTMLElement) => {
  ReactDOM.createRoot(rootElement).render(<Root />)
}
