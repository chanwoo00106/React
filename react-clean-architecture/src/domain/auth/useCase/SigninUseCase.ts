import SigninRequestDto from '../dto/request/SigninRequestDto'

interface SigninUseCase {
  execute(data: SigninRequestDto): Promise<void>
}

export default SigninUseCase
