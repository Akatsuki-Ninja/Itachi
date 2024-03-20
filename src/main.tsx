import React from 'react'
import ReactDOM from 'react-dom/client'

import { AppProvider, AppRouter } from '@/web/core'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <AppRouter />
    </AppProvider>
  </React.StrictMode>
)
