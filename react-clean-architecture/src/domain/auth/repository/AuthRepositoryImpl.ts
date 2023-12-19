import { inject, injectable } from 'inversify'
import AuthRepository from './AuthRepository'
import SigninRequestDto from '../dto/request/SigninRequestDto'

import 'reflect-metadata'
import AuthSymbols from '../AuthSymbols'
import type RemoteAuthDataSource from '../dataSource/RemoteAuthDataSource'
import type LocalAuthDataSource from '../dataSource/LocalAuthDataSource'

@injectable()
class AuthRepositoryImpl implements AuthRepository {
  constructor(
    @inject(AuthSymbols.RemoteAuthDataSource)
    private readonly remoteAuthDataSource: RemoteAuthDataSource,
    @inject(AuthSymbols.LocalAuthDataSource)
    private readonly localAuthDataSource: LocalAuthDataSource,
  ) {}

  async signin(data: SigninRequestDto): Promise<void> {
    try {
      const { token } = await this.remoteAuthDataSource.signin(data)
      this.localAuthDataSource.signin(token)
    } catch (e) {
      console.log(e)
    }
  }
}

export default AuthRepositoryImpl
