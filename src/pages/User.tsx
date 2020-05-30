import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { userSchema } from '../validation'
import { InputText } from '../components/Inputs'
import routes from '../routes'
import type { RootState } from '../redux/store'
import { setRegistryData } from '../redux/registrySlice'

type FormData = {
  name: string
  role: string
  email: string
  password: string
}

const User = () => {
  const dispatch = useDispatch()
  const state = useSelector((state: RootState) => state.registrySlice)
  console.log('User -> state', state)
  const history = useHistory()
  const { register, handleSubmit, errors } = useForm<FormData>({
    validationSchema: userSchema,
  })
  const onSubmit = handleSubmit((data) => {
    console.log(data)
    dispatch(setRegistryData(data))
    history.push(routes.privacy)
  })

  return (
    <div>
      <form onSubmit={onSubmit}>
        <InputText
          type="text"
          name="name"
          register={register}
          errors={errors}
        />
        <InputText
          type="role"
          name="role"
          register={register}
          errors={errors}
        />
        <InputText
          type="email"
          name="email"
          register={register}
          errors={errors}
        />
        <InputText
          type="password"
          name="password"
          register={register}
          errors={errors}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default User
