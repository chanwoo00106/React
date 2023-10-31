import type ITokenStore from "@src/data/base/interface/ITokenStore";
import type IAuthLocalDataSource from "../interface/IAuthLocalDataSource";
import { inject, injectable } from "inversify";
import "reflect-metadata";
import BaseSymbols from "@src/data/base/constants/BaseSymbols";

@injectable()
class AuthLocalDataSource implements IAuthLocalDataSource {
  constructor(
    @inject(BaseSymbols.TokenStore)
    private tokenStore: ITokenStore,
  ) {}

  login(accessToken: string): void {
    this.tokenStore.save(accessToken);
  }

  logout(): void {
    this.tokenStore.delete();
  }
}

export default AuthLocalDataSource;
