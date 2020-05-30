import React from 'react'
import { useForm } from 'react-hook-form'

interface InputProps {
  type: string
  name: string
  register: ReturnType<typeof useForm>['register']
  errors: ReturnType<typeof useForm>['errors']
  isRequired?: boolean
}

const Input: React.FC<InputProps> = ({ type, name, register, errors }) => {
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input type={type} name={name} ref={register} tabIndex={0} />
      <p>{errors[name]?.message}</p>
    </div>
  )
}

export { Input }
