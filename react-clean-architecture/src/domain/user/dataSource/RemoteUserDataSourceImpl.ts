import { inject, injectable } from 'inversify'
import RemoteUserDataSource from './RemoteUserDataSource'
import BaseSymbols from '@/domain/base/BaseSymbols'
import type HttpClient from '@/domain/base/HttpClient'
import FetchMyInfoResponseDto from '../dto/response/FetchMyInfoResponseDto'
import Method from '@/domain/base/Method'

import 'reflect-metadata'

@injectable()
class RemoteUserDataSourceImpl implements RemoteUserDataSource {
  constructor(
    @inject(BaseSymbols.HttpClient)
    private readonly httpClient: HttpClient,
  ) {}

  async fetchMyInfo(): Promise<FetchMyInfoResponseDto | undefined> {
    return this.httpClient.request<FetchMyInfoResponseDto>({
      url: '/my',
      method: Method.GET,
    })
  }
}

export default RemoteUserDataSourceImpl
