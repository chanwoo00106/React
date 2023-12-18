import { inject, injectable } from 'inversify'
import type HttpClient from '../../base/HttpClient'
import AuthRepository from './AuthRepository'
import SigninRequestDto from '../dto/request/SigninRequestDto'
import SigninResponseDto from '../dto/response/SigninResponseDto'
import BaseSymbols from '../../base/BaseSymbols'
import Method from '../../base/Method'

import 'reflect-metadata'

@injectable()
class AuthRepositoryImpl implements AuthRepository {
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

export default AuthRepositoryImpl
