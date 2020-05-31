import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'
import { SuccessMessage } from '../components/InfoMsgs'

const Done = () => {
  const state = useSelector((state: RootState) => state.registrySlice)
  console.log('Privacy -> state', state)
  return (
    <div>
      <SuccessMessage big>✓</SuccessMessage>
      <SuccessMessage>
        Please verify your email address, you should have received an email from
        us already!
      </SuccessMessage>
    </div>
  )
}

export default Done
