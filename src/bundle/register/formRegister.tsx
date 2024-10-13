/* eslint-disable @typescript-eslint/no-explicit-any */

import { useUserContext } from '@/@core/context/UserContext'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  CardContent,
  FormControl,
  FormHelperText,
  Grid2,
  IconButton,
  InputAdornment,
  TextField
} from '@mui/material'
import { Controller } from 'react-hook-form'

type Props = {
  control: any
  errors: any
}

const FormRegister = (props: Props) => {
  const { control, errors } = props
  const { state, setState } = useUserContext()
  return (
    <CardContent>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12 }}>
          <FormControl fullWidth>
            <Controller
              name='name'
              control={control}
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value}
                  label='Nombre y apellido'
                  onChange={onChange}
                  type='name'
                  placeholder='Escriba nombre y apellido'
                  aria-describedby='nombre-y-apellido'
                  disabled={state.loadingGoogle || state.loadingSubmit}
                  color='secondary'
                  error={Boolean(errors.name)}
                  sx={{ color: 'primary.dark' }}
                />
              )}
            />
            {errors.name && (
              <FormHelperText sx={{ color: 'error.main' }} id='validation-schema-name'>
                {errors.name.message}
              </FormHelperText>
            )}
          </FormControl>
        </Grid2>
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
                        <InputAdornment position='end'>
                          <IconButton
                            aria-label='toggle password visibility'
                            onClick={() =>
                              setState({
                                ...state,
                                showPassword: !state.showPassword
                              })
                            }
                            onMouseDown={() =>
                              setState({
                                ...state,
                                showPassword: !state.showPassword
                              })
                            }
                          >
                            {state.showPassword ? (
                              <Visibility sx={{ color: 'primary.main' }} />
                            ) : (
                              <VisibilityOff sx={{ color: 'primary.main' }} />
                            )}
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
  )
}
export default FormRegister
