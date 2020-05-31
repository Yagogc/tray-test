import React, { useLayoutEffect } from 'react'
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
import { setSuccessData } from '../redux/successSlice'
import axios from 'axios'
import { useMutation } from 'react-query'
import { endpoint } from '../constants'

const postForm = async (formData: any) => {
  const { data } = await axios.post(endpoint, formData)
  return data
}

const Privacy = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const {
    registrySlice: registryState,
    privacySlice: privacyState,
  } = useSelector((state: RootState) => state)
  const [mutate, { error, status }] = useMutation(postForm, {
    onSuccess: () => {
      console.log('Form Submission', { ...registryState, ...privacyState })
      dispatch(setSuccessData({ submitted: true }))
      history.push(routes.done)
    },
  })
  const { register, handleSubmit } = useForm<PrivacyType>({
    defaultValues: { ...privacyState },
    validationSchema: privacySchema,
  })

  useLayoutEffect(() => {
    if (!registryState.name) {
      history.push(routes.user)
    }
  }, [history, registryState])
  const isLoading = status === 'loading'
  const onSubmit = handleSubmit((data) => {
    dispatch(setPrivacyData(data))
    mutate({ ...registryState, ...data })
  })

  return (
    <div data-testid="privacy-page">
      <form onSubmit={onSubmit}>
        <InputCheckbox name="update" register={register}>
          Receive updates about Tray.io product by email
        </InputCheckbox>
        <InputCheckbox name="marketing" register={register}>
          Receive communication by email for other products created by the
          Tray.io team
        </InputCheckbox>
        {error && (
          <ErrorMessage data-testid="submit-error">
            Something happened! Please try again.
          </ErrorMessage>
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
