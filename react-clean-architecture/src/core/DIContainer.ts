import AuthDI from "@src/data/auth/AuthDI";
import AuthDataSource from "@src/data/auth/AuthDataSource";
import type { AuthEndpointEnum } from "@src/data/auth/AuthEndpoint";
import type IAuthDataSource from "@src/data/auth/interface/IAuthDataSource";
import { Container } from "inversify";
import type { CoreEndpoint } from "./CoreEndpoint";
import AuthEndpoint from "@src/data/auth/AuthEndpoint";
import HttpClient from "./HttpClient";

const container = new Container();

container.bind<IAuthDataSource>(AuthDI.AuthDataSource).to(AuthDataSource);
container
  .bind<CoreEndpoint<AuthEndpointEnum>>(AuthDI.AuthEndPoint)
  .to(AuthEndpoint);
container.bind<HttpClient>(AuthDI.HttpClient).to(HttpClient);

export default container;
