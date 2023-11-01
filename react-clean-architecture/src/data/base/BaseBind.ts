import BaseSymbols from "./constants/BaseSymbols";
import LocalDataSource from "./LocalDataSource";
import HttpClient from "./HttpClient";
import TokenStore from "./TokenStore";

import type { Container } from "inversify";
import type ILocalDataSource from "./interface/ILocalDataSource";
import type ITokenStore from "./interface/ITokenStore";
import type IHttpClient from "./interface/IHttpClient";

const BaseBind = (container: Container) => {
  container
    .bind<ILocalDataSource>(BaseSymbols.LocalDataSource)
    .to(LocalDataSource);
  container.bind<IHttpClient>(BaseSymbols.HttpClient).to(HttpClient);
  container.bind<ITokenStore>(BaseSymbols.TokenStore).to(TokenStore);
};

export default BaseBind;
