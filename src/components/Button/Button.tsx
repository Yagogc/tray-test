import React from 'react'
import { ButtonContainer } from './Button.styles'

interface ButtonInterface {
  type: 'button' | 'submit' | 'reset'
  back?: boolean
  onClick?: Function
  disabled?: boolean
}

const Button: React.FC<ButtonInterface> = ({
  children,
  type,
  back = false,
  disabled = false,
  onClick = () => null,
}) => {
  return (
    <ButtonContainer
      type={type}
      back={back}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {children}
    </ButtonContainer>
  )
}

export default Button
