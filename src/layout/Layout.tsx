import React from 'react'
import Nav from '../components/Nav'
import { LayoutContainer, Logo } from './Layout.styles'

const User: React.FC = ({ children }) => {
  return (
    <>
      <Logo>form.test</Logo>
      <Nav />
      <LayoutContainer>{children}</LayoutContainer>
    </>
  )
}

export default User
