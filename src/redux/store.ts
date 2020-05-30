import { configureStore, combineReducers } from '@reduxjs/toolkit'

import registrySlice from './registrySlice'

const rootReducer = combineReducers({ registrySlice })

const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export default store