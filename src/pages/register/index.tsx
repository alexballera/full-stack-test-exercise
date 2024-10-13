//** Base Imports */
import Link from 'next/link'
import { Suspense, useEffect } from 'react'

//** Mui Imports */
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import LoadingButton from '@mui/lab/LoadingButton'
import { CardActions, CircularProgress, Grid2, Typography } from '@mui/material'

//** Store  && Services Imports */
import { useUserContext } from '@/@core/context/UserContext'
import { userIS as defaultValues, User } from '@/@core/models/userModel'
import { useDispatch, useSelector } from '@/@core/store'
import { startCreatingUserWithEmailAndPassword } from '@/@core/store/auth'

// ** Third Party Imports
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

//** Custom Components Imports */
import AuthLayout from '@/@core/auth/layaout/AuthLayout'
import ErrorMessage from '@/@core/components/ErrorMessage'
import useCheckAuth from '@/@core/hooks/useCheckAuth'
import { authSchema } from '@/@core/shared'
import FormRegister from '@/bundle/register/formRegister'

const schema = yup.object().shape({
  ...authSchema,
  name: yup.string().required('Campo requerido')
})
function RegisterPage() {
  const { state, setState } = useUserContext()
  const { checkAuth } = useCheckAuth()
  const dispatch = useDispatch()
  const router = useRouter()

  const {
    AUTH: { status, errorMessage }
  } = useSelector(state => state)

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
    checkAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
  const onSubmit = (body: User) => {
    setState({
      ...state,
      loadingSubmit: true
    })
    const { email, password, name } = body
    dispatch(startCreatingUserWithEmailAndPassword({ email, password, name }))
  }

  return (
    <Suspense fallback={<CircularProgress disableShrink sx={{ mt: 6 }} />}>
      {status === 'error' && <ErrorMessage status={status} errorMessage={errorMessage} />}
      <AuthLayout
        title='Registro'
        metaTitle='Ray Registro Fullstack Test'
        metaDescription='Ray Registro Fullstack Test Descripción'
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormRegister control={control} errors={errors} />

          <CardActions sx={{ p: 2 }}>
            <Grid2
              container
              direction={'row'}
              alignItems={'center'}
              justifyContent={'flex-end'}
              size={{ xs: 12 }}
              spacing={2}
            >
              <Grid2 size={{ xs: 12 }}>
                <LoadingButton
                  fullWidth
                  size='large'
                  type='submit'
                  loading={state.loadingSubmit}
                  color={'primary'}
                  variant={'contained'}
                  loadingPosition={'end'}
                  endIcon={<PersonAddAltIcon />}
                >
                  Crear cuenta
                </LoadingButton>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 9 }} sx={{ textAlign: 'right' }}>
                <Typography component='span' sx={{ mr: 1, color: 'primary.light' }}>
                  ¿Ya tienes cuenta?
                </Typography>
                <Link href='/login'>Ingresar aquí</Link>
              </Grid2>
            </Grid2>
          </CardActions>
        </form>
      </AuthLayout>
    </Suspense>
  )
}
export default RegisterPage
