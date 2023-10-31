import type { CoreEndpoint, RouteType } from "@src/data/base/CoreEndpoint";
import AuthErrorMessage from "@src/data/auth/constants/AuthErrorMessage";
import { injectable } from "inversify";
import "reflect-metadata";

export enum AuthEndpointEnum {
  login = "login",
  logout = "logout",
}

@injectable()
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
