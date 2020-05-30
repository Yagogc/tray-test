import React from 'react'
import Nav from '../components/Nav'
import {
  LayoutContainer,
  LayoutContent,
  LayoutContentBackground,
  Logo,
} from './Layout.styles'

const User: React.FC = ({ children }) => {
  return (
    <>
      <Logo>tray.io</Logo>
      <Nav />
      <LayoutContainer>
        <LayoutContent>{children}</LayoutContent>
        <LayoutContentBackground />
      </LayoutContainer>
    </>
  )
}

export default User
