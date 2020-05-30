import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'

const Done = () => {
  const state = useSelector((state: RootState) => state.registrySlice)
  console.log('Privacy -> state', state)
  return (
    <div>
      Please verify your emauil address, you should have received an email from
      us already!
    </div>
  )
}

export default Done
