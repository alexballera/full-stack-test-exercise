//** Base Imports */
import Link from 'next/link'
import { Suspense, useState } from "react"

//** Mui Imports */
import { Google } from '@mui/icons-material'
import LoginIcon from '@mui/icons-material/Login'
import LoadingButton from '@mui/lab/LoadingButton'
import { CardActions, CircularProgress, Grid2 } from "@mui/material"

// ** Third Party Imports
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

//** Store  && Services Imports */
import AuthLayout from '@/auth/layaout/AuthLayout'
import { Auth, authSchema, userIS as defaultValues } from '@/auth/model'
import FormLogin from '@/bundle/login/components/formLogin'
import { Metadata } from 'next'
import Head from 'next/head'


export const metadata: Metadata = {
  title: "Fullstack Test",
  description: "Fullstack Test App",
};

const schema = yup.object().shape({
  ...authSchema
})

function LoginPage() {
  const [state, setState] = useState({
    loadingGoogle: false,
    loadingSubmit: false,
    showPassword: false
  })

  //** Hooks */

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const onSubmit = (body: Auth) => {
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
      <Head>
        <title>Ray Login Fullstack Test</title>
        <meta
          name="description"
          content="Ray Login Fullstack Test Descripción"
        />
      </Head>
      <AuthLayout title='Login'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormLogin control={control} errors={errors} />
          <CardActions sx={{ p: 2 }}>
            <Grid2
              container
              direction={"row"}
              alignItems={"center"}
              justifyContent={"flex-end"}
              size={{ xs: 12 }}
              spacing={2}
            >
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <LoadingButton
                  fullWidth
                  size='large'
                  type='submit'
                  loading={state.loadingGoogle || state.loadingSubmit}
                  color={'primary'}
                  variant={'contained'}
                  loadingPosition={'end'}
                  endIcon={<Google />}
                >
                  Google
                </LoadingButton>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <LoadingButton
                  fullWidth
                  size='large'
                  type='submit'
                  loading={state.loadingGoogle || state.loadingSubmit}
                  color={'primary'}
                  variant={'contained'}
                  loadingPosition={'end'}
                  endIcon={<LoginIcon />}
                >
                  Login
                </LoadingButton>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 8 }} sx={{ textAlign: 'right' }}>
                <Link href="/register">Crear una cuenta</Link>
              </Grid2>
            </Grid2>
          </CardActions>
        </form >
      </AuthLayout>
    </Suspense >
  )
}
export default LoginPage