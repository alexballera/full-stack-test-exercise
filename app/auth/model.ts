import * as yup from 'yup'

export type Login = {
  password: string
  email: string
}

export type Register = Login & {
  name: string
}

export const loginSchema = {
    password: yup.string().required('Campo requerido'),
    email: yup.string().email('Ingrese un correo válido').required('Campo requerido')
}

export const LoginIS: Login = {
  password: '',
  email: ''
}

export const RegisterIS: Register = {
  name: '',
  password: '',
  email: ''
}