import type { CoreEndpoint, RouteType } from "@src/core/CoreEndpoint";
import AuthErrorMessage from "./AuthErrorMessage";

export enum AuthEndpoints {
  login = "login",
}

class AuthEndpoint implements CoreEndpoint<AuthEndpoints> {
  protected baseURL = "http://localhost:4000";

  public route(endpoint: AuthEndpoints): RouteType<undefined>;
  public route<D>(
    endpoint: AuthEndpoints,
    data?: D,
  ): RouteType<undefined> | RouteType<D> {
    switch (endpoint) {
      case AuthEndpoints.login:
        return { method: "post", url: "/auth", data: data };
    }
  }

  public readonly errorMapper: Record<AuthEndpoints, Record<number, string>> = {
    login: {
      400: AuthErrorMessage.BAD_REQUEST,
    },
  };
}

export default AuthEndpoint;
