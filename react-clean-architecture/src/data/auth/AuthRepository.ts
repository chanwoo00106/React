import { inject, injectable } from "inversify";
import "reflect-metadata";
import type IAuthRepository from "./interface/IAuthRepository";
import type LoginRequestDto from "./dto/request/LoginRequestDto";
import type IAuthDataSource from "./interface/IAuthDataSource";
import AuthDI from "./AuthDI";

@injectable()
class AuthRepository implements IAuthRepository {
  constructor(
    @inject(AuthDI.AuthDataSource) private authDataSource: IAuthDataSource,
  ) {}

  async login(data: LoginRequestDto): Promise<void> {
    await this.authDataSource.login(data);
  }
  async logout(): Promise<void> {
    await this.authDataSource.logout();
  }
}

export default AuthRepository;
