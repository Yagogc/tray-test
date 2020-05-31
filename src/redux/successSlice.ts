import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SuccessType {
  submitted: boolean
}

let initialState: SuccessType = {
  submitted: false,
}

const successSlice = createSlice({
  name: 'sucess',
  initialState,
  reducers: {
    setRegistryData(state, { payload }: PayloadAction<SuccessType>) {
      return {
        ...state,
        ...payload,
      }
    },
  },
})

export const { setRegistryData } = successSlice.actions

export default successSlice.reducer
