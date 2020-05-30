import { boolean, object } from 'yup'

const privacySchema = object().shape({
  update: boolean(),
  marketing: boolean(),
})

export default privacySchema
