import BaseSymbols from "./constants/BaseSymbols";
import LocalDataSource from "./LocalDataSource";
import HttpClient from "./HttpClient";

import type { Container } from "inversify";
import type ILocalDataSource from "./interface/ILocalDataSource";

const BaseBind = (container: Container) => {
  container
    .bind<ILocalDataSource>(BaseSymbols.LocalDataSource)
    .to(LocalDataSource);
  container.bind<HttpClient>(BaseSymbols.HttpClient).to(HttpClient);
};

export default BaseBind;
