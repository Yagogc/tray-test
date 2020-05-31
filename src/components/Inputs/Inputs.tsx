import React from 'react'
import { useForm } from 'react-hook-form'
import {
  InputTextContainer,
  InputTextLabel,
  InputTextInput,
  InputErrorMessage,
} from './Input.styles'
interface InputProps {
  name: string
  register: ReturnType<typeof useForm>['register']
}
interface InputTextProps extends InputProps {
  type: string
  errors: ReturnType<typeof useForm>['errors']
  isRequired?: boolean
  placeholder: string
}

const InputText: React.FC<InputTextProps> = ({
  type,
  name,
  register,
  errors,
  placeholder,
}) => {
  return (
    <InputTextContainer>
      <InputTextLabel htmlFor={name}>{name}</InputTextLabel>
      <InputTextInput
        type={type}
        name={name}
        ref={register}
        tabIndex={0}
        placeholder={placeholder}
        isError={!!errors[name]}
      />
      <InputErrorMessage>
        {errors[name]?.message && (
          <>
            <>{errors[name]?.message}</>
          </>
        )}
      </InputErrorMessage>
    </InputTextContainer>
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
