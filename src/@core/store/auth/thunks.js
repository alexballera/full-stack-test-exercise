import { checkingCredentials, logIn, logOut } from '.'
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
    console.log(result)
    if (!result.ok) return logOut(result.errorMessage)
    dispatch(logIn(result))
  }
}
