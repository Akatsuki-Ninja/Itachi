import { atom } from 'jotai'

type TemporalUser = {
  id: string
  name: string
}

type User = {
  id: string
  name: string
  email: string
}

export const userAtom = atom<User | TemporalUser | undefined>(undefined)
