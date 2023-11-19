import axios from 'axios'
import { HttpPostParams } from '../../../data/protocols/http/httpPostClient'

export class AxiosHttpClient {
  async post(params: HttpPostParams<any>): Promise<void> {
    axios.post(params.url)
  }
}
