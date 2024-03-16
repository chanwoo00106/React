import { ReactNode, createContext, useState } from 'react'
import ModalController from './ModalController'
import ModalContainer from './ModalContainer'

export const ModalContext = createContext<ModalController | null>(null)

interface Props {
  children: ReactNode | ReactNode[]
}

const ModalProvider = ({ children }: Props) => {
  const [, setMount] = useState<boolean>(false)
  const [modalController] = useState(
    () => new ModalController(() => setMount((value) => !value)),
  )

  return (
    <ModalContext.Provider value={modalController}>
      {children}
      <ModalContainer />
    </ModalContext.Provider>
  )
}

export default ModalProvider
