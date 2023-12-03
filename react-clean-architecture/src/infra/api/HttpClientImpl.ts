import HttpClient from '@/domain/base/HttpClient'
import Method from '@/domain/base/Method'
import axios from 'axios'

class HttpClientImpl implements HttpClient {
  request<R>(
    method: Method.GET | Method.DELETE,
    params?: Record<string, any>,
    header?: Record<string, any>,
  ): Promise<R>
  request<R, B>(
    method: Method.POST | Method.PUT | Method.PATCH,
    body?: B,
    params?: Record<string, any>,
    header?: Record<string, any>,
  ): Promise<R>
  async request<R, B>(
    method: Method,
    body?: B,
    params?: Record<string, any>,
    header?: Record<string, any>,
  ): Promise<R> {
    const { data } = await axios({
      method,
      data: body,
      params,
      headers: {
        Authorization: `Bearer ${'hello world'}`,
        ...header,
      },
    })

    return data
  }
}

export default HttpClientImpl
