import styled, { css } from 'styled-components/macro'

const LayoutContainer = styled.main`
  ${() => css`
    padding: 30px;
    z-index: 10;
    position: relative;
    border-radius: 10px;
    border: 1px solid var(--secondary-bg-color);
    background-color: white;
  `}
`
const Logo = styled.h1`
  ${() => css`
    text-align: center;
    font-size: 48px;
  `}
`

export { LayoutContainer, Logo }
