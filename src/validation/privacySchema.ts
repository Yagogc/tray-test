import { boolean, object, InferType } from 'yup'

const privacySchema = object({
  update: boolean(),
  marketing: boolean(),
}).required()

export type PrivacyType = InferType<typeof privacySchema>

export default privacySchema
