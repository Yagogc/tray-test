import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PrivacyType } from '../validation'

let initialState: PrivacyType = {
  update: false,
  marketing: false,
}

const privacySlice = createSlice({
  name: 'privacy',
  initialState,
  reducers: {
    setPrivacyData(state, { payload }: PayloadAction<Partial<PrivacyType>>) {
      return {
        ...state,
        ...payload,
      }
    },
    resetPrivacyData() {
      return {
        ...initialState,
      }
    },
  },
})

export const { setPrivacyData, resetPrivacyData } = privacySlice.actions

export default privacySlice.reducer
