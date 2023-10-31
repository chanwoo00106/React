import type LoginRequestDto from "@src/data/auth/dto/request/LoginRequestDto";

interface ILoginUseCase {
  execute(data: LoginRequestDto): Promise<void>;
}

export default ILoginUseCase;
