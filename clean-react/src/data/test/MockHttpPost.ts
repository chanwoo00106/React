import { faker } from '@faker-js/faker'
import { HttpPostParams } from '../protocols/http'

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.science.chemicalElement(),
})

export default mockPostRequest
