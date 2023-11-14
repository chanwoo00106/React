import {
  HttpPostClient,
  HttpPostParams,
} from '../protocols/http/httpPostClient'

export class MockHttpPostClient implements HttpPostClient {
  url?: string
  body?: object

  async post(params: HttpPostParams): Promise<void> {
    this.url = params.url
    this.body = params.body
  }
}
