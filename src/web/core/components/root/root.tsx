import React from 'react'

import { AppProvider } from './app-provider'
import { AppRouter } from './app-router'

export const Root = () => {
  return (
    <React.StrictMode>
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </React.StrictMode>
  )
}
