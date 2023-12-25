import { HttpResponse } from './HttpResponse'

export type HttpPostParams = {
  url?: string
  body?: object
}

export interface HttpPostClient {
  post(url: HttpPostParams): Promise<HttpResponse>
}
