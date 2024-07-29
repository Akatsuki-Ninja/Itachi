import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react'
import { FormEvent, useCallback } from 'react'

import { useSignup } from '@/web/auth'
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalCloseOverlayButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOpenButton,
  ModalOverlay,
} from '@/web/common'

import { useEnterModal } from './use-enter-modal'

export const EnterModal = () => {
  const { onEnter } = useEnterModal()
  const { mutate: signup } = useSignup({
    onSuccess: onEnter,
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
    <Modal>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={sign}>
          <ModalHeader>Signature</ModalHeader>
          <ModalCloseOverlayButton />
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
            <ModalCloseButton>
              <Button variant='ghost'>Close</Button>
            </ModalCloseButton>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}

export {
  ModalCloseButton as EnterModalCloseButton,
  ModalOpenButton as EnterModalOpenButton,
}
