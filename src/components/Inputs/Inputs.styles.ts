import styled, { css } from 'styled-components/macro'

const InputTextContainer = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
  `}
`

const InputTextLabel = styled.label`
  ${({ isRequired }: { isRequired?: boolean }) => css`
    text-transform: uppercase;
    &:after {
      display: ${isRequired ? 'inline-block' : 'none'};
      content: '*';
      color: red;
    }
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

const InputCheckboxContainer = styled.div`
  ${() => css`
    margin-bottom: 10px;
  `}
`

const InputCheckboxLabel = styled.label`
  ${() => css`
    margin-left: 10px;
  `}
`

export {
  InputTextContainer,
  InputTextLabel,
  InputTextInput,
  InputErrorMessage,
  InputCheckboxContainer,
  InputCheckboxLabel,
}
