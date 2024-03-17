import { useEffect, useSyncExternalStore } from 'react'
import useModal from './useModal'
import { createPortal } from 'react-dom'
import notifyManager from './notifyManager'

const MODAL_ID = 'modal'

const ModalContainer = () => {
  const modalController = useModal()
  const top = modalController.top()

  useEffect(() => {
    if (document.getElementById(MODAL_ID)) return

    const modalDOM = document.createElement('div')
    modalDOM.id = MODAL_ID
    document.body.append(modalDOM)
  }, [])

  useSyncExternalStore(
    (callback) => {
      notifyManager.add(callback)
      return () => notifyManager.flush()
    },
    () => modalController.top(),
  )

  if (!top) return null

  return createPortal(
    <>
      {modalController.modalStack.map((modal) => (
        <modal.Component
          key={modal.key}
          {...(modal.props ?? {})}
          resolve={modal.resolve}
        />
      ))}
    </>,
    window.document.getElementById(MODAL_ID) as HTMLElement,
  )
}

export default ModalContainer
