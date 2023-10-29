import type { Method } from "./Method";
import axios, { isAxiosError } from "axios";
import CommonErrorMessage from "./CommonErrorMessage";
import HttpError from "./HttpError";
import { injectable } from "inversify";
import "reflect-metadata";

export type RequestType<D = undefined> = {
  method: Method;
  url: string;
  data?: D;
};

@injectable()
class HttpClient {
  protected baseURL = "http://localhost:3000";

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  /**
   * http 통신을 위한 메소드
   *
   * @param {RequestType<D>} config 통신을 위해 필요한 값들
   * @param {Record<number, string>} errors 에러 발생시 status code 마다 대응되는 에러 메시지
   */
  protected async request<R = any, D = any>(
    config: RequestType<D>,
    errors: Record<number, string>,
  ): Promise<R>;
  protected async request<R = any>(
    config: RequestType<undefined>,
    errors: Record<number, string>,
  ): Promise<R>;

  protected async request<R, D>(
    { method, url, data }: RequestType<D>,
    errors: Record<number, string>,
  ): Promise<R> {
    try {
      const res = await axios<R>({
        baseURL: this.baseURL,
        method,
        url,
        data,
      });

      return res.data;
    } catch (e) {
      throw new HttpError(
        this.errorMapper(e, errors),
        this.findStatusCode(e),
        method,
        url,
      );
    }
  }

  private errorMapper(error: unknown, errors: Record<number, string>): string {
    const defaultMessage =
      errors[500] ?? CommonErrorMessage.INTERNAL_SERVER_ERROR;

    if (!isAxiosError(error)) return defaultMessage;
    if (!error?.response?.status) return defaultMessage;

    return errors[error.response.status] ?? defaultMessage;
  }

  private findStatusCode(error: unknown): number {
    if (!isAxiosError(error)) return 500;
    return error.response?.status ?? 500;
  }
}

export default HttpClient;
