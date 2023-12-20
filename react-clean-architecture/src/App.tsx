import { useQuery } from '@tanstack/react-query'
import AuthSymbols from './domain/auth/AuthSymbols'
import SigninUseCase from './domain/auth/useCase/SigninUseCase'
import useInjection from './hooks/useInjection'
import UserSymbols from './domain/user/UserSymbols'
import FetchMyInfoUseCase from './domain/user/usecase/FetchMyInfoUseCase'

function App() {
  const signinUseCase = useInjection<SigninUseCase>(AuthSymbols.SigninUseCase)
  const fetchMyInfoUseCase = useInjection<FetchMyInfoUseCase>(
    UserSymbols.FetchMyInfoUseCase,
  )

  const onClick = () => {
    signinUseCase.execute({
      email: 'a@a.com',
      password: '1234',
      conformPassword: '1234',
    })
  }

  useQuery({
    queryKey: ['fetchMyInfo'],
    queryFn: () => fetchMyInfoUseCase.execute(),
  })

  return (
    <div>
      hello world
      <button onClick={onClick}>login</button>
    </div>
  )
}

export default App
