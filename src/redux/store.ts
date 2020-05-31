import { configureStore, combineReducers } from '@reduxjs/toolkit'

import registrySlice from './registrySlice'
import privacySlice from './privacySlice'
import successSlice from './successSlice'

const rootReducer = combineReducers({
  registrySlice,
  privacySlice,
  successSlice,
})

const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export default store
