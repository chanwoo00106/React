import { AxiosHttpClient } from './axiosHttpClient'
import { mockAxiosPost } from '../../test'
import { mockPostRequest } from '../../../data/test/mockHttpPost'

jest.mock('axios')

const makeSut = () => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxiosPost()

  return {
    sut,
    mockedAxios,
  }
}

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
