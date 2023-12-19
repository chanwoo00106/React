import { inject, injectable } from 'inversify'
import SigninRequestDto from '../dto/request/SigninRequestDto'
import type AuthRepository from '../repository/AuthRepository'
import SigninUseCase from './SigninUseCase'
import AuthSymbols from '../AuthSymbols'
import type LocalAuthDataSource from '../dataSource/LocalAuthDataSource'

import 'reflect-metadata'

@injectable()
class SigninUseCaseImpl implements SigninUseCase {
  constructor(
    @inject(AuthSymbols.AuthRepository)
    private readonly authRepository: AuthRepository,
    @inject(AuthSymbols.LocalAuthDataSource)
    private readonly localAuthDataSource: LocalAuthDataSource,
  ) {}

  async execute(data: SigninRequestDto): Promise<void> {
    const { token } = await this.authRepository.signin(data)
    this.localAuthDataSource.signin(token)
  }
}

export default SigninUseCaseImpl
