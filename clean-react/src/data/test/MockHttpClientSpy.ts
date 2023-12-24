import {
  HttpPostClient,
  HttpPostParams,
} from '../protocols/http/HttpPostClient'

class MockHttpClientSpy implements HttpPostClient {
  url?: string
  body?: object

  async post(params: HttpPostParams): Promise<void> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve()
  }
}

export default MockHttpClientSpy
