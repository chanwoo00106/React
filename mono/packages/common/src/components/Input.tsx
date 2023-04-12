import { ChangeEvent } from 'react'
import '../index.css'

const Input = () => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    console.log(e.target.value)

  return <input onChange={onChange} />
}

export default Input
