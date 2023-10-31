import HttpClient from "@src/data/base/HttpClient";
import { CoreEndpoint } from "@src/data/base/CoreEndpoint";
import { AuthEndpointEnum } from "@src/data/auth/endpoint/AuthEndpoint";
import { inject, injectable } from "inversify";
import AuthSymbols from "@src/data/auth/constants/AuthSymbols";
import type IAuthDataSource from "@src/data/auth/interface/IAuthDataSource";
import type LoginRequestDto from "@src/data/auth/dto/request/LoginRequestDto";
import "reflect-metadata";

@injectable()
class AuthDataSource extends HttpClient implements IAuthDataSource {
  constructor(
    @inject(AuthSymbols.AuthEndPoint)
    private endpoint: CoreEndpoint<AuthEndpointEnum>,
  ) {
    super();
  }

  async login(data: LoginRequestDto) {
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
