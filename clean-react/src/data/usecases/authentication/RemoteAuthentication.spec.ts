import { describe, test, expect } from 'vitest'
import { RemoteAuthentication } from './RemoteAuthentication'
import MockHttpClientSpy from '@/data/test/MockHttpClientSpy'

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: MockHttpClientSpy
}

const makeSut = (url: string = 'any_url'): SutTypes => {
  const httpPostClientSpy = new MockHttpClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy,
  }
}

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', () => {
    const url = 'other_url'
    const { sut, httpPostClientSpy } = makeSut(url)
    sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
