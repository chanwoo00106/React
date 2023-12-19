import FetchMyInfoResponseDto from '../dto/response/FetchMyInfoResponseDto'

interface RemoteUserDataSource {
  fetchMyInfo(): Promise<FetchMyInfoResponseDto | undefined>
}

export default RemoteUserDataSource
