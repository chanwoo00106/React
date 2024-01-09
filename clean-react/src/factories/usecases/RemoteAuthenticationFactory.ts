import { RemoteAuthentication } from '@/data/usecases/authentication/RemoteAuthentication'
import AxiosHttpClientFactory from '../http/AxiosHttpClientFactory'

const RemoteAuthenticationFactory = new RemoteAuthentication(
  '/login',
  AxiosHttpClientFactory,
)

export default RemoteAuthenticationFactory
