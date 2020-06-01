import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { userSchema, UserType } from '../validation'
import { InputText } from '../components/Inputs'
import { Button, ButtonGroup } from '../components/Button'
import routes from '../routes'
import { RootState } from '../redux/store'
import { setRegistryData } from '../redux/registrySlice'

const User = () => {
  const dispatch = useDispatch()
  const registryState = useSelector((state: RootState) => state.registrySlice)
  const history = useHistory()
  const { register, handleSubmit, errors } = useForm<UserType>({
    defaultValues: { ...registryState },
    validationSchema: userSchema,
  })
  const onSubmit = handleSubmit((data) => {
    dispatch(setRegistryData(data))
    history.push(routes.privacy)
  })
  return (
    <div data-testid="user-page">
      <form onSubmit={onSubmit}>
        <InputText
          type="text"
          name="name"
          register={register}
          errors={errors}
          placeholder="e.g: John Doe"
          isRequired
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
          isRequired
        />
        <InputText
          type="password"
          name="password"
          register={register}
          errors={errors}
          placeholder="•••••••••"
          isRequired
        />
        <ButtonGroup>
          <Button type="submit">Submit</Button>
        </ButtonGroup>
      </form>
    </div>
  )
}

export default User
