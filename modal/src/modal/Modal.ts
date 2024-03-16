import { ReactNode } from 'react'

export type ModalDefaultProps<T extends object = object> = T & {
  resolve: (value: any) => void
  reject: (reason: any) => void
}

interface ModalType {
  key: string
  Component: (props: ModalDefaultProps) => ReactNode
  props?: any
  resolve: (value: any) => void
  reject: (reason: any) => void
}

class Modal implements ModalType {
  readonly key: string
  readonly Component: (props: ModalDefaultProps) => ReactNode
  readonly props: any
  readonly resolve: (value: any) => void
  readonly reject: (reason: any) => void

  constructor(config: ModalType) {
    this.key = config.key
    this.Component = config.Component
    this.props = config.props
    this.resolve = config.resolve
    this.reject = config.reject
  }
}

export default Modal
