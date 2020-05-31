import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import { setupWorker, rest } from 'msw'
import { endpoint } from './constants'

const apiMock = setupWorker(
  rest.post(endpoint, (req: any, res: any, ctx: any) => {
    if (req?.body?.marketing) {
      return res(
        ctx.delay(2000),
        ctx.status(418),
        ctx.json({
          error: 'Unauthorized user',
        })
      )
    }
    return res(
      ctx.delay(2000),
      ctx.status(200),
      ctx.json({
        error: 'Unauthorized user',
      })
    )
  })
)
apiMock.start()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
