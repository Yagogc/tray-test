import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import routes from './routes'
import { User, Privacy, Done } from './pages'

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

export default App
