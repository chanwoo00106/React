interface AuthDataSource {
  login(email: string, password: string): void;
}

export default AuthDataSource;
