import Login from '@/presentation/pages/login/login'
import RemoteAuthenticationFactory from '../usecases/RemoteAuthenticationFactory'
import { LoginValidation } from '@/validations'

const LoginFactory = () => {
  return (
    <Login
      authentication={RemoteAuthenticationFactory}
      validation={LoginValidation}
    />
  )
}

export default LoginFactory
