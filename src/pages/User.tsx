import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { userSchema, UserType } from '../validation'
import { InputText } from '../components/Inputs'
import routes from '../routes'
import { RootState } from '../redux/store'
import { setRegistryData } from '../redux/registrySlice'

const User = () => {
  const dispatch = useDispatch()
  const registryState = useSelector((state: RootState) => state.registrySlice)
  // console.log('User -> state', state)
  const history = useHistory()
  const { register, handleSubmit, errors } = useForm<UserType>({
    defaultValues: { ...registryState },
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
          placeholder="e.g: John Doe"
        />
        <InputText
          type="role"
          name="role"
          register={register}
          errors={errors}
          placeholder="e.g: Senior Front End Developer"
        />
        <InputText
          type="email"
          name="email"
          register={register}
          errors={errors}
          placeholder="e.g: john.doe@test.com"
        />
        <InputText
          type="password"
          name="password"
          register={register}
          errors={errors}
          placeholder="•••••••••"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default User
