import HttpClient from "@src/core/HttpClient";
import type { CoreEndpoint } from "@src/core/CoreEndpoint";
import { AuthEndpointEnum } from "./AuthEndpoint";
import type IAuthDataSource from "./interface/IAuthDataSource";

class AuthDataSource extends HttpClient implements IAuthDataSource {
  constructor(private endpoint: CoreEndpoint<AuthEndpointEnum>) {
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
