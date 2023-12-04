import HttpClient from '@/domain/base/HttpClient'
import Method from '@/domain/base/Method'
import axios from 'axios'
import { injectable } from 'inversify'
import 'reflect-metadata'

@injectable()
class HttpClientImpl implements HttpClient {
  // TODO: body와 params 구분이 안됨...
  request<R>(
    method: Method.GET | Method.DELETE,
    url: string,
    params?: Record<string, any>,
    header?: Record<string, any>,
  ): Promise<R>
  request<R, B>(
    method: Method.POST | Method.PUT | Method.PATCH,
    url: string,
    body?: B,
    params?: Record<string, any>,
    header?: Record<string, any>,
  ): Promise<R>
  async request<R, B>(
    method: Method,
    url: string,
    body?: B,
    params?: Record<string, any>,
    header?: Record<string, any>,
  ): Promise<R> {
    const { data } = await axios({
      method,
      url,
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
