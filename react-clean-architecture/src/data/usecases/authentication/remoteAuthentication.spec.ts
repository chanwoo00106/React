import { InvalidCredentialsError } from '../../../domain/errors/invalidCredentialsError'
import { UnexpectedError } from '../../../domain/errors/unexpectedError'
import { AccountModels } from '../../../domain/models/accountModels'
import { mockAuthentication } from '../../../domain/test/mockAuthentication'
import { AuthenticationParams } from '../../../domain/usecases/authentication'
import { HttpStatusCode } from '../../protocols/http/httpResponse'
import { MockHttpPostClient } from '../../test/mockHttpClient'
import RemoteAuthentication from './remoteAuthentication'
import { faker } from '@faker-js/faker'

const makeSut = (url: string = faker.internet.url()) => {
  const httpPostClient = new MockHttpPostClient<
    AuthenticationParams,
    AccountModels
  >()
  const sut = new RemoteAuthentication(url, httpPostClient)

  return {
    httpPostClient,
    sut,
  }
}

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClient } = makeSut(url)
    await sut.auth(mockAuthentication())
    expect(httpPostClient.url).toBe(url)
  })

  test('Should call HttpPostClient with correct body', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClient } = makeSut(url)
    const mockBody = mockAuthentication()
    await sut.auth(mockBody)
    expect(httpPostClient.body).toEqual(mockBody)
  })

  test('Should throw InvalidCredentialsError if HttpPostClient returns 401', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClient } = makeSut(url)
    httpPostClient.response = {
      statusCode: HttpStatusCode.unauthorized,
    }
    const promise = sut.auth(mockAuthentication())
    await expect(promise).rejects.toThrow(new InvalidCredentialsError())
  })

  test('Should throw InvalidCredentialsError if HttpPostClient returns 401', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClient } = makeSut(url)
    httpPostClient.response = {
      statusCode: HttpStatusCode.badRequest,
    }
    const promise = sut.auth(mockAuthentication())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw InvalidCredentialsError if HttpPostClient returns 404', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClient } = makeSut(url)
    httpPostClient.response = {
      statusCode: HttpStatusCode.notFound,
    }
    const promise = sut.auth(mockAuthentication())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw InvalidCredentialsError if HttpPostClient returns 500', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClient } = makeSut(url)
    httpPostClient.response = {
      statusCode: HttpStatusCode.serverError,
    }
    const promise = sut.auth(mockAuthentication())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
})
