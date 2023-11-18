import {
  HttpPostClient,
  HttpPostParams,
} from '../protocols/http/httpPostClient'
import { HttpResponse, HttpStatusCode } from '../protocols/http/httpResponse'

export class MockHttpPostClient<T, R> implements HttpPostClient<T, R> {
  url?: string
  body?: T
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok,
  }

  async post(params: HttpPostParams<T>): Promise<HttpResponse<R>> {
    this.url = params.url
    this.body = params.body

    return this.response
  }
}
