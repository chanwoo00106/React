import { ModalDefaultProps } from 'modal-controller'

const TestModal = ({ resolve }: ModalDefaultProps) => {
  return (
    <div>
      <h1>hello world</h1>

      <button onClick={() => resolve(false)}>No</button>
      <button onClick={() => resolve(true)}>Ok</button>
    </div>
  )
}

export default TestModal
