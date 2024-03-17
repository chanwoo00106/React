import { ModalDefaultProps } from './modal/Modal'

const TestModal = ({ resolve }: ModalDefaultProps) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        background: 'rgba(0,0,0,0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          background: '#fff',
        }}
      >
        <h1>hello world</h1>

        <button onClick={() => resolve(false)}>No</button>
        <button onClick={() => resolve(true)}>Ok</button>
      </div>
    </div>
  )
}

export default TestModal
