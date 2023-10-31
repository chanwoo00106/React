import AuthDataSource from "./dataSource/AuthDataSource";
import AuthEndpoint from "./endpoint/AuthEndpoint";
import AuthRepository from "./repository/AuthRepository";
import AuthSymbols from "./constants/AuthSymbols";
import AuthLocalDataSource from "./dataSource/AuthLocalDataSource";
import LoginUseCase from "./useCase/LoginUseCase";
import LogoutUseCase from "./useCase/LogoutUseCase";

import type { Container } from "inversify";
import type IAuthDataSource from "./interface/IAuthDataSource";
import type IAuthRepository from "./interface/IAuthRepository";
import type { CoreEndpoint } from "@src/data/base/CoreEndpoint";
import type { AuthEndpointEnum } from "./endpoint/AuthEndpoint";
import type IAuthLocalDataSource from "./interface/IAuthLocalDataSource";
import type ILoginUseCase from "./interface/ILoginUseCase";
import type ILogoutUseCase from "./interface/ILogoutUseCase";

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
  container
    .bind<IAuthLocalDataSource>(AuthSymbols.AuthLocalDataSource)
    .to(AuthLocalDataSource);
  container.bind<ILoginUseCase>(AuthSymbols.LoginUseCase).to(LoginUseCase);
  container.bind<ILogoutUseCase>(AuthSymbols.LogoutUseCase).to(LogoutUseCase);
};

export default AuthBind;
