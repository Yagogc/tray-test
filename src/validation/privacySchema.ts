import { boolean, object, InferType } from 'yup'

const privacySchema = object().shape({
  update: boolean(),
  marketing: boolean(),
})

export type privacyType = InferType<typeof privacySchema>

export default privacySchema
