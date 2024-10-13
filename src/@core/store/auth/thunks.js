import { initialState } from '@/@core/models'
import { checkingCredentials, isError, logIn, logOut } from '.'
import {
  loginWithEmailPassword,
  logOutFirebase,
  registerUserWithEmailPassword,
  singInWithGoogle
} from '../../../../firebase/providers'

export const checkingAuthentication = () => {
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

export const startCreatingUserWithEmailAndPassword = ({ email, password, name }) => {
  const displayName = name
  return async dispatch => {
    dispatch(checkingCredentials())

    const result = await registerUserWithEmailPassword({ email, password, displayName })

    if (!result.ok) {
      dispatch(logOut(result))
      dispatch(isError(result))
      return
    }
    dispatch(logIn(result))
  }
}

export const startLoginWithEmailPassword = body => {
  return async dispatch => {
    dispatch(checkingCredentials())

    const result = await loginWithEmailPassword(body)

    if (!result.ok) {
      dispatch(logOut(result))
      dispatch(isError(result))
      return
    }
    dispatch(logIn(result))
  }
}

export const startLogOut = () => {
  return async dispatch => {
    await logOutFirebase()

    dispatch(logOut(initialState))
  }
}
