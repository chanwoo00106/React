import HttpClient, { RequestType } from '@/domain/base/HttpClient'
import axios from 'axios'
import { injectable } from 'inversify'
import 'reflect-metadata'

@injectable()
class HttpClientImpl implements HttpClient {
  private httpClient = axios

  request: RequestType = async (config) => {
    const { data } = await this.httpClient({ ...config })

    return data
  }
}

export default HttpClientImpl
