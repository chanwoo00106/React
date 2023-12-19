import SigninRequestDto from '../dto/request/SigninRequestDto'

interface AuthRepository {
  signin(data: SigninRequestDto): Promise<void>
}
export default AuthRepository
