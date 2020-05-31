import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { privacySchema, PrivacyType } from '../validation/index'
import { InputCheckbox } from '../components/Inputs'
import { Button, ButtonGroup } from '../components/Button'
import routes from '../routes'
import { RootState } from '../redux/store'
import { setPrivacyData } from '../redux/privacySlice'

const Privacy = () => {
  const dispatch = useDispatch()
  const privacyState = useSelector((state: RootState) => state.privacySlice)
  // console.log('Privacy -> state', state)
  const history = useHistory()
  const { register, handleSubmit } = useForm<PrivacyType>({
    defaultValues: { ...privacyState },
    validationSchema: privacySchema,
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
    dispatch(setPrivacyData(data))
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
        <ButtonGroup>
          <Button type="submit">Submit</Button>
          <Button type="button" back onClick={() => history.push(routes.user)}>
            Back
          </Button>
        </ButtonGroup>
      </form>
    </div>
  )
}

export default Privacy
