import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import routes from '../../routes'
import { NavContainer, NavItem } from './Nav.styles'

const NavLink: React.FC<{ to: string }> = ({ children, to }) => {
  let match = useRouteMatch(to)
  console.log('match', !!match)
  return (
    <NavItem to={to} isactive={`${!match}`}>
      {children}
    </NavItem>
  )
}

const Nav = () => {
  return (
    <NavContainer>
      <NavLink to={routes.user}>User</NavLink>
      <NavLink to={routes.privacy}>Privacy</NavLink>
      <NavLink to={routes.done}>Done</NavLink>
    </NavContainer>
  )
}

export default Nav
