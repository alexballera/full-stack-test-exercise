//** Base Imports */
import { Metadata } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Suspense, useEffect, useMemo } from 'react'

//** Mui Imports */
import { Google } from '@mui/icons-material'
import LoginIcon from '@mui/icons-material/Login'
import LoadingButton from '@mui/lab/LoadingButton'
import { CardActions, CircularProgress, Grid2 } from '@mui/material'

// ** Third Party Imports
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

//** Store  && Services Imports */
import { useUserContext } from '@/@core/context/UserContext'
import { Auth, userIS as defaultValues } from '@/@core/models/userModel'
import { useDispatch, useSelector } from '@/@core/store'
import { startGoogleSign, startLoginWithEmailPassword } from '@/@core/store/auth'

//** Custom Components Imports */
import AuthLayout from '@/@core/auth/layaout/AuthLayout'
import ErrorMessage from '@/@core/components/ErrorMessage'
import { authSchema } from '@/@core/shared'
import FormLogin from '@/bundle/login/formLogin'

export const metadata: Metadata = {
  title: 'Fullstack Test',
  description: 'Fullstack Test App'
}

const schema = yup.object().shape({
  ...authSchema
})

function LoginPage() {
  const { state, setState } = useUserContext()

  //** Hooks */
  const dispatch = useDispatch()
  const router = useRouter()
  const {
    AUTH: { status }
  } = useSelector(state => state)

  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  useEffect(() => {
    setState({
      ...state,
      loadingGoogle: false,
      loadingSubmit: false
    })
    if (status === 'authenticated') {
      router.replace('/dashboard')
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, status])

  const handleGoogleSignIn = () => {
    setState({
      ...state,
      loadingGoogle: true
    })
    dispatch(startGoogleSign())
  }

  const onSubmit = (body: Auth) => {
    setState({
      ...state,
      loadingSubmit: true
    })
    dispatch(startLoginWithEmailPassword(body))
  }

  return (
    <Suspense fallback={<CircularProgress disableShrink sx={{ mt: 6 }} />}>
      {status === 'error' && <ErrorMessage status={status} />}
      <AuthLayout
        title='Login'
        metaTitle='Ray Login Fullstack Test'
        metaDescription='Ray Login Fullstack Test Descripción'
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='animate__animated animate__fadeIn animate__faster'
        >
          <FormLogin control={control} errors={errors} />
          <CardActions sx={{ p: 2 }}>
            <Grid2
              container
              direction={'row'}
              alignItems={'center'}
              justifyContent={'flex-end'}
              size={{ xs: 12 }}
              spacing={2}
            >
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <LoadingButton
                  fullWidth
                  size='large'
                  type='button'
                  loading={state.loadingGoogle && status === 'checking'}
                  color={'primary'}
                  variant={'contained'}
                  loadingPosition={'end'}
                  endIcon={<Google />}
                  onClick={handleGoogleSignIn}
                  disabled={isAuthenticating}
                >
                  Google
                </LoadingButton>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <LoadingButton
                  fullWidth
                  size='large'
                  type='submit'
                  loading={state.loadingSubmit && status === 'checking'}
                  color={'primary'}
                  variant={'contained'}
                  loadingPosition={'end'}
                  endIcon={<LoginIcon />}
                  disabled={isAuthenticating}
                >
                  Login
                </LoadingButton>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 8 }} sx={{ textAlign: 'right' }}>
                <Link href='/register'>Crear una cuenta</Link>
              </Grid2>
            </Grid2>
          </CardActions>
        </form>
      </AuthLayout>
    </Suspense>
  )
}
export default LoginPage
