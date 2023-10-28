import type { CoreEndpoint, RouteType } from "@src/core/CoreEndpoint";
import AuthErrorMessage from "./AuthErrorMessage";

export enum AuthEndpointEnum {
  login = "login",
  logout = "logout",
}

class AuthEndpoint implements CoreEndpoint<AuthEndpointEnum> {
  protected baseURL = "http://localhost:4000";

  public route(endpoint: AuthEndpointEnum): RouteType<undefined>;
  public route<D>(
    endpoint: AuthEndpointEnum,
    data?: D,
  ): RouteType<undefined> | RouteType<D> {
    switch (endpoint) {
      case AuthEndpointEnum.login:
        return { method: "post", url: "/auth", data: data };
      case AuthEndpointEnum.logout:
        return { method: "delete", url: "/auth" };
    }
  }

  public readonly errors: Record<AuthEndpointEnum, Record<number, string>> = {
    login: {
      400: AuthErrorMessage.BAD_REQUEST,
    },
    logout: {
      403: AuthErrorMessage.FORBIDDEN,
    },
  };
}

export default AuthEndpoint;
