import { AccountModels } from '../models/accountModels'

export type AuthenticationParams = {
  email: string
  password: string
}

export interface Authentication {
  auth(params: AuthenticationParams): Promise<AccountModels | undefined>
}
