export type AuthDTO = {
  status: 'checking' | 'not-authenticated' | 'authenticated'
  uid: string | null
  email: string | null
  displayName: string | null
  photoURL: string | null
  errorMessage: string | null
  accessToken: string | null
}

export const initialState: AuthDTO = {
  status: 'not-authenticated',
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
  accessToken: null
}
