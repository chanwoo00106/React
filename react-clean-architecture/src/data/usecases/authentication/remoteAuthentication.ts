import { InvalidCredentialsError } from '../../../domain/errors/invalidCredentialsError'
import { UnexpectedError } from '../../../domain/errors/unexpectedError'
import { AccountModels } from '../../../domain/models/accountModels'
import {
  Authentication,
  AuthenticationParams,
} from '../../../domain/usecases/authentication'
import { HttpPostClient } from '../../protocols/http/httpPostClient'
import { HttpStatusCode } from '../../protocols/http/httpResponse'

class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpPostClient<
      AuthenticationParams,
      AccountModels
    >,
  ) {}

  async auth(params: AuthenticationParams) {
    const httpResponse = await this.httpClient.post({
      url: this.url,
      body: params,
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError()
      default:
        throw new UnexpectedError()
    }
  }
}

export default RemoteAuthentication
