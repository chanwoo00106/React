import { describe, test, expect } from 'vitest'
import { RemoteAuthentication } from './RemoteAuthentication'
import MockHttpClientSpy from '@/data/test/MockHttpClientSpy'
import { faker } from '@faker-js/faker'
import { MockAuthentication } from '@/domain/test/MockAuthentication'

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: MockHttpClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new MockHttpClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy,
  }
}

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    sut.auth(MockAuthentication())
    expect(httpPostClientSpy.url).toBe(url)
  })

  test('Should call HttpPostClient with correct body', () => {
    const { sut, httpPostClientSpy } = makeSut()
    const authenticationParams = MockAuthentication()
    sut.auth(authenticationParams)
    expect(httpPostClientSpy.body).toEqual(authenticationParams)
  })
})
