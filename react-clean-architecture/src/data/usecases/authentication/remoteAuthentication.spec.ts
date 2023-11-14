import { MockHttpPostClient } from '../../test/mockHttpClient'
import RemoteAuthentication from './remoteAuthentication'
import { faker } from '@faker-js/faker'

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = faker.internet.url()
    const httpPostClient = new MockHttpPostClient()
    const sut = new RemoteAuthentication(url, httpPostClient)
    await sut.auth()
    expect(httpPostClient.url).toBe(url)
  })
})
