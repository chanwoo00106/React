import {
  HttpPostClient,
  HttpPostParams,
  HttpResponse,
} from '@/data/protocols/http'
import axios from 'axios'
import Singleton from '@/utils/Singleton'

@Singleton
class AxiosHttpClient implements HttpPostClient<any, any> {
  async post(params: HttpPostParams<any>): Promise<HttpResponse<any>> {
    const httpResponse = await axios.post(params.url, params.body)
    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    }
  }
}

export default AxiosHttpClient
