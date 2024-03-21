import TestModal from './TestModal'
import { useModalController } from 'modal-controller'

function App() {
  const modalController = useModalController()

  const onClick = async () => {
    const result = await modalController.push('TestModal', TestModal)

    console.log(result)
  }

  return (
    <main>
      <button onClick={onClick}>open</button>
    </main>
  )
}

export default App
