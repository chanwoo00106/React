import axios from 'axios'
import { faker } from '@faker-js/faker'
import { AxiosHttpClient } from './axiosHttpClient'
import { HttpPostParams } from '../../../data/protocols/http/httpPostClient'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
const mockedAxiosResult = {
  data: faker.science.chemicalElement(),
  status: faker.number.int(),
}
mockedAxios.post.mockResolvedValue(mockedAxiosResult)

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.science.chemicalElement(),
})

describe('AxiosHttpClient', () => {
  test('Should call axios with correct URL', async () => {
    const req = mockPostRequest()
    const sut = makeSut()
    await sut.post(req)
    expect(mockedAxios.post).toHaveBeenCalledWith(req.url, req.body)
  })

  test('Should call axios with correct statusCode and body', async () => {
    const sut = makeSut()
    const res = await sut.post(mockPostRequest())
    expect(res).toEqual({
      statusCode: mockedAxiosResult.status,
      body: mockedAxiosResult.data,
    })
  })
})
