import { useContext } from 'react'
import { ModalContext } from './ModalProvider'

const useModal = () => {
  const modalController = useContext(ModalContext)

  return modalController
}

export default useModal
