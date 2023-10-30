import type LoginRequestDto from "../dto/request/LoginRequestDto";

interface IAuthDataSource {
  login(data: LoginRequestDto): Promise<void>;
  logout(): Promise<void>;
}

export default IAuthDataSource;
