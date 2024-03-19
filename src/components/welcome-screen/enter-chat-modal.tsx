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
import { FormEvent } from 'react'
import { useSetAtom } from 'jotai'
import { userAtom } from '../../store/user.store.ts'

type EnterChatModalProps = {
  open: boolean
  onClose: () => void
}

export const EnterChatModal = ({ open, onClose }: EnterChatModalProps) => {
  const setUser = useSetAtom(userAtom)
  const sign = (event: FormEvent) => {
    event.preventDefault()

    setUser({ name: event.currentTarget.name.value, id: 'unique' })
  }

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
                <Text>You will entered as a temporary user.</Text>
                <Text>Register for stay safe.</Text>
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
