import { injectable } from 'inversify'
import 'reflect-metadata'
import { RequestConfigType } from '../base/HttpClient'
import Method from '../base/Method'
import AuthEndpoint, { LoginBody } from './AuthEndpoint'

@injectable()
class AuthEndpointImpl implements AuthEndpoint {
  login(body: LoginBody): RequestConfigType {
    return {
      method: Method.POST,
      url: '/login',
      body,
    }
  }
}

export default AuthEndpointImpl
