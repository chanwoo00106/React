import { injectable } from "inversify";
import type { RequestType } from "./RequestType";
import "reflect-metadata";

@injectable()
abstract class IHttpClient {
  protected abstract baseURL: string;

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  protected abstract request<R = any, D = any>(
    config: RequestType<D>,
    errors: Record<number, string>,
  ): Promise<R>;
  protected abstract request<R = any>(
    config: RequestType<undefined>,
    errors: Record<number, string>,
  ): Promise<R>;
}

export default IHttpClient;
