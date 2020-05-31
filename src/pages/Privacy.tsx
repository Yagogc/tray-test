import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { privacySchema, PrivacyType } from '../validation/index'
import { InputCheckbox } from '../components/Inputs'
import { Button, ButtonGroup } from '../components/Button'
import { ErrorMessage } from '../components/InfoMsgs'
import routes from '../routes'
import { RootState } from '../redux/store'
import { setPrivacyData } from '../redux/privacySlice'
import axios from 'axios'
import { useMutation } from 'react-query'

const postForm = async (formData: any) => {
  const { data } = await axios.post(`https://api.mock/registration`, formData)
  return data
}

const Privacy = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const registryState = useSelector((state: RootState) => state.registrySlice)
  const privacyState = useSelector((state: RootState) => state.privacySlice)
  const [mutate, { error, status }] = useMutation(postForm, {
    onSuccess: () => {
      console.log({ ...registryState, ...privacyState })
      history.push(routes.done)
    },
  })
  const { register, handleSubmit } = useForm<PrivacyType>({
    defaultValues: { ...privacyState },
    validationSchema: privacySchema,
  })
  const isLoading = status === 'loading'
  const onSubmit = handleSubmit((data) => {
    dispatch(setPrivacyData(data))
    mutate({ ...registryState, ...data })
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
        {error && (
          <ErrorMessage>Something happened! Please try again.</ErrorMessage>
        )}
        <ButtonGroup>
          <Button type="submit" disabled={isLoading}>
            Submit
          </Button>
          <Button
            type="button"
            back
            onClick={() => history.push(routes.user)}
            disabled={isLoading}
          >
            Back
          </Button>
        </ButtonGroup>
      </form>
    </div>
  )
}

export default Privacy
