import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserType } from '../validation'

let initialState: UserType = {
  name: '',
  role: '',
  email: '',
  password: '',
}

const registrySlice = createSlice({
  name: 'registry',
  initialState,
  reducers: {
    setRegistryData(state, { payload }: PayloadAction<Partial<UserType>>) {
      return {
        ...state,
        ...payload,
      }
    },
    resetRegistryData() {
      return {
        ...initialState,
      }
    },
  },
})

export const { setRegistryData, resetRegistryData } = registrySlice.actions

export default registrySlice.reducer
