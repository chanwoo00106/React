import { configureStore } from '@reduxjs/toolkit'
import { CounterReducer, CounterType } from './counter'

const store = configureStore({
  reducer: {
    counter: CounterReducer
  }
})

export type RootState = {
  counter: CounterType
}

export default store
