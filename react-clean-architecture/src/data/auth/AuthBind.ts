import AuthDataSource from "./AuthDataSource";
import HttpClient from "@src/core/HttpClient";
import AuthEndpoint from "./AuthEndpoint";
import AuthRepository from "./AuthRepository";
import AuthSymbols from "./AuthSymbols";

import type { Container } from "inversify";
import type IAuthDataSource from "./interface/IAuthDataSource";
import type IAuthRepository from "./interface/IAuthRepository";
import type { CoreEndpoint } from "@src/core/CoreEndpoint";
import type { AuthEndpointEnum } from "./AuthEndpoint";

const AuthBind = (container: Container) => {
  container
    .bind<IAuthDataSource>(AuthSymbols.AuthDataSource)
    .to(AuthDataSource);
  container
    .bind<CoreEndpoint<AuthEndpointEnum>>(AuthSymbols.AuthEndPoint)
    .to(AuthEndpoint);
  container.bind<HttpClient>(AuthSymbols.HttpClient).to(HttpClient);
  container
    .bind<IAuthRepository>(AuthSymbols.AuthRepository)
    .to(AuthRepository);
};

export default AuthBind;
