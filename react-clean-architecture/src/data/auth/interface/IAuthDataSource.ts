import type LoginRequestDto from "../dto/request/LoginRequestDto";
import type LoginResponseDto from "../dto/response/LoginResponseDto";

interface IAuthDataSource {
  login(data: LoginRequestDto): Promise<LoginResponseDto>;
  logout(): Promise<void>;
}

export default IAuthDataSource;
