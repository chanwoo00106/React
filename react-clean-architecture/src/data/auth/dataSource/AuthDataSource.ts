import HttpClient from "@src/data/base/HttpClient";
import { CoreEndpoint } from "@src/data/base/CoreEndpoint";
import { AuthEndpointEnum } from "@src/data/auth/endpoint/AuthEndpoint";
import { inject, injectable } from "inversify";
import AuthSymbols from "@src/data/auth/constants/AuthSymbols";
import type IAuthDataSource from "@src/data/auth/interface/IAuthDataSource";
import type LoginRequestDto from "@src/data/auth/dto/request/LoginRequestDto";
import type LoginResponseDto from "@src/data/auth/dto/response/LoginResponseDto";
import "reflect-metadata";

@injectable()
class AuthDataSource extends HttpClient implements IAuthDataSource {
  protected baseURL = "http://localhost:4000";

  constructor(
    @inject(AuthSymbols.AuthEndPoint)
    private endpoint: CoreEndpoint<AuthEndpointEnum>,
  ) {
    super();
  }

  async login(data: LoginRequestDto) {
    return this.request<LoginResponseDto>(
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
