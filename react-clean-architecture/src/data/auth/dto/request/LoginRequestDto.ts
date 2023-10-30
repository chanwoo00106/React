class LoginRequestDto {
  constructor(
    readonly email: string,
    readonly password: string,
  ) {}
}

export default LoginRequestDto;
