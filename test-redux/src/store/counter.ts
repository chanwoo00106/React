import { createSlice } from '@reduxjs/toolkit'

const initialState = 0

const Counter = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    plus: state => {
      return (state += 1)
    },
    minus: state => {
      return (state -= 1)
    }
  }
})

export const { plus, minus } = Counter.actions
export const CounterReducer = Counter.reducer
export type CounterType = number
