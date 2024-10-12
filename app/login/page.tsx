'use client'
import LoginIcon from '@mui/icons-material/Login'
import LoadingButton from '@mui/lab/LoadingButton'
import { Card, CardActions, CardContent, CircularProgress, FormControl, FormHelperText, Grid2, IconButton, InputAdornment, TextField, Typography } from "@mui/material"

// ** Third Party Imports
import { yupResolver } from '@hookform/resolvers/yup'
import { Google, Visibility, VisibilityOff } from '@mui/icons-material'
import Link from 'next/link'
import { Suspense, useState } from "react"
import { Controller, useForm } from 'react-hook-form'
import { defaultValues, Login, schema } from './model'

function LoginPage() {
  const [loading, setLoading] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)

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
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      console.log(body)
    }, 2000)
  }

  if (loading) return <CircularProgress disableShrink sx={{ mt: 6 }} />

  return (
    <Suspense fallback={<CircularProgress disableShrink sx={{ mt: 6 }} />}>

      <Grid2
        container
        spacing={0}
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ minHeight: '100vh', p: 4, backgroundColor: 'primary.dark' }}
      >
        <Grid2
          size={{ xs: 12, sm: 8, md: 4 }}
          sx={{ backgroundColor: 'primary.main', borderRadius: 2 }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Card>
              <CardContent>
                <Grid2 container spacing={2}>

                  <Typography variant="h5" sx={{ mb: 1, color: 'primary.dark' }}>Login</Typography>
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
                            placeholder='Escriba correo electrónico'
                            aria-describedby='correo-electronico'
                            disabled={loading}
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
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Escriba contraseña'
                            aria-describedby='password'
                            disabled={loading}
                            color='secondary'
                            sx={{ color: 'primary.dark' }}
                            error={Boolean(errors.password)}
                            slotProps={{
                              input: {
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      aria-label="toggle password visibility"
                                      onClick={() => setShowPassword(!showPassword)}
                                      onMouseDown={() => setShowPassword(!showPassword)}
                                    >
                                      {showPassword ? <Visibility sx={{ color: 'primary.main' }} /> : <VisibilityOff sx={{ color: 'primary.main' }} />}
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
              <CardActions>
                <Grid2
                  container
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"flex-end"}
                  size={{ xs: 12 }}
                  spacing={2}
                >
                  <Grid2 size={{ xs: 12, md: 6 }}>
                    <LoadingButton
                      fullWidth
                      size='large'
                      type='submit'
                      loading={loading}
                      color={'primary'}
                      variant={'contained'}
                      loadingPosition={'end'}
                      endIcon={<Google />}
                    >
                      Google
                    </LoadingButton>
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 6 }}>
                    <LoadingButton
                      fullWidth
                      size='large'
                      type='submit'
                      loading={loading}
                      color={'primary'}
                      variant={'contained'}
                      loadingPosition={'end'}
                      endIcon={<LoginIcon />}
                    >
                      Login
                    </LoadingButton>
                  </Grid2>
                  <Grid2 size={{ xs: 8 }} sx={{ textAlign: 'right' }}>
                    <Link href="/register">Crear una cuenta</Link>
                  </Grid2>
                </Grid2>
              </CardActions>
            </Card>
          </form >
        </Grid2>
      </Grid2>
    </Suspense >
  )
}
export default LoginPage