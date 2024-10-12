'use client'
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react'

type UserProviderProps = {
  children: ReactNode
}

type UserContextTypes = {
  loading: boolean
  loadingGoogle: boolean
  loadingSubmit: boolean
  showPassword: boolean
}

const initialState = {
  loading: false,
  loadingGoogle: false,
  loadingSubmit: false,
  showPassword: false
}

type UserStateTypes = {
  state: UserContextTypes
  setState: Dispatch<SetStateAction<UserContextTypes>>
}

const UserContext = createContext({} as UserStateTypes)

export function UserProvider({ children }: UserProviderProps) {
  //** States */
  const [state, setState] = useState<UserContextTypes>(initialState)

  const values: UserStateTypes = {
    state,
    setState
  }

  return <UserContext.Provider value={{ ...values }}>{children}</UserContext.Provider>
}

export const useUserContext = () => useContext(UserContext)
UserContext.displayName = 'User Context'
export default UserContext
