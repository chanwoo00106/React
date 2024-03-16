import { useContext } from 'react'
import { ModalContext } from './ModalProvider'

const useModal = () => {
  const modalController = useContext(ModalContext)

  if (!modalController) throw new Error('Not found ModalController')

  return modalController
}

export default useModal
