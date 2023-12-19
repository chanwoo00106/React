import FetchMyInfoResponseDto from '../dto/response/FetchMyInfoResponseDto'

interface FetchMyInfoUseCase {
  execute(): Promise<FetchMyInfoResponseDto | undefined>
}

export default FetchMyInfoUseCase
