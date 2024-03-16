import { useContext } from 'react'
import { ModalContext } from './ModalProvider'

const useModal = () => {
  const modalController = useContext(ModalContext)

  if (!modalController) throw new Error('not found modalController')

  return modalController
}

export default useModal
