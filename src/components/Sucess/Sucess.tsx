import styled, { css } from 'styled-components/macro'

const SuccessMessage = styled.p`
  ${({ big = false }: { big?: boolean }) => css`
    text-align: center;
    color: green;
    font-size: ${big ? '40px' : '18px'};
    margin: ${big ? '0' : 'inherit'};
  `}
`

export { SuccessMessage }
