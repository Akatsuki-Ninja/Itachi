import { Box, Card, Flex } from '@chakra-ui/react'
import { type ReactNode } from 'react'

type WelcomeCardProps = {
  body?: ReactNode
  header?: ReactNode
}

export const WelcomeCard = ({ body, header }: WelcomeCardProps) => {
  return (
    <Card h={'100%'}>
      <Flex
        align={'center'}
        direction={'column'}
        h={'100%'}
      >
        <Flex
          alignItems={'flex-end'}
          h={'40%'}
        >
          {header}
        </Flex>
        <Box pt={14}>{body}</Box>
      </Flex>
    </Card>
  )
}
