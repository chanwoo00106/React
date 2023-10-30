import type { Container } from "inversify";
import type ILocalDataSource from "./interface/ILocalDataSource";
import BaseSymbols from "./BaseSymbols";
import LocalDataSource from "./LocalDataSource";

const BaseBind = (container: Container) => {
  container
    .bind<ILocalDataSource>(BaseSymbols.LocalDataSource)
    .to(LocalDataSource);
};

export default BaseBind;
