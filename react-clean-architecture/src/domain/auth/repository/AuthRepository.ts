import SigninRequestDto from '../dto/request/SigninRequestDto'
import SigninResponseDto from '../dto/response/SigninResponseDto'

interface AuthRepository {
  signin(data: SigninRequestDto): Promise<SigninResponseDto>
}
export default AuthRepository
