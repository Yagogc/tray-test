import React, { useLayoutEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import type { RootState } from '../redux/store'
import { SuccessMessage } from '../components/InfoMsgs'
import { setSuccessData } from '../redux/successSlice'
import { resetPrivacyData } from '../redux/privacySlice'
import { resetRegistryData } from '../redux/registrySlice'
import routes from '../routes'

const Done = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { submitted } = useSelector((state: RootState) => state.successSlice)

  useLayoutEffect(() => {
    if (!submitted) {
      history.push(routes.user)
    }
    dispatch(setSuccessData({ submitted: false }))
    dispatch(resetPrivacyData())
    dispatch(resetRegistryData())
  }, [])
  return (
    <>
      <SuccessMessage big>✓</SuccessMessage>
      <SuccessMessage>
        Please verify your email address, you should have received an email from
        us already!
      </SuccessMessage>
    </>
  )
}

export default Done
