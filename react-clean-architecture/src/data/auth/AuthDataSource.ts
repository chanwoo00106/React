class HttpClient {
  constructor(private baseURL: string) {}

  public request({ method, url }: { method: string; url: string }) {
    console.log(this.baseURL, method, url);
  }
}

const AuthErrorMessages = {
  UnAuthorized: "awefaioewjfaoiwe",
};

class TodoEndpoint {
  static baseURL = "http://localhost:3000";

  public route = {
    login: {
      url: "/auth",
      method: "post",
    },
    logout: {
      url: "/auth",
      method: "delete",
    },
    refresh: {
      url: "/auth",
      method: "patch",
    },
  };

  public errorMapper = {
    login: {
      400: AuthErrorMessages.UnAuthorized,
    },
    logout: {
      400: AuthErrorMessages.UnAuthorized,
    },
    refresh: {
      400: AuthErrorMessages.UnAuthorized,
    },
  };
}

class AuthDataSource {
  constructor(
    private httpClient: HttpClient,
    private endpoint: TodoEndpoint,
  ) {}

  login() {
    this.httpClient.request(this.endpoint.route.login);
  }

  logout() {
    this.httpClient.request(this.endpoint.route.logout);
  }

  refresh() {
    this.httpClient.request(this.endpoint.route.refresh);
  }
}

export default AuthDataSource;
