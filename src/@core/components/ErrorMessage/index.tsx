import { useUserContext } from '@/@core/context/UserContext'
import { initialState } from '@/@core/models'
import { useDispatch } from '@/@core/store'
import { logOut } from '@/@core/store/auth'
import { Alert, Snackbar, SnackbarCloseReason } from '@mui/material'
import { SyntheticEvent, useEffect, useState } from 'react'

type ErrorMessageProps = {
  status: 'checking' | 'not-authenticated' | 'authenticated' | 'error'
  errorMessage?: string | null
}

const ErrorMessage = (props: ErrorMessageProps) => {
  const { status, errorMessage } = props
  const [open, setOpen] = useState(false)
  const { state, setState } = useUserContext()
  const dispatch = useDispatch()

  useEffect(() => {
    if (status === 'error') setOpen(true)
    setState({
      ...state,
      loadingGoogle: false,
      loadingSubmit: false
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status])

  const handleShowMessage = () => {
    console.log(errorMessage)
    switch (errorMessage) {
      case 'Firebase: Error (auth/email-already-in-use).':
        return 'Este correo ya está en uso'

      default:
        return 'Ha ocurrido un error inesperado'
    }
  }

  const handleClose = (event?: SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return
    }
    dispatch(logOut(initialState))
    setOpen(false)
  }

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity='error' variant='filled' sx={{ width: '100%' }}>
        {handleShowMessage()}
      </Alert>
    </Snackbar>
  )
}
export default ErrorMessage
