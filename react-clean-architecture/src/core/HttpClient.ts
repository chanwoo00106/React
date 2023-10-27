import type { Method } from "axios";
import axios, { isAxiosError } from "axios";
import CommonErrorMessage from "./CommonErrorMessage";

export type RequestType<D = undefined> = {
  method: Method;
  url: string;
  data?: D;
};

export type ResponseType<R> =
  | {
      isError: false;
      data: R;
    }
  | {
      isError: true;
      message: string;
    };

class HttpClient {
  protected baseURL = "http://localhost:3000";

  private errorMapper(error: unknown, errors: Record<number, string>): string {
    const defaultMessage = CommonErrorMessage.INTERNAL_SERVER_ERROR;

    if (!isAxiosError(error)) return defaultMessage;
    if (!error?.response?.status) return defaultMessage;

    return errors[error.response.status] ?? defaultMessage;
  }

  protected async request<R, D>(
    config: RequestType<D>,
    errors: Record<number, string>,
  ): Promise<R | string>;
  protected async request<R>(
    config: RequestType<undefined>,
    errors: Record<number, string>,
  ): Promise<R | string>;

  protected async request<R, D = undefined>(
    { method, url, data }: RequestType<D>,
    errors: Record<number, string>,
  ): Promise<ResponseType<R>> {
    try {
      const res = await axios({
        baseURL: this.baseURL,
        method,
        url,
        data,
      });

      return {
        isError: false,
        data: res.data,
      };
    } catch (e) {
      return {
        isError: true,
        message: this.errorMapper(e, errors),
      };
    }
  }
}

export default HttpClient;
