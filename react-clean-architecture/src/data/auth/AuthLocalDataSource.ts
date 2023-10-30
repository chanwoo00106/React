import { inject, injectable } from "inversify";
import "reflect-metadata";
import BaseSymbols from "../base/BaseSymbols";
import type ILocalDataSource from "../base/interface/ILocalDataSource";

@injectable()
class AuthLocalDataSource {
  constructor(
    @inject(BaseSymbols.LocalDataSource)
    private localDataSource: ILocalDataSource,
  ) {}
}

export default AuthLocalDataSource;
