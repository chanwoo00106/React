import { ReactNode, createContext, useState, useSyncExternalStore } from 'react'
import ModalController from './ModalController'
import ModalContainer from './ModalContainer'
import notifyManager from './notifyManager'

export const ModalContext = createContext<ModalController | null>(null)

interface Props {
  children: ReactNode | ReactNode[]
}

const ModalProvider = ({ children }: Props) => {
  const [modalController] = useState(() => new ModalController())

  useSyncExternalStore(
    (callback) => {
      notifyManager.add(callback)
      return () => notifyManager.flush()
    },
    () => modalController.top(),
  )

  return (
    <ModalContext.Provider value={modalController}>
      {children}
      <ModalContainer />
    </ModalContext.Provider>
  )
}

export default ModalProvider
