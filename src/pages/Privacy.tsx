import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { privacySchema } from '../validation/index'
import { InputCheckbox } from '../components/Inputs'
import routes from '../routes'
import type { RootState } from '../redux/store'
import { setRegistryData } from '../redux/registrySlice'

const Privacy = () => {
  const dispatch = useDispatch()
  const state = useSelector((state: RootState) => state.registrySlice)
  console.log('Privacy -> state', state)
  const history = useHistory()
  const { register, handleSubmit } = useForm<FormData>({
    validationSchema: privacySchema,
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
    dispatch(setRegistryData(data))
    history.push(routes.done)
  })

  return (
    <div>
      <form onSubmit={onSubmit}>
        <InputCheckbox name="update" register={register}>
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
