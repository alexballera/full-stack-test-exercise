import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { FirebaseAuth } from './config'

const googleProvider = new GoogleAuthProvider()

export const singInWithGoogle = async() => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider)
    const credentials = GoogleAuthProvider.credentialFromResult(result)

    const {accessToken} = credentials

    const {displayName, email, photoURL, uid} = result.user
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
      accessToken
    }

  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message
    return {
      ok: false,
      errorCode,
      errorMessage
    }
  }
}

export const registerUserWithEmailPassword = async ({email, password, displayName}) => {
  try {
    const response = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
    const {uid, photoURL, accessToken} = response.user

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
      accessToken
    }
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message
    return {
      ok: false,
      errorCode,
      errorMessage
    }
  }
}