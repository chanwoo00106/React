import { inject, injectable } from 'inversify'
import FetchMyInfoResponseDto from '../dto/response/FetchMyInfoResponseDto'
import FetchMyInfoUseCase from './FetchMyInfoUseCase'
import UserSymbols from '../UserSymbols'
import type UserRepository from '../repository/UserRepository'

import 'reflect-metadata'

@injectable()
class FetchMyInfoUseCaseImpl implements FetchMyInfoUseCase {
  constructor(
    @inject(UserSymbols.UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  execute(): Promise<FetchMyInfoResponseDto | undefined> {
    return this.userRepository.fetchMyInfo()
  }
}

export default FetchMyInfoUseCaseImpl
