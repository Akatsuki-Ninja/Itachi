import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react'
import { FormEvent, useCallback } from 'react'

import { useSignup } from '@/web/auth'

type EnterChatModalProps = {
  onClose: () => void
  onSuccess: () => void
  open: boolean
}

export const EnterModal = ({
  onClose,
  onSuccess,
  open,
}: EnterChatModalProps) => {
  const { mutate: signup } = useSignup({
    onSuccess,
  })
  const sign = useCallback(
    async (event: FormEvent) => {
      event.preventDefault()

      signup({
        name: (event.currentTarget as any).name.value,
      })
    },
    [signup]
  )

  return (
    <Modal
      isOpen={open}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={sign}>
          <ModalHeader>Signature</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                name='name'
                type='text'
              />
              <FormHelperText>
                <Text>
                  You will entered as a temporary user. Register for stay safe.
                </Text>
              </FormHelperText>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme='blue'
              mr={3}
              type={'submit'}
            >
              Enter
            </Button>
            <Button
              onClick={onClose}
              variant='ghost'
            >
              Close
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}
