import React from 'react'
import ReduxProvider from './ReduxProvider'
import RouterProvider from './RouterProvider'

const Providers: React.FC = ({ children }) => (
  <ReduxProvider>
    <RouterProvider>{children}</RouterProvider>
  </ReduxProvider>
)

export default Providers
