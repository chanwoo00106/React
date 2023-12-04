import BaseSymbols from '@/domain/base/BaseSymbols'
import HttpClient from '@/domain/base/HttpClient'
import HttpClientImpl from '@/infra/api/HttpClientImpl'
import { Container } from 'inversify'

const container = new Container()

container.bind<HttpClient>(BaseSymbols.HttpClient).to(HttpClientImpl)

export default container
