export enum HttpStatusCode {
  noContent = 204,
  unathorized = 401,
}

export type HttpResponse = {
  statusCode: number
  body?: any
}
