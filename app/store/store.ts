// ** Redux Imports
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux'

//** APIs */

//** Store Slices */'
import USER from './userSlice'

const reducer = {
  USER
}

const store = configureStore({
  reducer,
  devTools: process.env.NEXT_PUBLIC_ENV !== 'production'
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector
export const useDispatch: () => AppDispatch = useReduxDispatch
export default store