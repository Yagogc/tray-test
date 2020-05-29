import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import routes from './routes'
import { User, Privacy, Done } from './pages'
import Layout from './layout/Layout'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path={routes.user}>
            <User />
          </Route>
          <Route path={routes.privacy}>
            <Privacy />
          </Route>
          <Route path={routes.done}>
            <Done />
          </Route>
          <Route path="*">
            <Redirect to={routes.user} />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
