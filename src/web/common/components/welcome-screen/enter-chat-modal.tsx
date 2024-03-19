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
import { useSignupMutation } from '@/web/auth/hooks/use-signup.mutation.ts'

type EnterChatModalProps = {
  open: boolean
  onClose: () => void
}

export const EnterChatModal = ({ open, onClose }: EnterChatModalProps) => {
  const { mutate: signup } = useSignupMutation({
    onSuccess: onClose,
  })

  const sign = async (event: FormEvent) => {
    event.preventDefault()

    signup({
      name: (event.currentTarget as any).name.value,
    })
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
