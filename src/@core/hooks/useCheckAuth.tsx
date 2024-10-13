import { onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'next/router'
import { FirebaseAuth } from '../../../firebase/config'
import { initialState } from '../models'
import { useDispatch } from '../store'
import { logIn, logOut } from '../store/auth'

const useCheckAuth = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const checkAuth = () => {
    onAuthStateChanged(FirebaseAuth, async user => {
      if (!user) {
        router.replace('/home')
        dispatch(logOut(initialState))
      } else {
        router.replace('/dashboard')
        dispatch(logIn(user))
      }
    })
  }

  return {
    checkAuth
  }
}

export default useCheckAuth
