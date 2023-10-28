interface IAuthDataSource {
  login(data: { email: string }): Promise<void | string>;
  logout(): Promise<void | string>;
}

export default IAuthDataSource;
