import { HttpPostClient } from '@/data/protocols/http/HttpPostClient'
import { HttpStatusCode } from '@/data/protocols/http/HttpResponse'
import InvalidCredentialsError from '@/domain/errors/InvalidCredentialsError'
import UnexpectedError from '@/domain/errors/UnexpectedError'
import { AuthenticationParams } from '@/domain/usecases/authentication'

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient,
  ) {}

  async auth(params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        break
      case HttpStatusCode.unathorized:
        throw new InvalidCredentialsError()
      default:
        throw new UnexpectedError()
    }
  }
}
