import type { CoreEndpoint } from "@src/core/CoreEndpoint";

enum Endpoint {
  login = "login",
}

class AuthEndpoint implements CoreEndpoint<Endpoint> {
  public baseUrl = "http://localhost:3000";
}

export default AuthEndpoint;
