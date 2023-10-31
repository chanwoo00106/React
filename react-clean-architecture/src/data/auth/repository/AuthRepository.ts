import { inject, injectable } from "inversify";
import "reflect-metadata";
import type IAuthRepository from "@src/data/auth/interface/IAuthRepository";
import type LoginRequestDto from "@src/data/auth/dto/request/LoginRequestDto";
import type IAuthDataSource from "@src/data/auth/interface/IAuthDataSource";
import AuthSymbols from "@src/data/auth/constants/AuthSymbols";

@injectable()
class AuthRepository implements IAuthRepository {
  constructor(
    @inject(AuthSymbols.AuthDataSource) private authDataSource: IAuthDataSource,
  ) {}

  async login(data: LoginRequestDto): Promise<void> {
    await this.authDataSource.login(data);
  }
  async logout(): Promise<void> {
    await this.authDataSource.logout();
  }
}

export default AuthRepository;
