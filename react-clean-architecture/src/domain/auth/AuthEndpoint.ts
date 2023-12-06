import { RequestConfigType } from '../base/HttpClient'

export type LoginBody = {
  email: string
  password: string
}

interface AuthEndpoint {
  login(body: LoginBody): RequestConfigType
}

export default AuthEndpoint
