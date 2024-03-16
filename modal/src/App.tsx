import TestModal from './TestModal'
import useModal from './modal/useModal'

function App() {
  const modalController = useModal()

  const onClick = async () => {
    const first = await modalController.push('TestModal', TestModal)
    const second = await modalController.push('TestModal1', TestModal)
    const third = await modalController.push('TestModal2', TestModal)

    console.log({ first, second, third })
  }

  return (
    <main>
      <h1>hello world</h1>
      <button onClick={onClick}>open</button>
    </main>
  )
}

export default App
