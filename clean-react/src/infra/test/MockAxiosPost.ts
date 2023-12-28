import { faker } from '@faker-js/faker'
import axios from 'axios'
import { Mocked } from 'vitest'

const MockAxiosPost = (): Mocked<typeof axios> => {
  const mockedAxios = axios as Mocked<typeof axios>
  mockedAxios.post.mockResolvedValue({
    data: faker.science.chemicalElement(),
    status: faker.number.int(),
  })

  return mockedAxios
}

export default MockAxiosPost
