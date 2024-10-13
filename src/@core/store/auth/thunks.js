import { checkingCredentials, isError, logIn, logOut } from '.'
import { singInWithGoogle } from '../../../../firebase/providers'

export const checkingAuthentication = body => {
  console.log('body', body)
  return async dispatch => {
    dispatch(checkingCredentials())
  }
}

export const startGoogleSign = () => {
  return async dispatch => {
    dispatch(checkingCredentials())

    const result = await singInWithGoogle()
    if (!result.ok) {
      dispatch(logOut(result))
      dispatch(isError(result))
      return
    }
    dispatch(logIn(result))
  }
}
