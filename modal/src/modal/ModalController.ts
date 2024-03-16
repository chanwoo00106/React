import { ReactNode } from 'react'
import Modal, { ModalDefaultProps } from './Modal'

class ModalController {
  modalStack: Modal[] = []
  setMount: () => void

  constructor(setMount: () => void) {
    this.setMount = setMount
  }

  private handlePromise(
    key: string,
    resolver: (value: any) => void,
    value: any,
  ) {
    console.log('hi')
    resolver(value)
    this.modalStack = this.modalStack.filter((modal) => modal.key !== key)
    this.setMount()
  }

  top() {
    return this.modalStack[this.modalStack.length - 1]
  }

  pop() {
    const topModal = this.top()
    topModal.reject(`Clear modal ${topModal.key}`)
    this.modalStack.pop()
    this.setMount()
  }

  clear() {
    while (this.top()) this.pop()
    this.setMount()
  }

  async push(
    key: string,
    Component: (props: ModalDefaultProps) => ReactNode,
    props?: unknown,
  ) {
    return new Promise((resolve) => {
      this.modalStack.push(
        new Modal({
          key,
          Component,
          props,
          resolve: (value: any) => this.handlePromise(key, resolve, value),
          reject: (value: any) => this.handlePromise(key, resolve, value),
        }),
      )

      this.setMount()
    })
  }
}

export default ModalController
