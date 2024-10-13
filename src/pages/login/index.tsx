//** Base Imports */
import { Metadata } from 'next'
import Link from 'next/link'
import { Suspense, useMemo } from 'react'

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
import AuthLayout from '@/@core/auth/layaout/AuthLayout'
import { useUserContext } from '@/@core/context/UserContext'
import { Auth, authSchema, userIS as defaultValues } from '@/@core/models/userModel'
import { useDispatch, useSelector } from '@/@core/store'
import { checkingAuthentication, startGoogleSign } from '@/@core/store/auth'
import FormLogin from '@/bundle/login/formLogin'

export const metadata: Metadata = {
  title: 'Fullstack Test',
  description: 'Fullstack Test App'
}

const schema = yup.object().shape({
  ...authSchema
})

function LoginPage() {
  const { state } = useUserContext()

  //** Hooks */
  const dispatch = useDispatch()
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

  const handleGoogleSignIn = () => {
    dispatch(startGoogleSign())
  }

  const onSubmit = (body: Auth) => {
    dispatch(checkingAuthentication(body))
  }

  return (
    <Suspense fallback={<CircularProgress disableShrink sx={{ mt: 6 }} />}>
      <AuthLayout
        title='Login'
        metaTitle='Ray Login Fullstack Test'
        metaDescription='Ray Login Fullstack Test Descripción'
      >
        <form onSubmit={handleSubmit(onSubmit)}>
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
                  loading={state.loadingGoogle}
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
                  loading={state.loadingSubmit || status === 'checking'}
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
