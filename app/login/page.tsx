'use client'
import SendIcon from '@mui/icons-material/Send'
import LoadingButton from '@mui/lab/LoadingButton'
import { FormControl, FormHelperText, Grid2, TextField, Typography } from "@mui/material"

// ** Third Party Imports
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from "react"
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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid2
        container
        spacing={0}
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
      >
        <Grid2
          className="box-shadow"
        >
          <Typography variant="h5" sx={{ mb: 1 }}>Login</Typography>
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
                    label='Password'
                    onChange={onChange}
                    type='password'
                    placeholder='Escriba contraseña'
                    aria-describedby='password'
                    disabled={loading}
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
    </form>
  )
}
export default LoginPage