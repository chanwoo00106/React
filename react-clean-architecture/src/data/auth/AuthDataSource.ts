import HttpClient from "@src/core/HttpClient";
import type { CoreEndpoint } from "@src/core/CoreEndpoint";
import { AuthEndpoints } from "./AuthEndpoint";

class AuthDataSource extends HttpClient {
  constructor(private endpoint: CoreEndpoint<AuthEndpoints>) {
    super();
  }

  login(data: { email: string }) {
    return this.request(
      this.endpoint.route(AuthEndpoints.login, data),
      this.endpoint.errorMapper.login,
    );
  }
}

export default AuthDataSource;
