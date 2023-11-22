import axios from 'axios'
import { HttpPostParams } from '../../../data/protocols/http/httpPostClient'
import { HttpResponse } from '../../../data/protocols/http/httpResponse'
import { HttpPostClient } from '../../../data/protocols/http/httpPostClient'

export class AxiosHttpClient implements HttpPostClient<any, any> {
  async post(params: HttpPostParams<any>): Promise<HttpResponse<any>> {
    const { data, status } = await axios.post(params.url, params.body)

    return { body: data, statusCode: status }
  }
}
