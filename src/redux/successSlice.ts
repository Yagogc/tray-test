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
    setSuccessData(state, { payload }: PayloadAction<SuccessType>) {
      return {
        ...state,
        ...payload,
      }
    },
  },
})

export const { setSuccessData } = successSlice.actions

export default successSlice.reducer
