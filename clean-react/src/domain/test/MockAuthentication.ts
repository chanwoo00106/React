import { faker } from '@faker-js/faker'
import { AuthenticationParams } from '../usecases/authentication'

export const MockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
})
