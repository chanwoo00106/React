import { inject, injectable } from 'inversify'
import SigninRequestDto from '../dto/request/SigninRequestDto'
import type AuthRepository from '../repository/AuthRepository'
import SigninUseCase from './SigninUseCase'
import AuthSymbols from '../AuthSymbols'

import 'reflect-metadata'

@injectable()
class SigninUseCaseImpl implements SigninUseCase {
  constructor(
    @inject(AuthSymbols.AuthRepository)
    private readonly authRepository: AuthRepository,
  ) {}

  async execute(data: SigninRequestDto): Promise<void> {
    return this.authRepository.signin(data)
  }
}

export default SigninUseCaseImpl
