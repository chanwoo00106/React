import { inject, injectable } from "inversify";
import "reflect-metadata";
import AuthSymbols from "@src/data/auth/constants/AuthSymbols";
import type LoginRequestDto from "@src/data/auth/dto/request/LoginRequestDto";
import type ILoginUseCase from "../interface/ILoginUseCase";
import type IAuthRepository from "@src/data/auth/interface/IAuthRepository";

@injectable()
class LoginUseCase implements ILoginUseCase {
  constructor(
    @inject(AuthSymbols.AuthRepository)
    private authRepository: IAuthRepository,
  ) {}

  async execute(data: LoginRequestDto): Promise<void> {
    await this.authRepository.login(data);
  }
}

export default LoginUseCase;
