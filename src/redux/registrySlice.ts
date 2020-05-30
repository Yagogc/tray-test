import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserType, PrivacyType } from '../validation'

interface initialStateInterface extends UserType, PrivacyType {}

let initialState: initialStateInterface = {
  name: '',
  role: '',
  email: '',
  password: '',
  update: false,
  marketing: false,
}

const registrySlice = createSlice({
  name: 'registry',
  initialState,
  reducers: {
    setRegistryData(
      state,
      { payload }: PayloadAction<Partial<initialStateInterface>>
    ) {
      return {
        ...state,
        ...payload,
      }
    },
  },
})

export const { setRegistryData } = registrySlice.actions

export default registrySlice.reducer
