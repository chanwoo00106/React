import {
  HttpPostClient,
  HttpPostParams,
} from '../protocols/http/HttpPostClient'
import { HttpResponse, HttpStatusCode } from '../protocols/http/HttpResponse'

class MockHttpClientSpy implements HttpPostClient {
  url?: string
  body?: object
  response: HttpResponse = {
    statusCode: HttpStatusCode.noContent,
  }

  async post(params: HttpPostParams): Promise<HttpResponse> {
    this.url = params.url
    this.body = params.body
    return this.response
  }
}

export default MockHttpClientSpy
