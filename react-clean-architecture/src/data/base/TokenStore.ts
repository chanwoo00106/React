import { inject, injectable } from "inversify";
import BaseSymbols from "./constants/BaseSymbols";
import type ILocalDataSource from "./interface/ILocalDataSource";
import type ITokenStore from "./interface/ITokenStore";
import "reflect-metadata";

@injectable()
class TokenStore implements ITokenStore {
  private TokenName = "access-token";

  constructor(
    @inject(BaseSymbols.LocalDataSource)
    private localDataStore: ILocalDataSource,
  ) {}

  save(value: string) {
    this.localDataStore.set(this.TokenName, value);
  }

  get() {
    return this.localDataStore.get(this.TokenName);
  }

  delete() {
    return this.localDataStore.remove(this.TokenName);
  }
}

export default TokenStore;
