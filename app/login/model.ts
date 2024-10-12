import * as yup from 'yup'

export interface Login {
  password: string
  email: string
}

export const schema = yup.object().shape({
  password: yup.string().required('Campo requerido'),
  email: yup.string().email('Ingrese un correo válido').required('Campo requerido')
})

export const defaultValues: Login = {
  password: '',
  email: ''
}