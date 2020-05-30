import React from 'react'
import ReduxProvider from './ReduxProvider'

const Providers: React.FC = ({ children }) => (
  <ReduxProvider>{children}</ReduxProvider>
)

export default Providers
