import * as yup from 'yup'

export const authSchema = {
  password: yup.string().required('Campo requerido').min(3, 'Debe contener mínimo 3 caracteres'),
  email: yup.string().email('Ingrese un correo válido').required('Campo requerido')
}
