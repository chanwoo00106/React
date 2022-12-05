import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { minus, plus } from '../store/counter'

const Counter = () => {
  const dispatch = useDispatch()
  const { counter } = useSelector((state: RootState) => ({
    counter: state.counter
  }))

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(plus())}>+</button>
      <button onClick={() => dispatch(minus())}>-</button>
    </div>
  )
}

export default Counter
