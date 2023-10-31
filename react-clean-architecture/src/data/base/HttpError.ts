import type { Method } from "./Method";

class HttpError {
  constructor(
    readonly message: string,
    readonly status: number,
    readonly method: Method,
    readonly url: string,
  ) {}
}

export default HttpError;
