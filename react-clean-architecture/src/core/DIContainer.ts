import AuthRepository from '@/domain/auth/repository/AuthRepository'
import AuthRepositoryImpl from '@/domain/auth/repository/AuthRepositoryImpl'
import AuthSymbols from '@/domain/auth/AuthSymbols'
import BaseSymbols from '@/domain/base/BaseSymbols'
import HttpClient from '@/domain/base/HttpClient'
import HttpClientImpl from '@/infra/HttpClientImpl'
import { Container } from 'inversify'
import LocalStorage from '@/domain/base/LocalStorage'
import LocalStorageImpl from '@/infra/LocalStorageImpl'
import LocalAuthDataSource from '@/domain/auth/dataSource/LocalAuthDataSource'
import LocalAuthDataSourceImpl from '@/domain/auth/dataSource/LocalAuthDataSourceImpl'
import RemoteAuthDataSourceImpl from '@/domain/auth/dataSource/RemoteAuthDataSourceImpl'
import RemoteAuthDataSource from '@/domain/auth/dataSource/RemoteAuthDataSource'
import SigninUseCaseImpl from '@/domain/auth/useCase/SigninUseCaseImpl'
import SigninUseCase from '@/domain/auth/useCase/SigninUseCase'

const container = new Container()

container.bind<HttpClient>(BaseSymbols.HttpClient).to(HttpClientImpl)
container.bind<LocalStorage>(BaseSymbols.LocalStorage).to(LocalStorageImpl)

container
  .bind<AuthRepository>(AuthSymbols.AuthRepository)
  .to(AuthRepositoryImpl)
container
  .bind<LocalAuthDataSource>(AuthSymbols.LocalAuthDataSource)
  .to(LocalAuthDataSourceImpl)
container
  .bind<RemoteAuthDataSource>(AuthSymbols.RemoteAuthDataSource)
  .to(RemoteAuthDataSourceImpl)
container.bind<SigninUseCase>(AuthSymbols.SigninUseCase).to(SigninUseCaseImpl)

export default container
