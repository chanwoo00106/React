import AuthRepository from '@/domain/auth/repository/AuthRepository'
import AuthRepositoryImpl from '@/domain/auth/repository/AuthRepositoryImpl'
import AuthSymbols from '@/domain/auth/AuthSymbols'
import BaseSymbols from '@/domain/base/BaseSymbols'
import HttpClient from '@/domain/base/HttpClient'
import HttpClientImpl from '@/infra/HttpClientImpl'
import { Container } from 'inversify'

const container = new Container()

container.bind<HttpClient>(BaseSymbols.HttpClient).to(HttpClientImpl)

container
  .bind<AuthRepository>(AuthSymbols.AuthRepository)
  .to(AuthRepositoryImpl)

export default container
