import { HttpResponse } from '.'

export type HttpPostParams<T> = {
  url?: string
  body?: T
}

export interface HttpPostClient<T, R> {
  post(url: HttpPostParams<T>): Promise<HttpResponse<R>>
}
