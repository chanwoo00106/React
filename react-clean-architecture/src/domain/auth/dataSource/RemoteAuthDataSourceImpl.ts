import { inject, injectable } from 'inversify'
import SigninRequestDto from '../dto/request/SigninRequestDto'
import SigninResponseDto from '../dto/response/SigninResponseDto'
import RemoteAuthDataSource from './RemoteAuthDataSource'
import BaseSymbols from '@/domain/base/BaseSymbols'
import type HttpClient from '@/domain/base/HttpClient'
import Method from '@/domain/base/Method'

@injectable()
class RemoteAuthDataSourceImpl implements RemoteAuthDataSource {
  constructor(
    @inject(BaseSymbols.HttpClient)
    private readonly httpClient: HttpClient,
  ) {}

  async signin(data: SigninRequestDto): Promise<SigninResponseDto> {
    return this.httpClient.request<SigninResponseDto>({
      url: '/auth',
      method: Method.POST,
      body: data,
    })
  }
}

export default RemoteAuthDataSourceImpl
