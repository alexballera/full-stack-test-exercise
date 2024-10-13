import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth'
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
    return {
      ok: false,
      errorCode: error.errorCode,
      errorMessage: error.errorMessage
    }
  }
}

export const registerUserWithEmailPassword = async ({email, password, displayName}) => {
  try {
    const response = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
    const {uid, photoURL, accessToken} = response.user

    await updateProfile(FirebaseAuth.currentUser, {displayName})

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
      accessToken
    }
  } catch (error) {
    return {
      ok: false,
      errorCode: error.errorCode,
      errorMessage: error.errorMessage
    }
  }
}

export const loginWithEmailPassword = async ({email, password}) => {
  try {
    const response = await signInWithEmailAndPassword(FirebaseAuth, email, password)

    const {displayName, photoURL, uid, } = response.user

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid
    }
  
  } catch (error) {
    return {
      ok: false,
      errorCode: error.errorCode,
      errorMessage: error.errorMessage
    }
  }
}

export const logOutFirebase = async () => {
  return await FirebaseAuth.signOut()
}
 