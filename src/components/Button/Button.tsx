import React from 'react'
import { ButtonContainer } from './Button.styles'

interface ButtonInterface {
  type: 'button' | 'submit' | 'reset'
  back?: boolean
  onClick?: Function
}

const Button: React.FC<ButtonInterface> = ({
  children,
  type,
  back = false,
  onClick = () => null,
}) => {
  return (
    <ButtonContainer type={type} back={back} onClick={() => onClick()}>
      {children}
    </ButtonContainer>
  )
}

export default Button
