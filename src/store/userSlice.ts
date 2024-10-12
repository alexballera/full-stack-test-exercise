import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User, userIS } from '../auth/model'

const initialState = {
  user: userIS
}

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<User>) => {
      state = {
        ...state,
        user: action.payload
      }

      return { ...state }
    },
    cleanUserData: state => {
      state = {
        ...state,
        user: initialState.user
      }

      return { ...state }
    }
  }
})

export const { setUserData, cleanUserData } = userSlice.actions
export default userSlice.reducer
