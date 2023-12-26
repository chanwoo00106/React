import { AccountModel } from '../models/AccountModel'

export type AuthenticationParams = {
  email: string
  password: string
}

export interface Authentication {
  auth(params: AuthenticationParams): Promise<AccountModel | undefined>
}
