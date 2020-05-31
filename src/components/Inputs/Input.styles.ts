import styled, { css } from 'styled-components/macro'

const InputTextContainer = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
  `}
`

const InputTextLabel = styled.label`
  ${() => css`
    text-transform: uppercase;
  `}
`

const InputTextInput = styled.input`
  ${({ isError }: { isError: boolean }) => css`
    font-size: 18px;
    border: 0 solid ${isError ? 'red' : `var(--secondary-bg-color)`};
    border-bottom-width: 2px;
    transition: all 0.3s ease-in-out;
    padding: 5px 0;
  `}
`

const InputErrorMessage = styled.p`
  ${() => css`
    font-size: 12px;
    font-weight: bold;
    color: red;
    min-height: 15px;
  `}
`

export { InputTextContainer, InputTextLabel, InputTextInput, InputErrorMessage }
