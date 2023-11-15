import { InvalidCredentialsError } from '../../../domain/errors/invalidCredentialsError'
import { AuthenticationParams } from '../../../domain/usecases/authentication'
import { HttpPostClient } from '../../protocols/http/httpPostClient'
import { HttpStatusCode } from '../../protocols/http/httpResponse'

class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpPostClient,
  ) {}

  async auth(params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpClient.post({
      url: this.url,
      body: params,
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError()
      default:
    }
  }
}

export default RemoteAuthentication
