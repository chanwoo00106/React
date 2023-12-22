import { HttpPostClient } from '../protocols/http/HttpPostClient'

class MockHttpClientSpy implements HttpPostClient {
  url?: string

  async post(url: string): Promise<void> {
    this.url = url
    return Promise.resolve()
  }
}

export default MockHttpClientSpy
