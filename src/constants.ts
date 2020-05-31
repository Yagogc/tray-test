const endpoint =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/'
    : 'https://tray.yago.pw'

export { endpoint }
