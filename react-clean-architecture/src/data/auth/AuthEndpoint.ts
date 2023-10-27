import type { CoreEndpoint } from "@src/core/CoreEndpoint";
import type { Method } from "@src/core/Method";
import AuthErrorMessage from "./AuthErrorMessage";

export enum AuthEndpoints {
  login = "login",
}

class AuthEndpoint implements CoreEndpoint<AuthEndpoints> {
  static baseURL = "http://localhost:4000";

  public route: Record<AuthEndpoints, { method: Method; url: string }> = {
    login: {
      method: "post",
      url: "/auth",
    },
  };

  public errorMapper: Record<AuthEndpoints, Record<number, string>> = {
    login: {
      400: AuthErrorMessage.BAD_REQUEST,
    },
  };
}

export default AuthEndpoint;
