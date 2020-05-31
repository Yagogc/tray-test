import styled, { css } from 'styled-components/macro'

const NavContainer = styled.nav`
  ${() => css`
    border: 1px solid var(--secondary-bg-color);
    background-color: white;
    border-radius: 5px;
    display: flex;
    overflow: hidden;
    justify-content: center;
    margin: 10px 0;
  `}
`
const NavItem = styled.span`
  ${({ isactive }: { isactive: string }) => css`
    flex: 1 1 auto;
    text-transform: uppercase;
    text-align: center;
    padding: 15px 5px;
    border-radius: 5px;
    font-weight: ${isactive === 'true' ? 'bold' : 'regular'};
    background-color: ${isactive === 'true' ? 'lightgray' : 'transparent'};
    &:visited {
      color: inherit;
    }
  `}
`

export { NavContainer, NavItem }
