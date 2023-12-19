import FetchMyInfoResponseDto from '../dto/response/FetchMyInfoResponseDto'

interface UserRepository {
  fetchMyInfo(): Promise<FetchMyInfoResponseDto | undefined>
}

export default UserRepository
