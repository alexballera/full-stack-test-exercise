'use client'
//** Base Imports */
import Link from 'next/link'
import { Suspense, useState } from "react"

//** Mui Imports */
import { Google, Visibility, VisibilityOff } from '@mui/icons-material'
import LoginIcon from '@mui/icons-material/Login'
import LoadingButton from '@mui/lab/LoadingButton'
import { CardActions, CardContent, CircularProgress, FormControl, FormHelperText, Grid2, IconButton, InputAdornment, TextField } from "@mui/material"

// ** Third Party Imports
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'

//** Store  && Services Imports */
import AuthLayout from '../auth/layaout/AuthLayout'
import { LoginIS as defaultValues, Login, loginSchema } from '../auth/model'

const schema = yup.object().shape({
  ...loginSchema
})

export const initialState = {
  loadingGoogle: false,
  loadingSubmit: false,
  showPassword: false
}
function LoginPage() {
  const [state, setState] = useState(initialState)

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const onSubmit = (body: Login) => {
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
      <AuthLayout title='Login'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent>
            <Grid2 container spacing={2}>
              <Grid2 size={{ xs: 12 }}>
                <FormControl fullWidth>
                  <Controller
                    name='email'
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        value={value}
                        label='Email'
                        onChange={onChange}
                        type='email'
                        placeholder='correo@correo.com'
                        aria-describedby='correo-electronico'
                        disabled={state.loadingGoogle || state.loadingSubmit}
                        color='secondary'
                        error={Boolean(errors.email)}
                        sx={{ color: 'primary.dark' }}
                      />
                    )}
                  />
                  {errors.email && (
                    <FormHelperText sx={{ color: 'error.main' }} id='validation-schema-moneda'>
                      {errors.email.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid2>
              <Grid2 size={{ xs: 12 }}>
                <FormControl fullWidth>
                  <Controller
                    name='password'
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        value={value}
                        label='Contraseña'
                        onChange={onChange}
                        type={state.showPassword ? 'text' : 'password'}
                        placeholder='Escriba contraseña'
                        aria-describedby='password'
                        disabled={state.loadingGoogle || state.loadingSubmit}
                        color='secondary'
                        sx={{ color: 'primary.dark' }}
                        error={Boolean(errors.password)}
                        slotProps={{
                          input: {
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={() => setState({
                                    ...state,
                                    showPassword: !state.showPassword
                                  })}
                                  onMouseDown={() => setState({
                                    ...state,
                                    showPassword: !state.showPassword
                                  })}
                                >
                                  {state.showPassword ? <Visibility sx={{ color: 'primary.main' }} /> : <VisibilityOff sx={{ color: 'primary.main' }} />}
                                </IconButton>
                              </InputAdornment>
                            )
                          }
                        }}
                      />
                    )}
                  />
                  {errors.password && (
                    <FormHelperText sx={{ color: 'error.main' }} id='validation-schema-moneda'>
                      {errors.password.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid2>
            </Grid2>
          </CardContent>
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
                  loading={state.loadingGoogle}
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
                  loading={state.loadingSubmit}
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