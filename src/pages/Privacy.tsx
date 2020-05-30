import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { privacySchema } from '../validation/index'
import { InputCheckbox } from '../components/Inputs'
import routes from '../routes'

const Privacy = () => {
  let history = useHistory()
  const { register, handleSubmit } = useForm<FormData>({
    validationSchema: privacySchema,
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
    history.push(routes.done)
  })

  return (
    <div>
      <form onSubmit={onSubmit}>
        <InputCheckbox name="updates" register={register}>
          Receive updates about Tray.io product by email
        </InputCheckbox>
        <InputCheckbox name="marketing" register={register}>
          Receive communication by email for other products created by the
          Tray.io team
        </InputCheckbox>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Privacy
