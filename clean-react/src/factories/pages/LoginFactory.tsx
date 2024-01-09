import Login from '@/presentation/pages/login/login'
import RemoteAuthenticationFactory from '../usecases/RemoteAuthenticationFactory'
import ValidationSpyFactory from '../validations/ValidationSpyFactory'

const LoginFactory = () => {
  return (
    <Login
      validation={ValidationSpyFactory}
      authentication={RemoteAuthenticationFactory}
    />
  )
}

export default LoginFactory
