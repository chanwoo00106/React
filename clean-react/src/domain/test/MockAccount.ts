import { faker } from '@faker-js/faker'
import { AuthenticationParams } from '../usecases/authentication'
import { AccountModel } from '../models/AccountModel'

export const MockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
})

export const MockAccountModel = (): AccountModel => ({
  accessToken: faker.string.uuid(),
})
