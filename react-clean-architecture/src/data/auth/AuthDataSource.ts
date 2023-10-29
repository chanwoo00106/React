import HttpClient from "@src/core/HttpClient";
import { CoreEndpoint } from "@src/core/CoreEndpoint";
import { AuthEndpointEnum } from "./AuthEndpoint";
import type IAuthDataSource from "./interface/IAuthDataSource";
import { inject, injectable } from "inversify";
import AuthDI from "./AuthDI";
import "reflect-metadata";

@injectable()
class AuthDataSource extends HttpClient implements IAuthDataSource {
  constructor(
    @inject(AuthDI.AuthEndPoint)
    private endpoint: CoreEndpoint<AuthEndpointEnum>,
  ) {
    super();
  }

  async login(data: { email: string }) {
    await this.request(
      this.endpoint.route(AuthEndpointEnum.login, data),
      this.endpoint.errors.login,
    );
  }

  async logout() {
    await this.request(
      this.endpoint.route(AuthEndpointEnum.logout),
      this.endpoint.errors.logout,
    );
  }
}

export default AuthDataSource;
