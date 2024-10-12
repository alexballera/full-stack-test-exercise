'use client'
import SendIcon from '@mui/icons-material/Send'
import LoadingButton from '@mui/lab/LoadingButton'
import { CircularProgress, FormControl, FormHelperText, Grid2, IconButton, InputAdornment, TextField, Typography } from "@mui/material"

// ** Third Party Imports
import { yupResolver } from '@hookform/resolvers/yup'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Suspense, useState } from "react"
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'

interface Login {
  password: string
  email: string
}

const schema = yup.object().shape({
  password: yup.string().required('Campo requerido'),
  email: yup.string().email('Ingrese un correo válido').required('Campo requerido')
})

const defaultValues: Login = {
  password: '',
  email: ''
}

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid2
          container
          spacing={0}
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ minHeight: '100vh', p: 4, backgroundColor: 'primary.dark' }}
        >
          <Grid2
            className="box-shadow"
            size={{ xs: 12, sm: 8, md: 4 }}
            sx={{ p: 2, backgroundColor: 'primary.main' }}
          >
            <Grid2 container spacing={2}>
              <Typography variant="h5" sx={{ mb: 1, color: 'white' }}>Login</Typography>
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
                        color='info'
                        error={Boolean(errors.email)}
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
                        color='info'
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
                                  {showPassword ? <Visibility sx={{ color: 'white' }} /> : <VisibilityOff sx={{ color: 'white' }} />}
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
              <LoadingButton
                fullWidth
                size='large'
                type='submit'
                loading={loading}
                color={'primary'}
                variant={'contained'}
                loadingPosition={'end'}
                endIcon={<SendIcon />}
              >
                Enviar
              </LoadingButton>

            </Grid2>
          </Grid2>
        </Grid2>
      </form>
    </Suspense>
  )
}
export default LoginPage