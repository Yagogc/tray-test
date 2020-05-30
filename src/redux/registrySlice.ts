import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { userType, privacyType } from '../validation'
import { userFormInterface, privacyFormInterface } from '../@types/form'

// interface initialStateInterface extends userType, privacyType {}
interface initialStateInterface
  extends userFormInterface,
    privacyFormInterface {}

let initialState: initialStateInterface = {
  name: '',
  role: null,
  email: '',
  password: '',
  update: false,
  marketing: false,
}

const registrySlice = createSlice({
  name: 'registry',
  initialState,
  reducers: {
    setRegistryData(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
})

// setRegistryData(state, { payload }: { payload: PayloadAction }) {

export const { setRegistryData } = registrySlice.actions

export default registrySlice.reducer
