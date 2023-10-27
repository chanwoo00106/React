import HttpClient from "@src/core/HttpClient";
import type { CoreEndpoint } from "@src/core/CoreEndpoint";
import type { AuthEndpoints } from "./AuthEndpoint";

class AuthDataSource extends HttpClient {
  constructor(private endpoint: CoreEndpoint<AuthEndpoints>) {
    super();
  }

  login() {
    return this.request(
      this.endpoint.route.login,
      this.endpoint.errorMapper.login,
    );
  }
}

export default AuthDataSource;
