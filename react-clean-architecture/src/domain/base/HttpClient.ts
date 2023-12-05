import Method from './Method'

type RequestConfigType<D, H> =
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
      body: undefined
      header?: H
    }

export interface RequestType {
  <R, D, H>(config: RequestConfigType<D, H>): Promise<R>
}

interface HttpClient {
  request: RequestType
}

export default HttpClient
