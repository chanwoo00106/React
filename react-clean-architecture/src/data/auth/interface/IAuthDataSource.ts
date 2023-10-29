interface IAuthDataSource {
  login(data: { email: string }): Promise<void>;
  logout(): Promise<void>;
}

export default IAuthDataSource;
