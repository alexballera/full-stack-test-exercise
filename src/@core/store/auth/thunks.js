import { checkingCredentials, isError, logIn, logOut } from '.'
import { registerUserWithEmailPassword, singInWithGoogle } from '../../../../firebase/providers'

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

export const startCreatingUserWithEmailAndPassword = body => {
  return async dispatch => {
    dispatch(checkingCredentials())

    const result = await registerUserWithEmailPassword(body)

    if (!result.ok || undefined) {
      dispatch(logOut(result))
      dispatch(isError(result))
      return
    }
    dispatch(logIn(result))
  }
}
