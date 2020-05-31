import styled, { css } from 'styled-components/macro'

const ErrorMessage = styled.p`
  ${() => css`
    text-align: center;
    color: red;
    font-size: 18px;
    padding: 10px;
    border: 2px solid red;
  `}
`

export { ErrorMessage }
