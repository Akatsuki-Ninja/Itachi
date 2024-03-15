import { Box, Card, Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

type WelcomeCardProps = {
  header?: ReactNode
  body?: ReactNode
}

export const WelcomeCard = ({ header, body }: WelcomeCardProps) => {
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
