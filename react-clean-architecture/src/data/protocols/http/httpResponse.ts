export enum HttpStatusCode {
  unauthorized = 401,
}

export type HttpResponse = {
  statusCode: HttpStatusCode
  body?: any
}
