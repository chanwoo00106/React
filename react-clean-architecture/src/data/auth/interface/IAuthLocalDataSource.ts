interface IAuthLocalDataSource {
  login(accessToken: string): void;
  logout(): void;
}

export default IAuthLocalDataSource;
