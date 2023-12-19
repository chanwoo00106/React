import SigninRequestDto from '../dto/request/SigninRequestDto'
import SigninResponseDto from '../dto/response/SigninResponseDto'

interface RemoteAuthDataSource {
  signin(data: SigninRequestDto): Promise<SigninResponseDto>
}

export default RemoteAuthDataSource
