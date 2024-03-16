import TestModal from './TestModal'
import useModal from './modal/useModal'

function App() {
  const modalController = useModal()

  const onClick = () => {
    modalController.push('TestModal', TestModal)
  }

  return (
    <main>
      <h1>hello world</h1>
      <button onClick={onClick}>open</button>
    </main>
  )
}

export default App
