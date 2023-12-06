import Method from './Method'

export type RequestConfigType<D = any, H = Record<string, any>> =
  | {
      method: Method.POST | Method.PUT | Method.PATCH
      url: string
      params?: Record<string, any>
      body?: D
      header?: H
    }
  | {
      method: Method.GET | Method.DELETE
      url: string
      params?: Record<string, any>
      body?: undefined
      header?: H
    }

export interface RequestType {
  <R = any, D = any, H = Record<string, any>>(
    config: RequestConfigType<D, H>,
  ): Promise<R>
}

interface HttpClient {
  request: RequestType
}

export default HttpClient
