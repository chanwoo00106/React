import { ReactNode } from 'react'
import Modal, { ModalDefaultProps } from './Modal'

class ModalController {
  modalStack: Modal[] = []

  private handlePromise(
    key: string,
    resolver: (value: any) => void,
    value: any,
  ) {
    resolver(value)
    this.modalStack = this.modalStack.filter((modal) => modal.key !== key)
  }

  top = this.modalStack[this.modalStack.length - 1]

  pop() {
    const topModal = this.top
    topModal.reject(`Clear modal ${topModal.key}`)
    this.modalStack.pop()
  }

  clear() {
    while (this.top) this.pop()
  }

  async push(
    key: string,
    Component: (props: ModalDefaultProps) => ReactNode,
    props?: unknown,
  ) {
    return new Promise((resolve, reject) => {
      this.modalStack.push(
        new Modal({
          key,
          Component,
          props,
          resolve: (value: any) => this.handlePromise(key, resolve, value),
          reject: (value: any) => this.handlePromise(key, reject, value),
        }),
      )
    })
  }
}

export default ModalController
