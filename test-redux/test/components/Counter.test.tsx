import { render, screen } from '@testing-library/react'
import Counter from '../../src/components/Counter'
import userEvent from '@testing-library/user-event'
import { useSelector, useDispatch } from 'react-redux'

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}))

test('Renders main element', () => {
  let counter = 0
  const useSelectorMock = useSelector as jest.Mock
  const useDispatchMock = useDispatch as jest.Mock

  useDispatchMock.mockImplementation(() => (counter += 1))
  useSelectorMock.mockImplementation(selector => selector({ counter }))

  render(<Counter />)
  const plusBtn = screen.getByRole('button', { name: '+' })
  userEvent.click(plusBtn)
  expect(screen.getByText('1'))
})
