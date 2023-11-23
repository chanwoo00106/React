import { faker } from '@faker-js/faker'
import { AxiosHttpClient } from './axiosHttpClient'
import { HttpPostParams } from '../../../data/protocols/http/httpPostClient'
import { mockAxiosPost } from '../../test'

jest.mock('axios')

const makeSut = () => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxiosPost()

  return {
    sut,
    mockedAxios,
  }
}

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.science.chemicalElement(),
})

describe('AxiosHttpClient', () => {
  test('Should call axios with correct URL', async () => {
    const req = mockPostRequest()
    const { sut, mockedAxios } = makeSut()
    await sut.post(req)
    expect(mockedAxios.post).toHaveBeenCalledWith(req.url, req.body)
  })

  test('Should call axios with correct statusCode and body', async () => {
    const { sut, mockedAxios } = makeSut()
    const promise = sut.post(mockPostRequest())
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
  })
})
