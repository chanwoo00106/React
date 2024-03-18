import { ReactNode } from 'react'
import Modal, { ModalDefaultProps } from './Modal'
import notifyManager from './notifyManager'

class ModalController {
  #modalStack: Modal[] = []

  get modalStack() {
    return [...this.#modalStack]
  }

  private handlePromise(
    key: string,
    resolver: (value: any) => void,
    value: any,
  ) {
    resolver(value)
    this.#modalStack = this.#modalStack.filter((modal) => modal.key !== key)
    notifyManager.run()
  }

  top() {
    return this.#modalStack[this.#modalStack.length - 1]
  }

  pop() {
    const topModal = this.top()
    topModal.resolve(false)
    this.#modalStack.pop()
    notifyManager.run()
  }

  clear() {
    while (this.top()) this.pop()
    notifyManager.run()
  }

  async push(
    key: string,
    Component: (props: ModalDefaultProps) => ReactNode,
    props?: unknown,
  ) {
    return new Promise((resolve) => {
      this.#modalStack.push(
        new Modal({
          key,
          Component,
          props,
          resolve: (value: any) => this.handlePromise(key, resolve, value),
        }),
      )

      notifyManager.run()
    })
  }
}

export default ModalController
