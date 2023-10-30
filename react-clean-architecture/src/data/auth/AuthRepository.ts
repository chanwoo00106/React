import { inject, injectable } from "inversify";
import "reflect-metadata";
import type IAuthRepository from "./interface/IAuthRepository";
import type LoginRequestDto from "./dto/request/LoginRequestDto";
import type IAuthDataSource from "./interface/IAuthDataSource";
import AuthSymbols from "./AuthSymbols";

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
