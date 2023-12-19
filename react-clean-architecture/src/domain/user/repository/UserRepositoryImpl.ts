import { inject, injectable } from 'inversify'
import type RemoteUserDataSource from '../dataSource/RemoteUserDataSource'
import FetchMyInfoResponseDto from '../dto/response/FetchMyInfoResponseDto'
import UserRepository from './UserRepository'

import 'reflect-metadata'
import UserSymbols from '../UserSymbols'

@injectable()
class UserRepositoryImpl implements UserRepository {
  constructor(
    @inject(UserSymbols.RemoteUserDataSource)
    private readonly remoteUserDataSource: RemoteUserDataSource,
  ) {}

  async fetchMyInfo(): Promise<FetchMyInfoResponseDto | undefined> {
    try {
      return this.remoteUserDataSource.fetchMyInfo()
    } catch (e) {
      console.log(e)
    }
  }
}

export default UserRepositoryImpl
