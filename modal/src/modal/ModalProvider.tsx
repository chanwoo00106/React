import { ReactNode, createContext, useState } from 'react'
import ModalController from './ModalController'
import ModalContainer from './ModalContainer'

export const ModalContext = createContext<ModalController | null>(null)

interface Props {
  children: ReactNode | ReactNode[]
}

const ModalProvider = ({ children }: Props) => {
  const [modalController] = useState(() => new ModalController())

  return (
    <ModalContext.Provider value={modalController}>
      {children}
      <ModalContainer />
    </ModalContext.Provider>
  )
}

export default ModalProvider
