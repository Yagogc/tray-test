import styled, { css } from 'styled-components/macro'

const LayoutContainer = styled.main`
  ${() => css`
    max-width: 768px;
    width: 100%;
    margin: 0 auto;
    position: relative;
  `}
`

const LayoutContent = styled.div`
  ${() => css`
    padding: 30px;
    z-index: 10;
    position: relative;
  `}
`

const LayoutContentBackground = styled.div`
  ${() => css`
    z-index: 5;
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: 1px solid var(--secondary-bg-color);
  `}
`

const Logo = styled.h1`
  ${() => css`
    text-align: center;
    font-size: 48px;
  `}
`

export { LayoutContainer, LayoutContent, LayoutContentBackground, Logo }
