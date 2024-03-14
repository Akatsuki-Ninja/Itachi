import {Box, Card, Flex} from "@chakra-ui/react";
import {ReactNode} from "react";

type WelcomeCardProps = {
  header?: ReactNode
  body?: ReactNode
}

export const WelcomeCard = ({header, body}: WelcomeCardProps) => {
  return (
    <Card h={'100%'}>
      <Flex direction={'column'} h={'100%'} align={'center'}>
        <Flex h={'40%'} alignItems={'flex-end'}>{header}</Flex>
        <Box pt={14}>
          {body}
        </Box>
      </Flex>
    </Card>
  )
}