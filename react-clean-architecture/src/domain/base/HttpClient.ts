import Method from './Method'

interface HttpClient {
  request<R>(
    method: Method.GET | Method.DELETE,
    url: string,
    params?: Record<string, any>,
    header?: Record<string, any>,
  ): Promise<R>
  request<R, B>(
    method: Method.PATCH | Method.PUT | Method.POST,
    url: string,
    body?: B,
    params?: Record<string, any>,
    header?: Record<string, any>,
  ): Promise<R>
}

export default HttpClient
