import useModal from './useModal'
import { createPortal } from 'react-dom'

const MODAL_ID = 'modal'

const ModalContainer = () => {
  const modalController = useModal()
  const top = modalController.top

  console.log(top)

  if (!top) return null

  return createPortal(
    <>
      {modalController.modalStack.map((modal) => (
        <modal.Component
          key={modal.key}
          {...(modal.props ?? {})}
          resolve={modal.resolve}
          reject={modal.reject}
        />
      ))}
    </>,
    window.document.getElementById(MODAL_ID) as HTMLElement,
  )
}

export default ModalContainer
