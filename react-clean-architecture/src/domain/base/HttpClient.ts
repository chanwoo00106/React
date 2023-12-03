import Method from './Method'

interface HttpClient {
  request<R>(
    method: Method.GET | Method.DELETE,
    params: Record<string, any>,
    header: Record<string, any>,
  ): Promise<R>
  request<R, B>(
    method: Method.PATCH | Method.PUT | Method.POST,
    body: B,
    params: Record<string, any>,
    header: Record<string, any>,
  ): Promise<R>
}

export default HttpClient
