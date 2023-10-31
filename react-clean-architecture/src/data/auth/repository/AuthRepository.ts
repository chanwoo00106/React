import { inject, injectable } from "inversify";
import AuthSymbols from "@src/data/auth/constants/AuthSymbols";
import type IAuthRepository from "@src/data/auth/interface/IAuthRepository";
import type LoginRequestDto from "@src/data/auth/dto/request/LoginRequestDto";
import type IAuthDataSource from "@src/data/auth/interface/IAuthDataSource";
import type IAuthLocalDataSource from "../interface/IAuthLocalDataSource";
import "reflect-metadata";

@injectable()
class AuthRepository implements IAuthRepository {
  constructor(
    @inject(AuthSymbols.AuthDataSource)
    private authDataSource: IAuthDataSource,
    @inject(AuthSymbols.AuthLocalDataSource)
    private authLocalDataSource: IAuthLocalDataSource,
  ) {}

  async login(data: LoginRequestDto) {
    const res = await this.authDataSource.login(data);
    this.authLocalDataSource.login(res.accessToken);
  }

  async logout(): Promise<void> {
    await this.authDataSource.logout();
    this.authLocalDataSource.logout();
  }
}

export default AuthRepository;
