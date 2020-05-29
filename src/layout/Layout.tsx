import React from 'react'
import Nav from '../components/Nav'
import './Layout.module.scss'

const User: React.FC = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  )
}

export default User
