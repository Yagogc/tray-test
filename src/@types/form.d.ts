interface userFormInterface {
  name: string
  role: string | null
  email: string
  password: string
}

interface privacyFormInterface {
  update: boolean
  marketing: boolean
}

export { userFormInterface, privacyFormInterface }
