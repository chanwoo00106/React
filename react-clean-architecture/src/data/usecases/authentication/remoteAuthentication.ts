import { HttpPostClient } from '../../protocols/http/httpPostClient'

class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpPostClient,
  ) {}

  async auth(): Promise<void> {
    await this.httpClient.post(this.url)
  }
}

export default RemoteAuthentication
