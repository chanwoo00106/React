import {
  plus,
  minus,
  CounterReducer,
  CounterType
} from '../../src/store/counter'

describe('Counter Reducer test', () => {
  const initialState: CounterType = 0

  it('should minus 1 count', () => {
    expect(CounterReducer(initialState, minus())).toEqual(-1)
  })

  it('should plus 1 count', () => {
    expect(CounterReducer(initialState, plus())).toEqual(1)
  })
})
