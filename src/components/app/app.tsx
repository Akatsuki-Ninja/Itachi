import { ChakraProvider } from '@chakra-ui/react'
import { WelcomeScreen } from '../welcome-screen/welcome-screen.tsx'

export const App = () => {
  return (
    <main className='app'>
      <ChakraProvider>
        <WelcomeScreen />
      </ChakraProvider>
    </main>
  )
}
