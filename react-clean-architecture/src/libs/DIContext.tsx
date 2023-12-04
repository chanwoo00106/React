import { createContext } from 'react'
import container from '@/core/DIContainer'
import type { ReactNode } from 'react'
import type { Container } from 'inversify'

interface DefaultValueType {
  container: Container
}
const defaultValue: DefaultValueType = {
  container,
}

const DIContext = createContext(defaultValue)

interface Props {
  children: ReactNode
}
export const DIProvider = ({ children }: Props) => {
  return (
    <DIContext.Provider value={{ container }}>{children}</DIContext.Provider>
  )
}

export default DIContext
