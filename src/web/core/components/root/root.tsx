import React from 'react'

import { Router } from '@/web/pages'

import { AppProvider } from './app-provider'

export const Root = () => {
  return (
    <React.StrictMode>
      <AppProvider>
        <Router />
      </AppProvider>
    </React.StrictMode>
  )
}
