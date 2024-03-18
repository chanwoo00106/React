import { ReactNode, createContext } from 'react'
import ModalController from './ModalController'
import ModalContainer from './ModalContainer'

const modalController = new ModalController()
export const ModalContext = createContext<ModalController>(modalController)

interface Props {
  children: ReactNode | ReactNode[]
}

const ModalProvider = ({ children }: Props) => {
  return (
    <ModalContext.Provider value={modalController}>
      {children}
      <ModalContainer />
    </ModalContext.Provider>
  )
}

export default ModalProvider
