import { InvalidCredentialsError } from '../../../domain/errors/invalidCredentialsError'
import { UnexpectedError } from '../../../domain/errors/unexpectedError'
import { mockAuthentication } from '../../../domain/test/mockAuthentication'
import { HttpStatusCode } from '../../protocols/http/httpResponse'
import { MockHttpPostClient } from '../../test/mockHttpClient'
import RemoteAuthentication from './remoteAuthentication'
import { faker } from '@faker-js/faker'

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = faker.internet.url()
    const httpPostClient = new MockHttpPostClient()
    const sut = new RemoteAuthentication(url, httpPostClient)
    await sut.auth(mockAuthentication())
    expect(httpPostClient.url).toBe(url)
  })

  test('Should call HttpPostClient with correct body', async () => {
    const url = faker.internet.url()
    const httpPostClient = new MockHttpPostClient()
    const sut = new RemoteAuthentication(url, httpPostClient)
    const mockBody = mockAuthentication()
    await sut.auth(mockBody)
    expect(httpPostClient.body).toEqual(mockBody)
  })

  test('Should throw InvalidCredentialsError if HttpPostClient returns 401', async () => {
    const url = faker.internet.url()
    const httpPostClient = new MockHttpPostClient()
    httpPostClient.response = {
      statusCode: HttpStatusCode.unauthorized,
    }
    const sut = new RemoteAuthentication(url, httpPostClient)
    const promise = sut.auth(mockAuthentication())
    await expect(promise).rejects.toThrow(new InvalidCredentialsError())
  })

  test('Should throw InvalidCredentialsError if HttpPostClient returns 401', async () => {
    const url = faker.internet.url()
    const httpPostClient = new MockHttpPostClient()
    httpPostClient.response = {
      statusCode: HttpStatusCode.badRequest,
    }
    const sut = new RemoteAuthentication(url, httpPostClient)
    const promise = sut.auth(mockAuthentication())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw InvalidCredentialsError if HttpPostClient returns 404', async () => {
    const url = faker.internet.url()
    const httpPostClient = new MockHttpPostClient()
    httpPostClient.response = {
      statusCode: HttpStatusCode.notFound,
    }
    const sut = new RemoteAuthentication(url, httpPostClient)
    const promise = sut.auth(mockAuthentication())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw InvalidCredentialsError if HttpPostClient returns 500', async () => {
    const url = faker.internet.url()
    const httpPostClient = new MockHttpPostClient()
    httpPostClient.response = {
      statusCode: HttpStatusCode.serverError,
    }
    const sut = new RemoteAuthentication(url, httpPostClient)
    const promise = sut.auth(mockAuthentication())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
})
