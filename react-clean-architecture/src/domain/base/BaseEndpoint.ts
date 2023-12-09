import { RequestConfigType } from './HttpClient'

type BaseEndpoint<Keys extends string> = {
  [key in Keys]: RequestConfigType
}

export default BaseEndpoint
