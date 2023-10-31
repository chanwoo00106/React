import AuthDataSource from "./dataSource/AuthDataSource";
import AuthEndpoint from "./endpoint/AuthEndpoint";
import AuthRepository from "./repository/AuthRepository";
import AuthSymbols from "./constants/AuthSymbols";

import type { Container } from "inversify";
import type IAuthDataSource from "./interface/IAuthDataSource";
import type IAuthRepository from "./interface/IAuthRepository";
import type { CoreEndpoint } from "@src/data/base/CoreEndpoint";
import type { AuthEndpointEnum } from "./endpoint/AuthEndpoint";

const AuthBind = (container: Container) => {
  container
    .bind<IAuthDataSource>(AuthSymbols.AuthDataSource)
    .to(AuthDataSource);
  container
    .bind<CoreEndpoint<AuthEndpointEnum>>(AuthSymbols.AuthEndPoint)
    .to(AuthEndpoint);
  container
    .bind<IAuthRepository>(AuthSymbols.AuthRepository)
    .to(AuthRepository);
};

export default AuthBind;
