import { test, describe, expect, vi, Mocked } from 'vitest'
import AxiosHttpClient from './AxiosHttpClient'
import axios from 'axios'
import { faker } from '@faker-js/faker'
import { HttpPostParams } from '@/data/protocols/http'

vi.mock('axios')
const mockedAxios = axios as Mocked<typeof axios>
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
  test('Should call axios with correct values', async () => {
    const request = mockPostRequest()
    const sut = makeSut()
    await sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })

  test('Should return the correct statusCode and body', async () => {
    const sut = makeSut()
    const httpResponse = await sut.post(mockPostRequest())
    expect(httpResponse).toEqual(mockedAxiosResult)
  })
})
