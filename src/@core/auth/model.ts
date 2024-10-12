import * as yup from 'yup'

export type User = {
  password: string
  email: string
  name: string
}

export type Auth = {
  password: string
  email: string
}

export const authSchema = {
  password: yup.string().required('Campo requerido'),
  email: yup.string().email('Ingrese un correo válido').required('Campo requerido')
}

export const userIS: User = {
  name: '',
  password: '',
  email: ''
}
