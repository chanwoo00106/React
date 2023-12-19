import AuthSymbols from './domain/auth/AuthSymbols'
import SigninUseCase from './domain/auth/useCase/SigninUseCase'
import useInjection from './hooks/useInjection'

function App() {
  const signinUseCase = useInjection<SigninUseCase>(AuthSymbols.SigninUseCase)

  const onClick = () => {
    signinUseCase.execute({
      email: 'a@a.com',
      password: '1234',
      conformPassword: '1234',
    })
  }

  return (
    <div>
      hello world
      <button onClick={onClick}>login</button>
    </div>
  )
}

export default App
