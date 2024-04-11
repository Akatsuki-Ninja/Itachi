import { ChakraProvider } from '@chakra-ui/react'
import { QueryClientProvider } from '@tanstack/react-query'
import { type ReactNode } from 'react'

import { queryClient } from './library/query-client'

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ChakraProvider>
  )
}
