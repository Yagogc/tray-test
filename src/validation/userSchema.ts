import { string, object } from 'yup'

const userSchema = object().shape({
  name: string()
    .required('Name is required')
    .min(2, 'Name must have 2 characters at least')
    .max(35, 'Name must have less than 35 characters'),
  role: string().max(35, 'Role must have less than 35 characters'),
  email: string()
    .email('Must be a valid email')
    .required('Email is required')
    .max(35, 'Email must have less than 35 characters'),
  password: string()
    .required('Password is required')
    .min(9, 'Password must have 9 characters at least')
    .matches(
      new RegExp('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])'),
      'The password must have at least 1 number, 1 uppercase and 1 lowercase character'
    ),
})

export default userSchema
