const AuthSymbols = {
  AuthRepository: Symbol.for('AuthRepository'),
  LocalAuthDataSource: Symbol.for('LocalAuthDataSource'),
  RemoteAuthDataSource: Symbol.for('RemoteAuthDataSource'),
  SigninUseCase: Symbol.for('SigninUseCase'),
}

export default AuthSymbols
