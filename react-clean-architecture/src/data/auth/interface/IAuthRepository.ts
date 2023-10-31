import type LoginRequestDto from "../dto/request/LoginRequestDto";

interface IAuthRepository {
  login(data: LoginRequestDto): Promise<void>;
  logout(): Promise<void>;
}

export default IAuthRepository;
