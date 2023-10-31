class LoginResponseDto {
  constructor(
    readonly accessToken: string,
    readonly accessExpiresAt: string,
  ) {}
}

export default LoginResponseDto;
