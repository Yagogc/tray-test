import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import routes from '../../routes'
import styles from './Nav.module.scss'

const NavLink: React.FC<{ to: string }> = ({ children, to }) => {
  let match = useRouteMatch(to)
  return (
    <Link
      to={to}
      className={(styles.nav__item, match ? styles.nav_item_active : '')}
    >
      {children}
    </Link>
  )
}

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to={routes.user}>User</NavLink>
      <NavLink to={routes.privacy}>Privacy</NavLink>
      <NavLink to={routes.done}>Done</NavLink>
    </nav>
  )
}

export default Nav
