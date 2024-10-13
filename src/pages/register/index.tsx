//** Base Imports */
import Link from 'next/link'
import { Suspense } from 'react'

//** Mui Imports */
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import LoadingButton from '@mui/lab/LoadingButton'
import { CardActions, CircularProgress, Grid2, Typography } from '@mui/material'

// ** Third Party Imports
import AuthLayout from '@/@core/auth/layaout/AuthLayout'
import { useUserContext } from '@/@core/context/UserContext'
import { authSchema, userIS as defaultValues, User } from '@/@core/models/userModel'
import FormRegister from '@/bundle/register/formRegister'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

//** Store  && Services Imports */

const schema = yup.object().shape({
  ...authSchema,
  name: yup.string().required('Campo requerido')
})
function RegisterPage() {
  const { state, setState } = useUserContext()

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const onSubmit = (body: User) => {
    setState({
      ...state,
      loadingSubmit: true
    })
    setTimeout(() => {
      setState({
        ...state,
        loadingSubmit: false
      })
      console.log(body)
    }, 2000)
  }

  return (
    <Suspense fallback={<CircularProgress disableShrink sx={{ mt: 6 }} />}>
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
