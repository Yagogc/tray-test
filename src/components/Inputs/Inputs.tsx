import React from 'react'
import { useForm } from 'react-hook-form'

interface InputProps {
  name: string
  register: ReturnType<typeof useForm>['register']
}
interface InputTextProps extends InputProps {
  type: string
  errors: ReturnType<typeof useForm>['errors']
  isRequired?: boolean
}

const InputText: React.FC<InputTextProps> = ({
  type,
  name,
  register,
  errors,
}) => {
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input type={type} name={name} ref={register} tabIndex={0} />
      <p>{errors[name]?.message}</p>
    </div>
  )
}

interface InputCheckboxProps extends InputProps {}

const InputCheckbox: React.FC<InputCheckboxProps> = ({
  children,
  name,
  register,
}) => {
  return (
    <div>
      <input type="checkbox" name={name} ref={register} tabIndex={0} />
      <label htmlFor={name}>{children}</label>
    </div>
  )
}

export { InputText, InputCheckbox }
