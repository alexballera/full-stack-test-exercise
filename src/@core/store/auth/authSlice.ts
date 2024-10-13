import { AuthDTO, initialState } from '@/@core/models'
import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    logIn: (state: AuthDTO, { payload }) => {
      state.status = 'authenticated'
      state.accessToken = payload.accessToken
      state.displayName = payload.displayName
      state.email = payload.email
      state.uid = payload.uid
      state.photoURL = payload.photoURL
      state.errorMessage = null
    },
    logOut: (state: AuthDTO, { payload }) => {
      state.status = 'not-authenticated'
      state.accessToken = null
      state.displayName = null
      state.email = null
      state.uid = null
      state.photoURL = null
      state.errorMessage = payload.errorMessage
      state.errorCode = payload.errorCode
    },
    isError: (state: AuthDTO, { payload }) => {
      state.status = 'error'
      state.accessToken = null
      state.displayName = null
      state.email = null
      state.uid = null
      state.photoURL = null
      state.errorMessage = payload.errorMessage
      state.errorCode = payload.errorCode
    },
    checkingCredentials: (state: AuthDTO) => {
      state.status = 'checking'
    }
  }
})

export const { checkingCredentials, logOut, logIn, isError } = authSlice.actions
export default authSlice.reducer
