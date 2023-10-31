const AuthSymbols = {
  AuthDataSource: Symbol.for("AuthDataSource"),
  AuthEndPoint: Symbol.for("AuthEndPoint"),
  AuthRepository: Symbol.for("AuthRepository"),
  AuthLocalDataSource: Symbol.for("AuthLocalDataSource"),
  LoginUseCase: Symbol.for("LoginUseCase"),
  LogoutUseCase: Symbol.for("LogoutUseCase"),
};

export default AuthSymbols;
