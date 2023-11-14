import { mockAuthentication } from '../../../domain/test/mockAuthentication'
import { MockHttpPostClient } from '../../test/mockHttpClient'
import RemoteAuthentication from './remoteAuthentication'
import { faker } from '@faker-js/faker'

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = faker.internet.url()
    const httpPostClient = new MockHttpPostClient()
    const sut = new RemoteAuthentication(url, httpPostClient)
    await sut.auth(mockAuthentication())
    expect(httpPostClient.url).toBe(url)
  })

  test('Should call HttpPostClient with correct body', async () => {
    const url = faker.internet.url()
    const httpPostClient = new MockHttpPostClient()
    const sut = new RemoteAuthentication(url, httpPostClient)
    const mockBody = mockAuthentication()
    await sut.auth(mockBody)
    expect(httpPostClient.body).toEqual(mockBody)
  })
})
