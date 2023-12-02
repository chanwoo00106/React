import Method from './Method'

interface HttpClient {
  request(method: Method.GET | Method.DELETE): void
  request(method: Method.PATCH | Method.PUT | Method.POST): void
}

export default HttpClient
