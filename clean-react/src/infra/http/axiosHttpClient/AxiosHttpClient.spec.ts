import { test, describe, expect, vi, Mocked } from 'vitest'
import AxiosHttpClient from './AxiosHttpClient'
import axios from 'axios'
import { faker } from '@faker-js/faker'

vi.mock('axios')
const mockedAxios = axios as Mocked<typeof axios>

describe('AxiosHttpClient', () => {
  test('Should call axios with correct URL', async () => {
    const url = faker.internet.url()
    const sut = new AxiosHttpClient()
    await sut.post({ url })
    expect(mockedAxios).toHaveBeenCalledWith(url)
  })
})
