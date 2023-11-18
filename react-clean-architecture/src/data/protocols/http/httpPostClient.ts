import { HttpResponse } from './httpResponse'

export interface HttpPostParams<T> {
  url?: string
  body?: T
}

export interface HttpPostClient<T, R> {
  post(params: HttpPostParams<T>): Promise<HttpResponse<R>>
}
