import AuthSymbols from "@src/data/auth/constants/AuthSymbols";
import { inject, injectable } from "inversify";
import type IAuthRepository from "@src/data/auth/interface/IAuthRepository";
import type ILogoutUseCase from "./interface/ILogoutUseCase";
import "reflect-metadata";

@injectable()
class LogoutUseCase implements ILogoutUseCase {
  constructor(
    @inject(AuthSymbols.AuthRepository)
    private authRepository: IAuthRepository,
  ) {}

  async execute(): Promise<void> {
    await this.authRepository.logout();
  }
}

export default LogoutUseCase;
