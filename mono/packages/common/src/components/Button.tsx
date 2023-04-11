import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Button = ({ children = '김성훈 바보' }: Props) => {
  return <button>{children}</button>
}

export default Button
