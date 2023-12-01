import { render } from '@testing-library/react'
import Login from './login'

describe('Login component', () => {
  test('', () => {
    const { getByTestId } = render(<Login />)
    const wrap = getByTestId('error-wrap')
    expect(wrap.childElementCount).toBe(4)
  })
})
