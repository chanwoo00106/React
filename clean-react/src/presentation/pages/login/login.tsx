import Validation from '@/presentation/protocols/validation'
import { ChangeEvent, useState } from 'react'

interface Props {
  validation: Validation
}

const Login = ({ validation }: Props) => {
  const [state, setState] = useState({
    email: '',
    password: '',
  })

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = {
      ...state,
      [e.target.name]: e.target.value,
    }

    setState(input)
    validation.validate(input)
  }

  return (
    <div className='flex justify-center items-center h-full'>
      <form className='w-[90%] min-w-20 max-w-xl border-white border rounded-lg py-8 px-6'>
        <h1 className='text-center text-4xl font-bold mb-8'>Just Login</h1>

        <input
          name='email'
          className='w-full px-3 py-2.5 rounded-lg mb-4'
          placeholder='email'
          value={state.email}
          onChange={onChange}
        />

        <input
          name='password'
          className='w-full px-3 py-2.5 rounded-lg mb-6'
          placeholder='password'
          value={state.password}
          onChange={onChange}
        />

        <div className='text-center'>
          <button className='w-1/3'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login
