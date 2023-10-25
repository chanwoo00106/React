import type AuthDataSource from "./AuthDataSource";

class AuthDataSourceImpl implements AuthDataSource {
  login(email: string, password: string): void {}
}

export default AuthDataSourceImpl;
