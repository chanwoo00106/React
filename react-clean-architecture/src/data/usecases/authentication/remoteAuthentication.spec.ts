import { MockHttpPostClient } from '../../test/mockHttpClient'
import RemoteAuthentication from './remoteAuthentication'

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = 'any_url'
    const httpPostClient = new MockHttpPostClient()
    const sut = new RemoteAuthentication(url, httpPostClient)
    await sut.auth()
    expect(httpPostClient.url).toBe(url)
  })
})
