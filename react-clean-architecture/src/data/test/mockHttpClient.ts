import {
  HttpPostClient,
  HttpPostParams,
} from '../protocols/http/httpPostClient'
import { HttpResponse, HttpStatusCode } from '../protocols/http/httpResponse'

export class MockHttpPostClient implements HttpPostClient {
  url?: string
  body?: object
  response: HttpResponse = {
    statusCode: HttpStatusCode.ok,
  }

  async post(params: HttpPostParams): Promise<HttpResponse> {
    this.url = params.url
    this.body = params.body

    return this.response
  }
}
